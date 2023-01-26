from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200, unique=True, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    color = models.CharField(max_length=100)

    def __str__(self):
        return self.vin




class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_list_sales_person", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class SalesLog(models.Model):
    purchase_price = models.PositiveIntegerField()

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name='automobile',
        null=True,
        on_delete=models.PROTECT
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        null=True,
        on_delete=models.PROTECT
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        null=True,
        on_delete=models.PROTECT
    )

    def get_api_url(self):
        return reverse("api_list_sales_logs", kwargs={"pk": self.pk})

    def __str__(self):
        return f"{self.sales_person} {self.automobile} {self.customer} ${self.purchase_price}"
