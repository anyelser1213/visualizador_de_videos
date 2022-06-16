import os
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

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
    activo = models.BooleanField(default=True)   
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
         return self.admin
     

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

    nombre = models.CharField(max_length=200)
    estado = models.BooleanField(default=True)

    db_table = 'categoria'
    def __str__(self):
        return self.nombre

class Mes(models.Model):

    nombre = models.CharField(max_length=200)
    estado = models.BooleanField(default=True)

    
    class Meta:
        verbose_name = "Mes"
        verbose_name_plural = "Meses"
        db_table = 'mes'

    def __str__(self):
        return self.nombre




class Video(models.Model):
    categorias = [
        #El primer campo es para bases de datos y el segundo para visualizar
        ("zulia", 'Zulia'),
        ("zamorano", 'Zamorano'),
        ("caliente", 'Caliente'),
        ("caracas", 'Caracas'),
        ("jungla", 'Jungla'),
    ]
    meses = [
        #El primer campo es para bases de datos y el segundo para visualizar
        ("enero", 'Enero'),
        ("febrero", 'Febrero'),
        ("marzo", 'Marzo'),
        ("abril", 'Abril'),
        ("mayo", 'Mayo'),
        ("junio", 'Junio'),
        ("julio", 'Julio'),
        ("agosto", 'Agosto'),
        ("septiembre", 'Septiembre'),
        ("octubre", 'Octubre'),
        ("noviembre", 'Noviembre'),
        ("diciembre", 'Diciembre'),

    ]


    nombre = models.CharField(max_length=200)
    
    categoria = models.ForeignKey("Categoria", on_delete=models.CASCADE)
    #categoria = models.CharField(    max_length=50,    choices=categorias,    default="zulia",)
    
    mes = models.CharField(
        max_length=50,
        choices=meses,
        default="enero",
    )
    estadoMes = models.BooleanField(default=True)
    video = models.FileField(upload_to='videos/')

    db_table = 'Video'
    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs): 

        print("Probando con videos") 
        print(self.video)
        print(self.video.name)
        #print(self.video.filename)
        
        #self.video.name = self.categoria,"/",self.mes
        #aux = os.path.join(self.categoria,self.mes,self.video.name)
        #print(aux)
        #self.video.name = aux
        #print(self.video.name)
        super(Video, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "video"
        verbose_name_plural = "Videos"
