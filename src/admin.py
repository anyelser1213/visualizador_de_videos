from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Permission

from .models import *


#Con esto modificamos los titulos en el admin de django
admin.site.site_header = 'Nombre de mi sitio'
admin.site.index_title = 'Panel de control de mi sitio'
admin.site.site_title = 'Titulo en la pestaña del navegador'

class UserAdmin(BaseUserAdmin):
    
    ordering = ('email',)
    
    #Aqui es cuando se va a editar
    fieldsets = (
        #Aqui es para editar
        ("Informacion Esencial", {'fields': ('username', 'password','rol')}),
        ("Permisologia", {
            'classes': ('wide',),
            'fields': ('is_superuser','admin','groups','user_permissions'),
        }),
    )

    #Aqui es cuando se esta creando
    add_fieldsets = (
        ("Informacion Obligatoria", {
            'classes': ('wide',),
            'fields': ('username','email', 'password1', 'password2'),
        }),
        ("Informacion Importante", {
            'classes': ('wide',),
            'fields': ('activo', 'is_superuser','admin', 'cedula','telefono'),
            #'fields': ('activo', 'is_superuser','admin', 'cedula','plan_elegido','rol','telefono'),
        }),
        ("Permisologia", {
            'classes': ('wide',),
            'fields': ('groups','user_permissions'),
        }),
    )


    #Para indicarle al admin que campos queremos mostrar
    list_display = ('username', 'email','is_superuser','admin')
    #list_display = ('username', 'email','is_superuser','admin','rol','plan_elegido')
    list_filter = ('username','email')
    
    #Para especificar que campos van a efectuar la busqueda
    search_fields = ('username', 'nombres', 'apellidos', 'email')
    filter_horizontal = ()


#Aqui registramos los elementos para que aparezcan en el admin de django
admin.site.register(Usuarios, UserAdmin)
admin.site.register(Permission)

admin.site.register(Video)
