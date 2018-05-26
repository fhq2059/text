from django.core.paginator import PageNotAnInteger, EmptyPage, Paginator
from django.shortcuts import render
from .models import Monographs

def monographs_list(request):
    monographs = Monographs.objects.all()
    paginator = Paginator(monographs, 10)
    page = request.GET.get('page')
    try:
        current_page = paginator.page(page)
        monographs_list = current_page.object_list
    except PageNotAnInteger:
        current_page = paginator.page(1)
        monographs_list = current_page.object_list
    except EmptyPage:
        current_page = paginator.page(paginator.num_pages)
        monographs_list = current_page.object_list
    return render(request, "monographs/monographs_list.html",{"monographs_list":monographs_list,"page": current_page})


def monographs_list_year(request,year):
    monographs = Monographs.objects.filter(time__istartswith=year)
    paginator = Paginator(monographs, 10)
    page = request.GET.get('page')
    try:
        current_page = paginator.page(page)
        monographs_list = current_page.object_list
    except PageNotAnInteger:
        current_page = paginator.page(1)
        monographs_list = current_page.object_list
    except EmptyPage:
        current_page = paginator.page(paginator.num_pages)
        monographs_list = current_page.object_list
    return render(request, "monographs/monographs_list.html",
                  {"monographs_list": monographs_list, "page": current_page})
