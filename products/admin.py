from django.contrib import admin
from .models import Product, Order


class OrderAdmin(admin.ModelAdmin):
    readonly_fields = ('created',)
    list_display = ('created', 'product', 'first_name', 'last_name',
                    'call_it', 'wilaya', 'address', 'sent',
                    'acked')
    list_display_links = ('call_it', )
    search_fields = ('first_name', 'last_name', 'phone', 'wilaya')


admin.site.register(Order, OrderAdmin)
admin.site.register(Product)
