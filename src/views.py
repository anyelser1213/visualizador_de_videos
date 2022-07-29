
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
        print("Permisos: ",Lista_Categorias_Permitidas)
        #print("Permisos cantidad: ",len(Lista_Categorias_Permitidas))
        #print("Ruta que frao:",settings.MEDIA_ROOT)

        #Solo se mostraran en base a los permisos del usuario
        Q1 = Categoria.objects.none()
        if len(Lista_Categorias_Permitidas)>0:

            for Nombre_Categoria in Lista_Categorias_Permitidas:

                #print(Nombre_Categoria, Nombre_Categoria.find('_')," -------------- ",Nombre_Categoria[Nombre_Categoria.index('_')+1:])
                #print(Nombre_Categoria[Nombre_Categoria.index('_')+1:])
                
                #Con esto concatenamos queryset
                Q1 |= Categoria.objects.filter(nombre=str(Nombre_Categoria[Nombre_Categoria.index('_')+1:]),activo=True).exclude(nombre="descargas")
            #Q1 |= 
        
        context['categorias'] = Q1
        
        context['subcategorias'] = Subcategoria.objects.filter(activo=True)

        ############## ACTIVOS AQUI ################

        if "src.ver_descargas" in Lista_Categorias_Permitidas:
            print("Si tienes el permiso de esta categoria descargas")
            context['categoriaDescargas'] = Categoria.objects.filter(nombre="descargas")
        else:
            print("No tienes el permiso de esta categoria descargas")
            context['categoriaDescargas'] = Categoria.objects.none()

        ############################################
        

        print("Probando aqui abajo jajajaj")
        context['usuario'] = self.request.user
        return context



def pruebas(request):


    return render(request, 'pruebas.html', {})




###### APIS ##########


def Probando(request):

    print("probando usuario:",request.user)
    if request.method == 'GET':

        #ESTO ES PARA EL FONDO DE INDEX
        try:
            fondo = Usuarios.objects.get(username=request.user.username)
            if fondo.imagenFondoEscritorio =="":
                fondo = "null"
        except Fondos.DoesNotExist:
            fondo = "null"

        #print(fondo)
        #print("jajajajaja: ",fondo.imagenFondoEscritorio)
        #print(fondo.imagenFondoEscritorio.url)
        prueba = fondo.imagenFondoEscritorio.url
        datos = {'FondoIndex':prueba}



        #ESTO ES PARA EL ICONO DE LA PAGINA
        try:
            IconoWeb = Fondos.objects.get(nombre="imagen_login")
            if IconoWeb.imagen =="":
                IconoWeb.imagen = "/media/default/default.jpeg"
                #Concatenamos el diccionario
                datos|= {'IconPagWeb':str(IconoWeb.imagen)}
            else:
                #Concatenamos el diccionario
                datos|= {'IconPagWeb':IconoWeb.imagen.url}

        except Fondos.DoesNotExist:

            IconoWeb.imagen = "/media/default/default.jpeg"
            #Concatenamos el diccionario
            datos|= {'IconPagWeb':str(IconoWeb.imagen)}


        

        
        #print(datos)
        #print("concatenando:",datos)
        #datos={'FondoIndex':prueba,'IconPagWeb':IconoWeb.imagen.url,'IconPagWeb2':"media/"+str(IconoWeb.imagen)}
        return JsonResponse(datos)


def api_login(request):


    if request.method == 'GET':


        #Variables para probar
        respuestaFondoLogin = ""
        respuestaImagenLogin = ""
        #Con esto aplicamos validaciones
        print("Entramos a la api_login")


        ############# Respuesta para el fondo del login ###############
        try:
            fondoLogin = Fondos.objects.get(nombre="fondoLogin")
            print(fondoLogin.imagen)

            if fondoLogin.imagen =="":
                respuestaFondoLogin = "null"
            else:
                respuestaFondoLogin = fondoLogin.imagen.url

        except Fondos.DoesNotExist:
            respuestaFondoLogin = "null"

        datos={'FondoLogin':respuestaFondoLogin}



    ############# Respuesta para la imagenLogin ###############
        try:
            ImagenLogin = Fondos.objects.get(nombre="imagen_login")
            print("Probando")
            #print("imagen: ",ImagenLogin.imagen)
            print("Imagen URL:")
            if ImagenLogin.imagen =="":

                respuestaImagenLogin = "/media/default/default.jpeg"
                #Concatenamos el diccionario
                datos|= {'ImagenLogin':str(respuestaImagenLogin)}

            else:

                respuestaImagenLogin = ImagenLogin.imagen.url
                datos|= {'ImagenLogin':respuestaImagenLogin}
        except Fondos.DoesNotExist:
            respuestaImagenLogin = "null"




        
        #ESTO ES PARA EL ICONO DE LA PAGINA
        try:
            IconoWeb = Fondos.objects.get(nombre="imagen_login")
            if IconoWeb.imagen =="":
                IconoWeb.imagen = "/media/default/default.jpeg"
                #Concatenamos el diccionario
                datos|= {'IconPagWeb':str(IconoWeb.imagen)}
            else:
                #Concatenamos el diccionario
                datos|= {'IconPagWeb':IconoWeb.imagen.url}

        except Fondos.DoesNotExist:

            IconoWeb.imagen = "/media/default/default.jpeg"
            #Concatenamos el diccionario
            datos|= {'IconPagWeb':str(IconoWeb.imagen)}


        #print(fondo)
        #print(fondo.imagen)
        #print(fondo.imagen.url)

        #
        #
        return JsonResponse(datos)

def PasarDatos(request):

    return response("datos")

