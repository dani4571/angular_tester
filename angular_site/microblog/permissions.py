from rest_framework import permissions

SAFE_METHODS = ('GET', 'HEAD', 'OPTIONS')

class IsAccountOwner(permissions.BasePermission):
  def has_object_permission(self, request, view, account):
    if request.user:
      return account == request.user
    return False

class ReadOnly(permissions.BasePermission):
    """
    The endpoint is read-only request.
    """

    def has_permission(self, request, view):
        return (
            request.method in SAFE_METHODS
        )