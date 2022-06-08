from django.db import models

# Create your models here.





class Video(models.Model):
    nombre = models.CharField(max_length=200)
    video = models.FileField(upload_to='videos/')

    db_table = 'Video'
    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "video"
        verbose_name_plural = "Videos"
