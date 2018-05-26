from django.contrib import admin
from .models import Paper,Rsdirection,Active

class PaperAdmin(admin.ModelAdmin):
    list_display =("title","body","publish")

    class Media:
        js = (
            '/static/js/kindeditor/kindeditor-all.js',
            '/static/js/kindeditor/kindeditor-all-min.js',
            '/static/js/kindeditor/lang/zh_CN.js',
            '/static/js/kindeditor/config.js'
        )
admin.site.register(Paper,PaperAdmin)

class RsdirectionAdmin(admin.ModelAdmin):
    list_display = ("title","body")
    class Media:
        js = (
            '/static/js/kindeditor/kindeditor-all.js',
            '/static/js/kindeditor/kindeditor-all-min.js',
            '/static/js/kindeditor/lang/zh_CN.js',
            '/static/js/kindeditor/config.js'
        )
admin.site.register(Rsdirection,RsdirectionAdmin)

class ActiveForm(admin.ModelAdmin):
    list_display = ("title","body","publish")

    class Media:
        js = (
            '/static/js/kindeditor/kindeditor-all.js',
            '/static/js/kindeditor/kindeditor-all-min.js',
            '/static/js/kindeditor/lang/zh_CN.js',
            '/static/js/kindeditor/config.js'
        )
admin.site.register(Active,ActiveForm)
# Register your models here.
