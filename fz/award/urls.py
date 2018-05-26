
from django.conf.urls import url

from . import views

app_name="award"

urlpatterns = [
    url(r'^award-list/$', views.award_list, name="award_list"),

]