from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('administrator/', include('administrator.urls')),
    path('product/', include('product.urls')),
    path('order/', include('order.urls')),
    path('shipping/', include('shipping.urls')),
    path('category/', include('category.urls')),
]
