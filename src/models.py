import os
import shutil #libreria para borrar carpetas esten o no llenas
from django.conf import settings
from django.db import models

#Estos dos modelos son para crear permisos personalizados
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_delete, post_delete


# Create your models here.

##################################################################################################
####################### Modelos para Usuarios ####################################################

class UsuarioManager(BaseUserManager):

    def create_user(self,email,username,password=None,admin = False,is_superuser =False,plan_elegido="gratis"):
        print("Creamos Usuario Normal")
        #if not email:
        #    raise ValueError('El usuario debe tener un correo electronico')

        usuario = self.model(
            
            username = username,
            email = self.normalize_email(email),
            password = password,
            #rol = rol,
            admin =admin,
            is_superuser = is_superuser,
            #plan_elegido = plan_elegido,
        )

        #aqui encriptamos la clave para no guardar en texto plano
        print("ENCRIPTAMOS", password)
        usuario.set_password(password)
        usuario.save()
        return usuario
    
    

    #Funcion para usuario administrador
    def create_superuser(self,email,username,password,admin = True,is_superuser = True):
        print("Creamos superusuario")

        usuario = self.create_user(
            email = email,  
            username = username,
            #rol = rol,
            #plan_elegido = plan_elegido,
            password = password,
            admin =admin,
            is_superuser = is_superuser
        )
        
            
            
        print("Entramos en superuser")
        input()
        usuario.save()
        return usuario



# Heredamos de AbstractBaseUser para adaptarlo a nuestro gusto
class Usuarios(AbstractBaseUser,PermissionsMixin):

    #(Lo que se guarda en bases de datos, lo que se ve al usuario)
    usuario_tipos = [
        ('master','Master'),
    #    ('empresa','Empresa'),
    #    ('entrevistador','Entrevistador'),
    #    ('candidato','Candidato'),
        ('usuario','Usuario'),
    ]

    #tipo_plan = [
    #    ('gratis','Free'),
    #    ('pago','Pay'),
    #]
    
    
    username = models.CharField("Username",max_length=200,unique=True)
    nombres = models.CharField("Nombres",max_length=200,blank=True, null=True) 
    apellidos = models.CharField("Apellidos",max_length=200,blank=True, null=True) 
    email = models.EmailField("Correo Electronico",max_length=150, unique=True)
    #empresa = models.ForeignKey(Empresa,on_delete=models.CASCADE,blank=True, null=True)
    activo = models.BooleanField(default=True)#Para poder ingresar al sistema  
    is_superuser = models.BooleanField(default=False)#Este es superusuario
    admin = models.BooleanField(default=False)#Para poder ingresar al admin de django
    cedula = models.IntegerField(default=0,blank=True, null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True) 
    fecha_actualizacion = models.DateTimeField('actualizado', auto_now=True)
    direccion = models.CharField("Direccion",max_length=100,blank=True, null=True,default="Las Adjuntas") 
     
    
    #rol = models.CharField("Rol",max_length=150,choices=usuario_tipos,default='usuario',blank=True, null=True)

    #plan_elegido = models.CharField("Plan",
    #    max_length=150,
    #    choices=tipo_plan,    
    #    default='libre'
    #)

    telefono = models.CharField("Telefono", max_length=50,blank=True,null=True,default="04242020470")
    #imagen = models.ImageField("Imagen de perfil", upload_to="usuario/perfil", max_length=200,blank=True,null=True)
    
    #Para enlazar al manager que has creado
    objects = UsuarioManager()

    USERNAME_FIELD = 'username'  #Para estableccer este campo como unico
    REQUIRED_FIELDS = ['email','is_superuser'] # Campos obligatorios(los pide cuando los creas por consola)

    def __str__(self):
        return f'Usuario {self.username}'
    
    
    
    #para verificar si un usuario es administrador o no(Para entrar en el admin)
    @property
    def is_staff(self):
         # "Is the user a member of staff?"
         if self.activo:
            return self.admin
         return False
     

    def has_module_perms(self, app_label):
        return True



    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        db_table = 'usuarios'
        
        permissions = [
            #(Lo que se guarda en bases de datos, lo que se ve al usuario)
            #Permisos para master y gerente
            #("permisoscompletos", "Permisoscompletos"),
            
            
            
            
            
            
        ]#Fin de los permisos


##########################################################################################################
##########################################################################################################



class Categoria(models.Model):

    nombre = models.CharField(max_length=200,unique=True)
    activo = models.BooleanField(default=True)

    class Meta:
        
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"
        db_table = 'categoria'

        permissions = [
            #(Lo que se guarda en bases de datos, lo que se ve al usuario)
            #Permisos para master y gerente
            
            #("ver_categoria", "ver_categoria"),
            
            
            
            
            
            
        ]#Fin de los permisos
    
    def __str__(self):
        return self.nombre



    #Editando los metodos
    def save(self, *args, **kwargs): 

        print("Probando con categorias") 
        print(self.nombre)
        os.mkdir(os.path.join(settings.MEDIA_ROOT)+"/"+"videos/"+self.nombre)
        
        #self.video.name = self.categoria,"/",self.mes
        #aux = os.path.join(self.categoria,self.mes,self.video.name)
        #print(aux)
        #self.video.name = aux


        #indice_final = 
        #print(self.video.name)
        #print("prueba: ",self.video.name[:self.video.name.index('.')])

        #Permisos
        content_type = ContentType.objects.get_for_model(Categoria)
        permission = Permission.objects.create(
            codename='ver_'+self.nombre,
            name='ver_'+self.nombre,
            content_type=content_type,
        )
        permission = Permission.objects.create(
            codename='add_'+self.nombre,
            name='add_'+self.nombre,
            content_type=content_type,
        )



        
        super(Categoria, self).save(*args, **kwargs)



