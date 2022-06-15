from django import template
from atexit import register

from src.models import Video

register = template.Library()

#Modelos para tomar
@register.simple_tag
def lower(value): # Only one argument.
    
    return "ENTREGASTE "+value



@register.inclusion_tag('inclusion.html')
def ejemplo_contador():

    return {
        'saludo':'Anyelser Bienvenido'
    }



@register.inclusion_tag('src/enlaces_videos.html')
def videos_categoria(categoria):

    print("La categoria insetada es: ", categoria," y el mes es: ")
    videos = Video.objects.filter(categoria=categoria)
    print("Probando aqui:",videos," cantidad: ",videos.count())
    return {
        'videos':videos
    }


def videos_mes(categoriaAsig, mesAsig):

    print("La categoria insertada es: ", categoriaAsig," y el mes es: ",mesAsig)
    videos = Video.objects.filter(categoria=categoriaAsig,mes=mesAsig)
    print("Probando aqui:",videos," cantidad: ",videos.count())
    return {
        'videos':videos
    }








