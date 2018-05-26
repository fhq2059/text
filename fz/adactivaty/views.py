from django.shortcuts import render
from .models import Adactivaty
# Create your views here.
def adactivaty_list(request):
    adactivatys_list = Adactivaty.objects.all()
    return render(request, "adactivaty/adactivaty_list.html",{"adactivatys_list":adactivatys_list,})
# Create your views here.

def adactivaty_list_year(request,year):
    adactivatys_list = Adactivaty.objects.filter(year=year)

    return render(request, "adactivaty/adactivaty_list.html",{"adactivatys_list":adactivatys_list,})
