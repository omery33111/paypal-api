from django.urls import path
from . import views



urlpatterns = [
    path('post_product/', views.post_product),

    path('post_category/', views.post_category)
]