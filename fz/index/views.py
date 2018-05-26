from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
import json
import time
from PIL import Image


from .models import Paper,Rsdirection,Active

def index(request):
    papers = Paper.objects.all()[:3]
    rsdirections = Rsdirection.objects.all()[:3]
    actives = Active.objects.all()[:2]
    return render(request,"index/index.html",{"papers":papers,"rsdirections":rsdirections,"actives":actives})


def centerintr(request):
    return render(request, "centerintr/intr.html")

def link(request):
    return render(request,"index/link.html")

def contact(request):
    return render(request, "index/contact.html")

def map(request):
    return render(request, "index/map.html")

def dataset(request):
    return render(request,"index/dataset.html")

def paper_list(request):
    paper_list = Paper.objects.all()
    return render(request, "index/paper_list.html",{"paper_list":paper_list})

def actives_list(request):
    actives_list = Active.objects.all()
    return render(request, "index/actives_list.html", {"actives_list":actives_list})

def rsdirection_list(request):
    rsdirection_list = Rsdirection.objects.all()
    return render(request, "index/rsdirection_list.html", {"rsdirection_list":rsdirection_list})

def paper_detail(request,paper_id):
    paper = get_object_or_404(Paper, id=paper_id)
    return render(request, "index/paper_detail.html", {"paper": paper})

def actives_detail(request,active_id):
    active = get_object_or_404(Active, id=active_id)
    return render(request, "index/actives_detail.html", {"active": active})

def rsdirection_detail(request,rsdirection_id):
    rsdirection = get_object_or_404(Rsdirection, id=rsdirection_id)
    return render(request, "index/rsdirection_detail.html", {"rsdirection": rsdirection})