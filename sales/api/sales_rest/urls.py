from django.urls import path
from .views import api_list_sales_person, api_show_sales_person, api_list_customer, api_show_customer, api_list_sales_log, api_show_sales_log, api_list_automobileVO

urlpatterns = [
    path("sales/", api_list_sales_person, name="api_list_sales_person"),
    path("sales/<int:id>/", api_show_sales_person, name="api_show_sales_person"),
    path("customer/", api_list_customer, name="api_list_customer"),
    path("customer/<int:id>/", api_show_customer, name="api_show_customer"),
    path("sales_log/", api_list_sales_log, name="api_list_sales_log"),
    path("sales_log/<int:id>/", api_show_sales_log, name="api_show_sales_log"),
    path("automobiles/", api_list_automobileVO, name="api_list_automobilesVO"),

]
