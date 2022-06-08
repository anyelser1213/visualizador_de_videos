from .models import Video
from django.shortcuts import render

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
