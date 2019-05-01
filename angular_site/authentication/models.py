from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models

# Create your models here.
class AccountManager(UserManager):
  def create_user(self, username, password=None, **kwargs):
    if not username:
      raise ValueError('Users must have a valid username.')

    if not kwargs.get('email'):
      raise ValueError('Users must have a valid email address.')

    account = self.model(
        username=username, email=self.normalize_email(kwargs.get('email'))
    )

    account.set_password(password)
    account.save()

    return account

  def create_superuser(self, username, password, **kwargs):
    account = self.create_user(username, password, **kwargs)

    account.is_admin = True
    account.is_staff = True
    account.is_superuser = True
    account.save()

    return account


class Account(AbstractUser):
  email = models.EmailField(unique=True)
  username = models.CharField(max_length=40, unique=True)

  first_name = models.CharField(max_length=40, blank=True)
  last_name = models.CharField(max_length=40, blank=True)
  tagline = models.CharField(max_length=140, blank=True)

  is_admin = models.BooleanField(default=False)

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = AccountManager()

  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email']

  def __unicode__(self):
    return self.username

  def get_full_name(self):
    return ' '.join([self.first_name, self.last_name])

  def get_short_name(self):
    return self.first_name
