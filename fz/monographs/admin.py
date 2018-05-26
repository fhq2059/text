from django.contrib import admin
from .models import Monographs

class MonographsAdmin(admin.ModelAdmin):
    list_display = ("name","subject","publishing","time")

admin.site.register(Monographs,MonographsAdmin)
# Register your models here.
