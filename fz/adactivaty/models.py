from django.db import models
from filer.fields.image import FilerImageField

class Adactivaty(models.Model):
    title = models.CharField(max_length=300)
    image = FilerImageField(related_name='adactivaty_image',null=True)
    year = models.CharField(max_length=300,blank=True)
    def __str__(self):
        return self.title
# Create your models here.
