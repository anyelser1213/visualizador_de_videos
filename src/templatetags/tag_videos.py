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



##########################################################
#Mantenemos esto aqui por si requieren de esto nuevamente#
##########################################################

@register.simple_tag
def videos_categoria_existe(categoria): # Only one argument.
    
    
    respuesta = Video.objects.filter(categoria=categoria).exists()
    print("La categoria insertada es: ",respuesta)
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


##################################################
#     AQUI TERMINA LOS PRIMEROS TAG QUE HICE     #
##################################################



###################################################
#                   NUEVOS TAG                    #
###################################################

@register.simple_tag
def categoria_existe(categoria_nombre): # Only one argument.
    
    print("AQUI ENTRAMOS SIEMPRE...")
    respuesta = Categoria.objects.filter(nombre=categoria_nombre)
    print("categoria: ",respuesta)
    print("existe:",respuesta.exists())
    #return Video.objects.all()
    return respuesta.exists()


@register.simple_tag
def subcategoria_existe(categoria,subcategoria_nombre): # Only one argument.
    
    respuesta = Subcategoria.objects.filter(categoria=categoria,nombre=subcategoria_nombre)
    #respuesta1 = Video.objects.filter(categoria=categoria,mes=mes).exists()
    print("Probando las coasas", respuesta)
    print("Existe", respuesta.exists())
    #return respuesta
    return respuesta.exists()

@register.inclusion_tag('src/mes_videos.html')
def videos_subcategoria(categoriaAsig, mesAsig):

    print("La categoria insertada es: ", categoriaAsig," y el mes es: ",mesAsig)
    videos = Video.objects.all()
    #videos = Video.objects.filter(categoria=categoriaAsig,mes=mesAsig)
    existen =videos.exists()
    #print("Probando aqui:",videos," cantidad: ",videos.count())
    return {
        'existe':existen,
        'videos':videos
    }





