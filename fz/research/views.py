from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import render
from .models import Research

def researchs(request):
    research1 = Research.objects.filter(orientation="互联网+智能制造方向")
    r1 = len(research1)
    research2 = Research.objects.filter(orientation="多源异构纺织数据融合方向")
    r2 = len(research2)
    research3 = Research.objects.filter(orientation="纤维材料高通量计算")
    r3 = len(research3)
    return render(request, "reserach/research_list.html", {"research1": research1,"research2": research2,"research3": research3,"r1":r1,"r2":r2,"r3":r3})
