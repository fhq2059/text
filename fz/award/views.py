from django.shortcuts import render
from .models import Awards

def award_list(request):
    awards = Awards.objects.all()
    return render(request, "award/award_list.html", {"awards": awards})

# Create your views here.
