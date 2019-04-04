from django.shortcuts import render
from django.http import HttpResponse 
from django.http import HttpResponseRedirect
from django.utils import timezone
import json 
from .models import Conversion
from django.urls import reverse
from django.template import loader
# Create your views here.

def isNumber(d):
    for s in d:
        if ((s < '0' or s > '0') and (s != '.')): return False
    return True


def convert(request): 

	number = float(request.GET['value'])
	item = Conversion
	t_oz = number * item.troys
	respond = {"units" : "t_oz", "value": t_oz}
	return HttpResponse(json.dumps(respond))


def init(request):
	Conversion.objects.all().delete()

	con = Conversion()
	print(cv.t_oz)
	con.save()
	return HttpResponseRedirect(reverse('index', args = ()))
