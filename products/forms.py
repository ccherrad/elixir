from django import forms


class OrderForm(forms.Form):
    first_name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': 'form-control',
               'placeholder': 'الإسم الأول',
               'type': 'text'}))
    last_name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': 'form-control',
               'placeholder': 'اسم العائلة',
               'type': 'text'}))
    wilaya = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': 'form-control',
               'placeholder': 'الولاية',
               'type': 'text'}))
    address = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': 'form-control',
               'placeholder': 'العنوان',
               'type': 'text'}))
    phone = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'رقم الهاتف',
        'type': 'number', 'pattern': '^0\d{9}'}))
