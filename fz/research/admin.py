from django.contrib import admin
from .models import Research

class ResearchAdmin(admin.ModelAdmin):
    list_display = ("name","orientation","time","rank")

admin.site.register(Research,ResearchAdmin)
# Register your models here.
