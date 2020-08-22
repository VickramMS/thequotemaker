from django.shortcuts import render
from django.views.generic import View
import string 
import random 

class HomeView(View):
    def get(self, request):
        return render(request, 'app/home.html')

class QuoteView(View):
    def post(self, request):
        name = request.POST.get('name')
        content = request.POST.get('quote')
        username = request.POST.get('username')
        context = {
            'name': name,
            'quote': content,
            'username': username,
            'rand': ''.join(random.choices(string.ascii_uppercase + string.digits, k = 5)) 
        }
        return render(request, 'app/quote.html', context)