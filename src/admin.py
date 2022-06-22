from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Permission

from .models import *


#Con esto modificamos los titulos en el admin de django
admin.site.site_header = 'Visualizador de videos'
admin.site.index_title = 'Panel de control del visualizador de videos'
admin.site.site_title = 'Visualizador de videos'

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



class CategoriaAdmin(admin.ModelAdmin):
    #readonly_fields = ('categoria', 'nombre') #Si lo colocas no se podra agregar nada
    list_display = ('nombre', 'activo',)
    ordering = ('nombre',)


class SubcategoriaAdmin(admin.ModelAdmin):
    #readonly_fields = ('categoria', 'nombre') #Si lo colocas no se podra agregar nada
    list_display = ('categoria', 'nombre', 'activo',)
    ordering = ('nombre',)

class VideoAdmin(admin.ModelAdmin):
    #readonly_fields = ('categoria', 'nombre') #Si lo colocas no se podra agregar nada
    list_display = ('categoria','subcategoria', 'nombre', 'activo','video')
    ordering = ('nombre',)




#Aqui registramos los elementos para que aparezcan en el admin de django
admin.site.register(Usuarios, UserAdmin)
admin.site.register(Permission)


#Modelos del proyecto
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Subcategoria,SubcategoriaAdmin)
admin.site.register(Video,VideoAdmin)
