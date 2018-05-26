
from django.conf.urls import url

from . import views

app_name="people"

urlpatterns = [
    url(r'^people-list/$', views.people_list, name="people_list"),

]