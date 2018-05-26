from django.db import models


class Awards(models.Model):
    time = models.CharField(max_length=300)
    awardname = models.CharField(max_length=300,blank=True)
    projectname = models.CharField(max_length=300,blank=True)
    company = models.CharField(max_length=300,blank=True)
    role = models.CharField(max_length=300,blank=True)

    def __str__(self):
        return self.projectname
# Create your models here.
