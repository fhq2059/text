from django.contrib import admin
from .models import Awards

class AwardAdmin(admin.ModelAdmin):
    list_display = ("time","awardname","projectname","company","role")

admin.site.register(Awards,AwardAdmin)
# Register your models here.
