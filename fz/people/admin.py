from django.contrib import admin
from .models import People

class PeopleAdmin(admin.ModelAdmin):
    list_display = ("name","title","interest","rsdirection")
    ordering = ('rsdirection',)

admin.site.register(People,PeopleAdmin)
# Register your models here.
