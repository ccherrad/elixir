from django.urls import path
from .views import index, order, success

urlpatterns = [
    path('', index, name="index"),
    path('order', order, name='order'),
    path('success', success, name='success')
]
