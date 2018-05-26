
from django.conf.urls import url
from django.contrib.staticfiles.views import serve

from fz.settings import MEDIA_ROOT
from . import views

app_name="monographs"

urlpatterns = [
    url(r'^monographs-list/$', views.monographs_list, name='monographs_list'),
    url(r'^monographs-list-year/(?P<year>\d+)/$', views.monographs_list_year, name='monographs_list_year'),

]