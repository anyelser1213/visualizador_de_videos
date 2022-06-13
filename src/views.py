from .models import Video
from django.shortcuts import render

#Clases para el login
from django.contrib.auth.views import LoginView, LogoutView
from .form import * #Asi importamos todos los formularios 




class Login(LoginView):

    template_name = "src/login.html"
    #template_name = "plantillas_viejas/login copy.html"
    form_class = loginForm

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_authenticated:

            print("Estas autenticado y vas al INDEX.HTML")
            print(request.user)
            return redirect("src:empresa_crear")

        else:
            print(request.user)
            print("No estas autenticado, eres un usuario anonimo")
            return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        print("Metodo:",self.request.method)
        print(self.form_class())
        context['titulo'] = "Vouchly"
        context['formRegistro'] = UsuariosForm(self.request.POST or None)
        return context




        #return render(request, self.template_name, {'form': form})



def index(request):
    if request.method == "POST":
        # Fetching the form data
        Titulo = request.POST["titulo"]
        uploadedFile = request.FILES["uploadedFile"]

        # Saving the information in the database
        video = Video(
            nombre = Titulo,
            video = uploadedFile
        )
        video.save()

    documents = Video.objects.all()

    return render(request, "src/index.html", context = {
        "files": documents
    })
