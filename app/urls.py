from django.urls import path
from . import views

urlpatterns = [
     path('', views.HomeView.as_view(), name='home'),
     path('quote', views.QuoteView.as_view(), name='quote')
]
