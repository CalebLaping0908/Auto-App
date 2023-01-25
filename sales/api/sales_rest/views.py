from django.shortcuts import render
from .models import AutomobileVO, SalesPerson, Customer, SalesLog
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder


class AutomobileDetailVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "year",
        "color",
    ]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]

class SalesLogDetailEncoder(ModelEncoder):
    model = SalesLog
    properties = [
        "id",
        "sales_person",
        "automobile",
        "purchase_price",
        "customer"
    ]

    def get_extra_data(self, o):
        return {"automobile": o.automobile.vin}

    encoders = {
            "sales_person": SalesPersonListEncoder(),
            "customer": CustomerListEncoder(),
        }

@require_http_methods(["GET", "POST"])
def api_list_sales_person(request):

    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonListEncoder,
        )
    else:
        content = json.loads(request.body)

        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonListEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_sales_person(request, id):

    if request.method == 'GET':
        sales_person = SalesPerson.objects.get(id=id)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )
    else:
        count, _ = SalesPerson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
