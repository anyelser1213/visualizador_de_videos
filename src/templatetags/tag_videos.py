from django import template
from atexit import register

from src.models import *

register = template.Library()

############## Modelos para tomar ##################
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
    
    
    respuesta = Categoria.objects.filter(nombre=categoria_nombre,activo=True)
    #print("categoria: ",respuesta)





    rutaCategoria = os.path.join(settings.MEDIA_ROOT)+"/videos/"+categoria_nombre
    #print("La carpeta de categoria tiene:",rutaCategoria)
    archivosDeCarpetaCategoria = os.listdir(rutaCategoria)

    ####### AQUI VA LOGICA NUEVA ########
    Q1 = Subcategoria.objects.none()
    for subcategoriaPRUEBA in range(len(archivosDeCarpetaCategoria)):
        #print(subcategoriaPRUEBA,": ",archivosDeCarpetaCategoria[subcategoriaPRUEBA])
        
        #Con esto concatenamos queryset
        Q1 |= Subcategoria.objects.filter(nombre=str(archivosDeCarpetaCategoria[subcategoriaPRUEBA]),activo=True)
        
        #print(Q1)
        #Q1.union(Q1,Q2)
    #####################################


    #print("lo que quedo: ",Q1)
    #print(archivosDeCarpetaCategoria)
    existen = False

    for subcategoria in Q1:
        
        #print(subcategoria)
        rutaSubCategoria = os.path.join(settings.MEDIA_ROOT)+"/videos/"+categoria_nombre+"/"+str(subcategoria.nombre)
        #print("La carpeta de subcategoria tiene:",rutaSubCategoria)
        archivosDeCarpetaSubCategoria = os.listdir(rutaSubCategoria)

        #print(archivosDeCarpetaSubCategoria)
        existen = True if len(archivosDeCarpetaSubCategoria)>0 else False
        if existen:
            break
        else:
            pass


    #rutaSubCategoria = os.path.join(settings.MEDIA_ROOT)+"/videos/"+categoria_nombre+"/"+archivosDeCarpetaCategoria[0]
    #print("La carpeta de subcategoria tiene:",rutaSubCategoria)
    #archivosDeCarpetaSubCategoria = os.listdir(rutaSubCategoria)
    #print(archivosDeCarpetaSubCategoria)

    #print("tipo de dato: ",type(archivos))
    #print("cantidad de elementos: ",len(archivos))
    




    #print("existe:",respuesta.exists())

    #print("\n")
    #return Video.objects.all()
    return existen


@register.simple_tag
def subcategoria_existe(categoria,subcategoria_nombre): # Only one argument.

    #print("\n\n")
    categoriaElegida = Categoria.objects.get(pk=categoria)
    respuesta = Subcategoria.objects.filter(categoria=categoria,nombre=subcategoria_nombre,activo=True)
    #respuesta1 = Video.objects.filter(categoria=categoria,mes=mes).exists()
    #print("Categoria", categoriaElegida.nombre)
    #print("SubCategoria", subcategoria_nombre)

    try:

        rutaSubCategoria = os.path.join(settings.MEDIA_ROOT)+"/videos/"+categoriaElegida.nombre+"/"+subcategoria_nombre
        #print("La carpeta de Subcategoria tiene:",rutaSubCategoria)
        archivosDeCarpetaSubCategoria = os.listdir(rutaSubCategoria)
        #print(archivosDeCarpetaSubCategoria)

        existen = True if len(archivosDeCarpetaSubCategoria)>0 else False
        return existen

    except:

        return False
    





    


    #existen = False
    #print("Existe subcategoria", respuesta.exists())
    #return respuesta
    #return respuesta.exists()

@register.inclusion_tag('src/subcategorias_videos.html')
def videos_subcategoria(categoria_nombre, subcategoria_nombre):

    #print("La categoria insertada es: ", categoria_nombre," y el mes es: ",subcategoria_nombre)
    videos = Video.objects.all()
    #videos = Video.objects.filter(categoria=categoriaAsig,mes=mesAsig)
    existen = False
    #print("Probando aqui:",videos," cantidad: ",videos.count())
    archivos = [] #Creamos la lista
    try:

        ruta = os.path.join(settings.MEDIA_ROOT)+"/videos/"+categoria_nombre+"/"+subcategoria_nombre
        #print("La ruta es:",ruta)
        archivos = sorted(os.listdir(ruta))
        #print(archivos)
        #print("tipo de dato: ",type(archivos))
        #print("cantidad de elementos: ",len(archivos))
        existen = True if len(archivos)>0 else False
        #dirname = os.path.dirname(os.path.join(settings.MEDIA_ROOT)+"/videos/zulia/enero/"+archivos[0])
        
        # Muestra el directorio del archivo
        #print("Booleano: ",existen)

    except:

        pass
        #os.path.exists es para saber si existe la ruta
        #print(os.path.exists(os.path.join(settings.MEDIA_ROOT)+"/videos/zulia/enero/"))
        #print("No existe la ruta aqui")


    #ruta = "videos/"+categoria_nombre+"/"+subcategoria_nombre
    return {
        'existe':existen,
        'videos':archivos,
        'ruta':"/media/videos/"+categoria_nombre+"/"+subcategoria_nombre+"/"
    }


