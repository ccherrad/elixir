from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=120)
    desc = models.TextField()
    price = models.IntegerField()
    sec_price = models.CharField(max_length=120)
    discount = models.IntegerField(default=0)
    image = models.ImageField(upload_to="gallery")

    def __str__(self):
        return self.name


class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=90)
    last_name = models.CharField(max_length=90)
    phone = models.CharField(max_length=20)
    wilaya = models.CharField(max_length=45)
    address = models.CharField(max_length=120)
    created = models.DateTimeField(auto_now_add=True)

    sent = models.BooleanField(default=False)
    tr_id = models.CharField(max_length=120, blank=True, null=True)
    acked = models.BooleanField(default=False)

    def __str__(self):
        print(type(self.created))
        return str(self.created)

    def call_it(self):
        from django.utils.html import format_html
        return format_html("<a href='tel:%s'>%s</a>" % (self.phone, self.phone))
