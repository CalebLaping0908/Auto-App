from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.IntegerField(unique=True)


class Appointment(models.Model):
    owner = models.CharField(max_length=100)
    time = models.DateTimeField()
    reason = models.TextField()

    vehicle = models.ForeignKey(
        AutomobileVO,
        related_name='appointments',
        on_delete=models.PROTECT,
    )

    technician = models.ForeignKey(
        Technician,
        related_name='appointments',
        on_delete=models.PROTECT,
    )
