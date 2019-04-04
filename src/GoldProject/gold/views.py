from django.shortcuts import render
from django.template import loader
from django.utils import timezone 
from django.http import HttpResponse
# Create your views here.


def index(request):
	temp = loader.get_template('gold/index.html')
	context = {}
	return HttpResponse(temp.render(context, request))