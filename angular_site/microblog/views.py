from django.shortcuts import render
#from django.contrib.auth.models import User
from authentication.models import Account as User
from rest_framework import viewsets, permissions
from .models import BlogPost
from . import serializers
from .permissions import ReadOnly

def index(request, path=''):
	return render(request, 'index.html')

class UserViewSet(viewsets.ModelViewSet):
	"""
	Provides basic CRUD functions for the User model
	"""
	queryset = User.objects.all()
	serializer_class = serializers.UserSerializer
	permission_classes = (ReadOnly, )

class BlogPostViewSet(viewsets.ModelViewSet):
	"""
	Provides basic CRUD functions for Blog Post model
	"""
	queryset = BlogPost.objects.all()
	serializer_class = serializers.BlogPostSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)