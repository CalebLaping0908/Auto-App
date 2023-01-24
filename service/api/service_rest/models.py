from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True, null=True)


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)


class Appointment(models.Model):
    vin = models.CharField(max_length=17, null=True)
    owner = models.CharField(max_length=100)
    time = models.DateTimeField()
    reason = models.TextField()
    vip = models.BooleanField(default=False)

    technician = models.ForeignKey(
        Technician,
        related_name='appointments',
        on_delete=models.PROTECT,
    )

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})

    def __str__(self):
        return self.owner
