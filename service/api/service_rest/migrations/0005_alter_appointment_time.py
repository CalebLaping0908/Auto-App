# Generated by Django 4.0.3 on 2023-01-25 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_appointment_vip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='time',
            field=models.DateField(),
        ),
    ]
