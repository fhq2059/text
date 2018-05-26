from django.db import models
from django.utils import timezone
from filer.fields.image import FilerImageField

class Paper(models.Model):
    title = models.CharField(max_length=300)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    class Meta:
        ordering = ("-publish",)

    def __str__(self):
        return self.title

class Rsdirection(models.Model):
    title = models.CharField(max_length=300)
    body = models.TextField()
    image = FilerImageField(related_name='rsdirection_image', null=True)
    def __str__(self):
        return self.title

class Active(models.Model):
    title = models.CharField(max_length=300)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    image = FilerImageField(related_name='active_image', null=True)
    class Meta:
        ordering = ("-publish",)

    def __str__(self):
        return self.title
# Create your models here.
