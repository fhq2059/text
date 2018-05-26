from django.contrib import admin
from .models import Adactivaty

class AdcativatyAdmin(admin.ModelAdmin):
    list_display = ("title","image","year")

admin.site.register(Adactivaty,AdcativatyAdmin)
# Register your models here.
