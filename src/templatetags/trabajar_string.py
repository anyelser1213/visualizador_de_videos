from django import template
from atexit import register

from src.models import *

register = template.Library()

#Modelos para tomar
@register.simple_tag
def quitar_extension(nombre): # Only one argument.
    
    respuesta = nombre[:nombre.find(".")]
    return respuesta