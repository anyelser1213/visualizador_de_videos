from django import template
from atexit import register

register = template.Library()


@register.simple_tag
def lower(value): # Only one argument.
    
    return "ENTREGASTE "+value