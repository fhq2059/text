from django.db import models

class Monographs(models.Model):
    name = models.CharField(max_length=300)
    subject =  models.CharField(max_length=300)
    publishing = models.CharField(max_length=300,blank=True)
    time = models.CharField(max_length=300,blank=True)

    def __str__(self):
        return self.name
# Create your models here.
