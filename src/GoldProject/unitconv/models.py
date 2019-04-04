from django.db import models

# Create your models here.

class Conversion(models.Model):
	troys = 14.5833
	pounds = 0.0686
	def __str__(self): return self.troys
