
from django.conf.urls import url
from django.contrib.staticfiles.views import serve

from fz.settings import MEDIA_ROOT
from . import views

app_name="index"

urlpatterns = [
    url(r'^index/$', views.index, name="index"),
    url(r'^contact/$', views.contact, name="contact"),
    url(r'^centerintr/$', views.centerintr,name="centerintr"),
    url(r'^link/$', views.link,name="link"),
    url(r'^map/$', views.map,name="map"),
    url(r'^dataset/$', views.dataset,name="dataset"),
    url(r'^paper-list/$', views.paper_list,name="paper_list"),
    url(r'^actives-list/$', views.actives_list,name="actives_list"),
    url(r'^rsdirection-list/$', views.rsdirection_list, name="rsdirection_list"),
    url(r'^paper/(?P<paper_id>\d)/$',views.paper_detail,name="paper_detail"),
    url(r'^actives/(?P<active_id>\d)/$', views.actives_detail, name="actives_detail"),
    url(r'^research/(?P<rsdirection_id>\d)/$', views.rsdirection_detail, name="rsdirection_detail"),

]