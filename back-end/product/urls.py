from django.urls import path
from . import views



urlpatterns = [
    path('get_products/<int:page>/', views.get_products),
    path('products_amount/', views.products_amount),

    path('single_product/', views.single_product),
    path('single_product/<int:pk>/', views.single_product),
    path('product_patch/', views.product_patch),
    path('product_patch/<int:pk>/', views.product_patch),
    path('product_delete/', views.product_delete),
    path('product_delete/<int:pk>/', views.product_delete),
    path('product_post/', views.product_post),
    path('search_product/', views.search_product),
]
