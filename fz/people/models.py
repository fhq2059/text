from django.db import models
from index.models import Rsdirection
from filer.fields.image import FilerImageField



class People(models.Model):
    name = models.CharField(max_length=300)
    title = models.CharField(max_length=300,blank=True)
    interest = models.CharField(max_length=300,blank=True)
    rsdirection = models.ForeignKey(Rsdirection,on_delete=models.CASCADE)
    image = FilerImageField(related_name='people_image',null=True)

    def __str__(self):
        return self.name
# Create your models here.
