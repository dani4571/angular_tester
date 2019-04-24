from django.db import models
from django.conf import settings
from django.utils import timezone

class BlogPost(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	date = models.DateTimeField(
		default=timezone.now
	)
	body = models.CharField(default='', max_length=200)

	def __str__(self):
		return self.body