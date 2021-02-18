from django.contrib import admin
from django.urls import path
from mainApp import views

urlpatterns = [
    path('', views.index, name="home"),
    path('quiz', views.takeQuiz, name="quiz"),
    path('aboutus', views.aboutUs, name="aboutus"),
    path('test', views.test, name="test"),
    path('starttest', views.starttest, name="starttest"),
    path('home', views.index, name="home"),
]