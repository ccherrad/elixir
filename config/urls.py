from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.urls import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('products.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


admin.site.site_header = 'Inova cosmetics'
admin.site.site_title = "Inova cosmetics Portal"
admin.site.index_title = "Welcome to Inova cosmetics Admin Panel"