#Funcion de señales en Django
@receiver(pre_delete,sender=Categoria)
def BorrarCategoria(sender,instance,**kwargs):

    print(sender)
    print(instance)
    print("categoria: ",instance.nombre)


    try:
        #Para borrar el directorio y todo lo que haya dentro
        ruta = os.path.join(settings.MEDIA_ROOT)+"/videos/"+instance.nombre
        videos = Video.objects.filter(categoria=instance.id) #Aqui borramos todos los videos de esta categoria
        videos.delete()
        shutil.rmtree(ruta)

        print(ruta)
    except OSError as e:
        print(f"Error:{ e.strerror}")


    print("Se acaba de Borrar una Categoria jajaja")


class Subcategoria(models.Model):


    nombre = models.CharField(max_length=200,unique=True)
    categoria = models.ForeignKey("Categoria", on_delete=models.CASCADE)
    activo = models.BooleanField(default=True)

    
    class Meta:
        verbose_name = "Subcategoria"
        verbose_name_plural = "Subcategorias"
        db_table = 'subcategoria'

    def __str__(self):
        #return self.categoria.nombre+" ----- "+self.nombre
        return self.nombre



    #Editando los metodos
    def save(self, *args, **kwargs): 

        print("Probando con subcategorias") 
        print(self.nombre)

        os.mkdir(os.path.join(settings.MEDIA_ROOT)+"/"+"videos/"+self.categoria.nombre+"/"+self.nombre)
        
        
        super(Subcategoria, self).save(*args, **kwargs)


#Funcion de señales en Django
@receiver(pre_delete,sender=Subcategoria)
def BorrarSubacategoria(sender,instance,**kwargs):

    print(sender)
    print(instance)
    print("categoria: ",instance.categoria.nombre)
    print("subcategoria: ",instance.nombre)


    try:
        #Para borrar el directorio y todo lo que haya dentro
        ruta = os.path.join(settings.MEDIA_ROOT)+"/videos/"+instance.categoria.nombre+"/"+instance.nombre
        videos = Video.objects.filter(subcategoria=instance.id) #Aqui borramos todos los videos de esta subcategoria
        videos.delete()
        shutil.rmtree(ruta)

        print(ruta)
    except OSError as e:
        print(f"Error:{ e.strerror}")
        
        
    print("Se acaba de Borrar la subcategoria jajaja")



class Video(models.Model):
    categorias = [
        #El primer campo es para bases de datos y el segundo para visualizar
        ("zulia", 'Zulia'),
        ("zamorano", 'Zamorano'),
        ("caliente", 'Caliente'),
        ("caracas", 'Caracas'),
        ("jungla", 'Jungla'),
    ]


    nombre = models.CharField(max_length=200, null=True, blank=True)
    categoria = models.ForeignKey("Categoria", on_delete=models.CASCADE)
    subcategoria = models.ForeignKey("Subcategoria", on_delete=models.CASCADE, null=True, blank=True)
    activo = models.BooleanField(default=True)
    video = models.FileField(upload_to='videos/')

    class Meta:
        verbose_name = "Video"
        verbose_name_plural = "Videos"
        db_table = 'video'

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs): 

        print("Probando con videos") 
        #print(self.video.filename)
        
        #self.video.name = self.categoria,"/",self.mes
        #aux = os.path.join(self.categoria,self.mes,self.video.name)
        #print(aux)
        #self.video.name = aux


        #indice_final = 
        #print(self.video.name)
        #print("prueba: ",self.video.name[:self.video.name.index('.')])
        
        self.nombre = self.video.name #[:self.video.name.index('.')] #Guardamos el nombre del video
        self.video.name = os.path.join(str(self.categoria),str(self.subcategoria),self.video.name)#Guardamos la ruta
        super(Video, self).save(*args, **kwargs)

    

@receiver(post_save,sender=Video)
def CrearVideo(sender,instance,**kwargs):

    print("Se acaba de crear un video")


#Funcion de señales en Django
@receiver(pre_delete,sender=Video)
def BorrarVideo(sender,instance,**kwargs):



    #print(sender)
    #print(instance)
    print("categoria: ",instance.categoria.nombre)
    print("subcategoria: ",instance.subcategoria.nombre)
    print("elemento video: ",instance.nombre)


    try:
        #Para borrar el directorio y todo lo que haya dentro
        archivo = instance.nombre
        ruta = os.path.join(settings.MEDIA_ROOT,instance.video.name)
        #ruta = os.path.join(settings.MEDIA_ROOT)+"videos"+instance.categoria.nombre+"/"+instance.subcategoria.nombre+"\\"+instance.nombre
        
        os.remove(ruta) #Con esto borramos el archivo
        #print(ruta)
    except OSError as e:

        print(f"Error:{ e.strerror}")



    print("Se acaba de Borrar el video")

