
from django.conf.urls import url

from . import views

app_name="adactivaty"

urlpatterns = [
    url(r'^adactivaty-list/$', views.adactivaty_list, name="adactivaty_list"),
    url(r'^adactivaty-list-year/(?P<year>\d+)/$', views.adactivaty_list_year, name='adactivaty_list_year'),

]