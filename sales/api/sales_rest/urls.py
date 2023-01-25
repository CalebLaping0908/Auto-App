from django.urls import path
from .views import api_list_sales_person, api_show_sales_person

urlpatterns = [
    path("sales/", api_list_sales_person, name="api_list_sales_person"),
    path("sales/<int:id>/", api_show_sales_person, name="api_show_sales_person"),
    # path("sales/", api_list_customer, name="api_list_customer"),
    # path("sales/", api_list_sales, name="api_list_sales"),
    # path("shoes/<int:id>/", api_show_sale, name="api_show_sale"),
]
