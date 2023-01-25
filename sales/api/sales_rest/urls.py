from django.urls import path
from .views import api_list_sales_person, api_show_sales_person, api_list_customer, api_show_customer

urlpatterns = [
    path("sales/", api_list_sales_person, name="api_list_sales_person"),
    path("sales/<int:id>/", api_show_sales_person, name="api_show_sales_person"),
    path("customer/", api_list_customer, name="api_list_customer"),
    path("customer/<int:id>/", api_show_customer, name="api_show_customer"),
    # path("sales/", api_list_sales, name="api_list_sales"),
    # path("shoes/<int:id>/", api_show_sale, name="api_show_sale"),
]
