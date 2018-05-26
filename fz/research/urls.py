
from django.conf.urls import url

from . import views

app_name="research"

urlpatterns = [
    url(r'^researchs/$', views.researchs, name="researchs"),
    # url(r'^title/(?P<article_id>\d)/$',views.news_article,name="news_article"),
]