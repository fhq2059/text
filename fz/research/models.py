from django.db import models
from django.utils import timezone


class Research(models.Model):
    name = models.CharField(max_length=200)
    orientation = models.CharField(max_length=200,blank=True)
    time = models.CharField(max_length=200,blank=True)
    projectorigin = models.CharField(max_length=200,blank=True)
    rank = models.CharField(max_length=200,blank=True)

    def __str__(self):
        return self.name



# Create your models here.
