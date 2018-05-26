from django.shortcuts import render
from .models import People

# Create your views here.
def people_list(request):
    people_list1 = People.objects.filter(rsdirection="1")
    people_list2 = People.objects.filter(rsdirection="2")
    people_list3 = People.objects.filter(rsdirection="3")
    return render(request,"people/people_list.html",{"people_list1":people_list1,"people_list2":people_list2,"people_list3":people_list3})