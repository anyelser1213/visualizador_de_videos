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
            print(request.user)
            return redirect("src:index")

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




        #return render(request, self.template_name, {'form': form})



class Logout(LogoutView):

    template_name = "src/login.html"
    next_page = "src:login"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['informacion'] = "Hola..."
        return context
    
class Index(TemplateView):

    template_name = "src/index.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("/login")

        else:

            print("Estas autenticado GENIAL")
            print("Usuario ",request.user)
            print("Usuario Id ", request.user.id)

            
            #empresa_creada = Empresa.objects.filter(creado_por_id=request.user.id)


        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['informacion'] = "Hola..."
        context['categorias'] = Categoria.objects.filter(estado=True)
        context['meses'] = Mes.objects.filter(estado=True)
        print("objeto:",context['meses'])

        """
        #Aqui dependiendo del tipo de usuario se ven los departamentos
        if self.request.user.rol == "master":
            pass
            context['departamentos'] = Departamento.objects.all()
            context['departamentos'] = Departamento.objects.filter(creado_por=self.request.user)
        else:
        
            context['departamentos'] = Departamento.objects.filter(creado_por=self.request.user)
            print(context['departamentos'])
        """
        
        context['usuario'] = self.request.user
        return context



def pruebas(request):


    return render(request, 'pruebas.html', {})


