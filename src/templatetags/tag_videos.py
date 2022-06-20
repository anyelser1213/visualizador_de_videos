from django import template
from atexit import register

from src.models import *

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




@register.simple_tag
def videos_categoria_existe(categoria): # Only one argument.
    
    #print("La categoria insertada es: ")
    respuesta = Video.objects.filter(categoria=categoria).exists()
    #return Video.objects.all()
    return respuesta

@register.simple_tag
def videos_categoria_mes_existe(categoria,mes): # Only one argument.
    
    respuesta = Video.objects.filter(categoria=categoria,mes=mes)
    respuesta1 = Video.objects.filter(categoria=categoria,mes=mes).exists()
    #print("Probando las coasas", respuesta)
    #return respuesta
    return respuesta1



@register.inclusion_tag('src/mes_videos.html')
def videos_mes(categoriaAsig, mesAsig):

    #print("La categoria insertada es: ", categoriaAsig," y el mes es: ",mesAsig)
    #videos = Video.objects.all()
    videos = Video.objects.filter(categoria=categoriaAsig,mes=mesAsig)
    existen =videos.exists()
    #print("Probando aqui:",videos," cantidad: ",videos.count())
    return {
        'existe':existen,
        'videos':videos
    }








