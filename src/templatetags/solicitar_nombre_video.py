from django import template
from atexit import register

register = template.Library()


@register.simple_tag
def lower(value): # Only one argument.
    
    return "ENTREGASTE "+value



@register.inclusion_tag('inclusion.html')
def videos_contador():

    return {
        'saludo':'Anyelser Bienvenido'
    }