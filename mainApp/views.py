from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    return render(request, 'index.html')

def takeQuiz(request):
    return render(request, "quiz.html")

def aboutUs(request):
    return render(request, "aboutus.html")

def test(request):
    return render(request, "test.html")

def starttest(request):
    return render(request, "starttest.html")



