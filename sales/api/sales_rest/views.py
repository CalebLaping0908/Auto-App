from django.shortcuts import render
from .models import AutomobileVO, SalesPerson, Customer, SalesLog
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "year",
        "color",
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]

class SalesLogEncoder(ModelEncoder):
    model = SalesLog
    properties = [
        "id",
        "sales_person",
        "automobile",
        "purchase_price",
        "customer"
    ]

    encoders = {
            "sales_person": SalesPersonEncoder(),
            "customer": CustomerEncoder(),
            "automobile": AutomobileVOEncoder(),
        }

    def get_extra_data(self, o):
        return {"automobile": o.automobile.vin,
                "customer": o.customer.name,
                "sales_person": o.sales_person.name,
        }

@require_http_methods(["GET", "POST"])
def api_list_sales_person(request):

    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)

        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_sales_person(request, id):

    if request.method == 'GET':
        sales_person = SalesPerson.objects.get(id=id)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    else:
        count, _ = SalesPerson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customer(request):

    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)

        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, id):

    if request.method == 'GET':
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "POST"])
def api_list_sales_log(request):

    if request.method == 'GET':
        sales_log = SalesLog.objects.all()
        return JsonResponse(
            {"sales_log": sales_log},
             encoder=SalesLogEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            sales_person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales person id"},
                 status=400,
            )

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id"},
                 status=400,
            )

        try:
            automobile_vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"},
                 status=400,
            )

        sales_log = SalesLog.objects.create(**content)

        return JsonResponse(
            sales_log,
            encoder=SalesLogEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_sales_log(request, id):

    if request.method == 'GET':
        sales_log = SalesLog.objects.get(id=id)
        return JsonResponse(
            sales_log,
            encoder=SalesLogEncoder,
            safe=False,
        )
    else:
        count, _ = SalesLog.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})



@require_http_methods(['GET'])
def api_list_automobileVO(request):

    automobiles = AutomobileVO.objects.all()
    return JsonResponse(
        {'autos': automobiles},
        encoder=AutomobileVOEncoder,
    )
