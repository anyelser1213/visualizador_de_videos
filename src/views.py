
from http.client import responses
from urllib import response
from django.contrib import messages
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse
from .models import Video
from django.shortcuts import redirect, render

#Clases para el login
from django.contrib.auth.views import LoginView, LogoutView
from .form import * #Asi importamos todos los formularios 


#Clases para las plantillas
from django.views.generic import TemplateView, CreateView, UpdateView, DetailView, ListView, DeleteView




class Login(LoginView):

    template_name = "src/login.html"
    #template_name = "plantillas_viejas/login copy.html"
    form_class = loginForm

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_authenticated:

            print("Estas autenticado y vas al INDEX.HTML")
            

        else:
            print(request.user)
            print("No estas autenticado, eres un usuario anonimo")
            return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        #print("Metodo:",self.request.method)
        #print(self.form_class())
        #context['titulo'] = "Vouchly"
        context['formRegistro'] = UsuariosForm(self.request.POST or None)
        return context





class Logout(LogoutView):

    template_name = "src/login.html"
    next_page = "src:login"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['informacion'] = "Hola..."
        return context
    



class Index(TemplateView):

    template_name = "src/index2.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("src:login")

        else:

            print("Estas autenticado GENIAL")
            #print("usuario: ",request.user)
            #print("usuario permisos: ",request.user.get_all_permissions())
            #print(request.user.has_perm('src.ver_zulia'))
            
            
            #Aqui verificamos si el usuario esta activo para que ingrese
            if request.user.activo:   
                print("Usuario activo y validado")
            else:
                print("El usuario no esta activo")
                messages.add_message(request, messages.INFO, "Usuario Inactivo")
                return redirect("src:logout")
            #return redirect("src:index")
            #print("Usuario ",request.user)

            #Esto es algo que podria funcionar en algun momento
            #grupo="prueba"
            #print('Proyecto %s' % (grupo))

            prueba = Permission.objects.filter(name="ver_caracas")
            print(prueba)

            
            #empresa_creada = Empresa.objects.filter(creado_por_id=request.user.id)


        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['informacion'] = "Hola..."



################ AQUI VA LA LOGICA DE LOS PERMISOS##############
        print("Usuario get: ",self.request.user)
        Lista_Categorias_Permitidas = list(self.request.user.get_all_permissions())
        #print("Permisos: ",Lista_Categorias_Permitidas)
        #print("Permisos cantidad: ",len(Lista_Categorias_Permitidas))
        #print("Ruta que frao:",settings.MEDIA_ROOT)

        #Solo se mostraran en base a los permisos del usuario
        Q1 = Categoria.objects.none()
        if len(Lista_Categorias_Permitidas)>0:

            for Nombre_Categoria in Lista_Categorias_Permitidas:

                #print(Nombre_Categoria, Nombre_Categoria.find('_'))
                #print(Nombre_Categoria[Nombre_Categoria.index('_')+1:])
                
                #Con esto concatenamos queryset
                Q1 |= Categoria.objects.filter(nombre=str(Nombre_Categoria[Nombre_Categoria.index('_')+1:]),activo=True)
        
        
        context['categorias'] = Q1
        context['subcategorias'] = Subcategoria.objects.filter(activo=True)


        #miVideo = Video.objects.get(pk=1)
        #print("RUTA: ",os.path.join(settings.MEDIA_ROOT))
        #print("RUTA MEDIA_ROOT: ",miVideo.video)
        #pathExt = miVideo.video.name
        #print("SIN LA R: ",pathExt)
        #print(os.name)

        try:

            archivos = os.listdir(os.path.join(settings.MEDIA_ROOT)+"/videos/zulia/enero/")
            #print(archivos[0])
            dirname = os.path.dirname(os.path.join(settings.MEDIA_ROOT)+"/videos/zulia/enero/"+archivos[0])
        
            # Muestra el directorio del archivo
            #print(dirname)
        except:
            pass
            #os.path.exists es para saber si existe la ruta
            #print(os.path.exists(os.path.join(settings.MEDIA_ROOT)+"/videos/zulia/enero/"))
            #print("No existe la ruta aqui")
            #dirname = os.path.dirname(os.path.join(settings.MEDIA_ROOT)+"/videos/zulia/enero/"+archivos[0])
        
        # Muestra el directorio del archivo
        #print(dirname)

        #print(os.path.join(settings.MEDIA_ROOT+"/"+str(miVideo.video)))
        #os.remove(os.path.join(settings.MEDIA_ROOT+"/"+str(miVideo.video)))
        
        #pathExt = r"/media/videos/zulia/enero/2021-03-22_21-01-22.mkv"
        #os.remove(os.path.join(settings.MEDIA_ROOT))
        #os.rmdir(os.path.join(settings.MEDIA_ROOT+r"/videos"))
        

        
        context['usuario'] = self.request.user
        return context



def pruebas(request):


    return render(request, 'pruebas.html', {})




###### APIS ##########


def Probando(request):
    if request.method == 'GET':


        try:
            fondo = Fondos.objects.get(nombre="fondo")
            if fondo.imagen =="":
                fondo = "null"
        except Fondos.DoesNotExist:
            fondo = "null"

        fondo = Fondos.objects.get(nombre="fondo")
        print(fondo)
        print(fondo.imagen)
        print(fondo.imagen.url)
        prueba = fondo.imagen.url


        result = Fondos.objects.filter(nombre="fondo").values("nombre")
        datos={'FondoIndex':prueba}
        return JsonResponse(datos)


def api_login(request):


    if request.method == 'GET':


        #Variables para probar
        respuestaFondoLogin = ""
        respuestaImagenLogin = ""
        #Con esto aplicamos validaciones
        print("Entramos a la api_login")
        try:
            fondoLogin = Fondos.objects.get(nombre="fondoLogin")
            print(fondoLogin.imagen)

            if fondoLogin.imagen =="":
                respuestaFondoLogin = "null"
            else:
                respuestaFondoLogin =fondoLogin.imagen.url

        except Fondos.DoesNotExist:
            respuestaFondoLogin = "null"



    ############# Respuesta para la imagenLogin ###############
        try:
            ImagenLogin = Fondos.objects.get(nombre="imagen_login")
            print("Probando")
            #print("imagen: ",ImagenLogin.imagen)
            print("Imagen URL:")
            if ImagenLogin.imagen =="":
                respuestaImagenLogin = "null"
            else:
                respuestaImagenLogin = ImagenLogin.imagen.url
        except Fondos.DoesNotExist:
            respuestaImagenLogin = "null"


        #print(fondo)
        #print(fondo.imagen)
        #print(fondo.imagen.url)

        #
        #
        datos={'FondoLogin':respuestaFondoLogin,'ImagenLogin':respuestaImagenLogin}
        return JsonResponse(datos)

def PasarDatos(request):

    return response("datos")

