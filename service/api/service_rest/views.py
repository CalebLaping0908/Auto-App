from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "year",
    ]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]


class AppointmentListEncoder(ModelEncoder):
     model = Appointment
     properties = [
          "id",
          "vin",
          "technician",
     ]
     def get_extra_data(self, o):
        return {"technician": o.technician.employee_number}


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "owner",
        "time",
        "reason",
        "vip",
        "technician",
    ]
    encoders = {
         "technician": TechnicianDetailEncoder(),
    }


@require_http_methods(['GET', 'POST'])
def api_list_technicians(request):

    if request.method == 'GET':
        technicians = Technician.objects.all()
        return JsonResponse(
            {'technicians': technicians},
            encoder=TechnicianDetailEncoder,
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )


@require_http_methods(['GET', 'DELETE'])
def api_show_technician(request, pk):

    if request.method == 'GET':
        technician = Technician.objects.get(employee_number=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(employee_number=pk).delete()
        return JsonResponse({"deleted": count > 0})
