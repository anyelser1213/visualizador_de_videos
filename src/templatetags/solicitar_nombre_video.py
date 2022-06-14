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
def videos_cantidad(categoria,mes):

    print("La categoria insetada es: ", categoria," y el mes es: ", mes)
    videos = Video.objects.all()
    print("Probando aqui:",videos," cantidad: ",videos.count())
    return {
        'videos':videos
    }






