from django.shortcuts import render, redirect
from .forms import OrderForm
from django.views.decorators.http import require_POST
from .models import Order, Product


def index(request):
    products = Product.objects.all()
    order_form = OrderForm()
    ctx = {
        'products': products,
        'form': order_form
    }
    return render(request, "index.html", context=ctx)


def success(request):
    return render(request, "success.html")


@require_POST
def order(request):
    p_id = int(request.POST['qnt'])
    product = Product.objects.get(id=p_id)
    f_name = request.POST["first_name"]
    l_name = request.POST["last_name"]
    wilaya = request.POST["wilaya"]
    address = request.POST["address"]
    phone = request.POST["phone"]
    Order.objects.create(
        product=product,
        first_name=f_name,
        last_name=l_name,
        wilaya=wilaya,
        address=address,
        phone=phone
    )
    return redirect("success")
