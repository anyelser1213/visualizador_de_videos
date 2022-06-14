from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name ="src"

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    
    path('login/', views.Login.as_view() ,name="login"),
    path('logout/', views.Logout.as_view() ,name="logout"),



    #Para pruebas
    path('pruebas/', views.pruebas ,name="pruebas"),

    
    
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

