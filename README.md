# CarCar

Team:

* Caleb Laping - Service
* David Regalado - Sales

## Project Description

* Project CarCar is a automobile dealership management app. It contains 3 microservices: Sales, Service, and Inventory. These 3 microservices run through RESTful APIs (see CRUD Routes for API Documentation).
* The front end uses React, with Docker and Django running the backend through a PostgreSQL database.

## Clone the Repository

* Using the terminal, navigate to the diractory you wish to clone the application into.
* Clone the repository with the following command: `git clone https://gitlab.com/Caleb_Laping0908/project-beta.git` (HTTPS) or `git clone git@gitlab.com:Caleb_Laping0908/project-beta.git` (SSH)

## How to run this application

* This application runs via Docker containers and images. Docker Desktop is required.
* Use the following commands to create your Docker volume and services:

* `docker volume create beta-data`
* `docker-compose build`
* `docker-compose up`

## Applicaiton Diagram

![Diagram](/images/ProjectDiagram.png)

## CRUD Routes, API Documentation
Appointment Service:
http://localhost:8080


    GET request to /api/appointments/

    Returns (status code 200):
    ```
    {
        "appointments": [
            {
                "id": 1,
                "vin": "1234567890",
                "vip": false,
                "technician": 21
            },
            ...
        ]
    }
    ```

    POST request to /api/appointments/

    Request body:
    ```
    {
        "vin": "123498793443",
        "owner": "Carmen",
        "time": "2023-03-20",
        "reason": "Car JSON works",
        "technician": 21
    }
    ```

    Returns (status code 200):
    ```
    {
        "id": 7,
        "vin": "123498793443",
        "owner": "Carmen",
        "time": "2023-03-20",
        "reason": "Car JSON works",
        "vip": false,
        "technician": {
            "id": 1,
            "name": "Caleb",
            "employee_number": 21
        }
    }
    ```

    GET request to /api/appointments/<int:id>/

    Returns (status code 200):
    ```
    {
        "id": 7,
        "vin": "123498793443",
        "owner": "Carmen",
        "time": "2023-03-20",
        "reason": "Car JSON works",
        "vip": false,
        "technician": {
            "id": 1,
            "name": "Caleb",
            "employee_number": 21
        }
    }
    ```

    DELETE request to /api/appointments/<int:id>/

    Returns (status code 200):
    ```
    {
        "deleted": true
    }
    ```

    GET request to /api/appointments/<str:vin>/ (Get all appointments for a specific VIN number)

    Returns (status code 200):
    ```
    {
        "appointments": [
            {
			"id": 9,
			"vin": "13495840DFIOSJ",
			"owner": "David",
			"time": "2023-01-27",
			"reason": "Car needs to be turned into gold",
			"vip": false,
			"technician": {
				"id": 1,
				"name": "Caleb",
				"employee_number": 21
			}
		},
            ...
        ]
    }
    ```

Automobile Value Object (Used for appointment service):
http://localhost:8080

    GET request to /api/autos/

    Returns (status code 200):
    ```
    {
        "autos": [
            {
			"vin": "1C3CC5FB2AN120174",
			"color": "red",
			"year": 2012
		    },
            ...
        ]
    }
    ```

Technician Service:
http://localhost:8080

    GET request to /api/technicians/

    Returns (status code 200):
    ```
    {
        "technicians": [
            {
			"id": 1,
			"name": "Caleb",
			"employee_number": 21
		    },
            ...
        ]
    }
    ```

    POST request to /api/technicians/

    Request body:
    ```
    {
	"name": "Alyn",
	"employee_number": "3"
    }
    ```

    Returns (status code 200):
    ```
    {
	"href": "/api/technicians/2/",
	"id": 2,
	"name": "Alyn",
	"employee_number": "3"
    }
    ```

    GET request to /api/technicians/<int:employee_number>/

    Returns (status code 200):
    ```
    {
	"id": 2,
	"name": "Alyn",
	"employee_number": "3"
    }
    ```

    DELETE request to /api/technicians/<int:employee_number>/

    Returns (status code 200):
    ```
    {
	"deleted": true
    }
    ```

Automobile Service:
http://localhost:8100

    GET request to /api/automobiles/

    Returns (status code 200):
    ```
    {
	"autos": [
		{
			"href": "/api/automobiles/1C3CC5FB2AN120174/",
			"id": 1,
			"color": "red",
			"year": 2012,
			"vin": "1C3CC5FB2AN120174",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "Accord",
				"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
				"manufacturer": {
					"href": "/api/manufacturers/2/",
					"id": 2,
					"name": "Honda"
				}
			}
		},
        ...
        ]
    }
    ```

    POST request to /api/automobiles/

    Request body:
    ```
    {
    "color": "pink",
    "year": 2023,
    "vin": "asdoifj123",
    "model_id": 1
    }
    ```

    Returns (status code 200):
    ```
    {
	"href": "/api/automobiles/asdoifj123/",
	"id": 10,
	"color": "pink",
	"year": 2023,
	"vin": "asdoifj123",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "Accord",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Honda"
		    }
	    }
    }
    ```

    GET request to /api/automobiles/<str:vin>/

    Returns (status code 200):
    ```
    {
	"href": "/api/automobiles/1C3CC5FB2AN120174/",
	"id": 1,
	"color": "red",
	"year": 2012,
	"vin": "1C3CC5FB2AN120174",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "Accord",
		"picture_url": "https://cdn.jdpower.com/ArticleImages/JDPA_2020%20Honda%20Accord%20Touring%20Red%20Front%20View.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Honda"
            }
        }
    }
    ```

    PUT request to /api/automobiles/<str:vin>/

    Request body:
    ```
    {
    "color": "red",
    "year": 2012,
    "vin": "1C3CC5FB2AN120174",
    "model_id": 1
    }
    ```

    Returns (status code 200):
    ```
    {
    "href": "/api/automobiles/1C3CC5FB2AN120174/",
    "id": 1,
    "color": "red",
    "year": 2012,
    "vin": "1C3CC5FB2AN120174",
    "model": {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Accord",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer": {
            "href": "/api/manufacturers/2/",
            "id": 2,
            "name": "Honda"
            }
        }
    }
    ```

    DELETE request to /api/automobiles/<str:vin>/

    Returns (status code 200):
    ```
    {
        "href": "/api/automobiles/1C3CC5FB2AN120173/",
        "id": null,
        "color": "yellow",
        "year": 2012,
        "vin": "1C3CC5FB2AN120173",
        "model": {
            "href": "/api/models/1/",
            "id": 1,
            "name": "Accord",
            "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
            "manufacturer": {
                "href": "/api/manufacturers/2/",
                "id": 2,
                "name": "Honda"
            }
        }
    }
    ```

Model Service:
http://localhost:8100

    GET request to /api/models/

    Returns (status code 200):
    ```
    {
        "models": [
            {
                "href": "/api/models/1/",
                "id": 1,
                "name": "Accord",
                "picture_url": "https://cdn.jdpower.com/ArticleImages/JDPA_2020%20Honda%20Accord%20Touring%20Red%20Front%20View.jpg",
                "manufacturer": {
                    "href": "/api/manufacturers/2/",
                    "id": 2,
                    "name": "Honda"
                }
            },
            ...
            ]
    }
    ```

    POST request to /api/models/

    Request body:
    ```
    {
    "name": "Accord",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer_id": 2
    }
    ```

    Returns (status code 200):
    ```
    {
	"href": "/api/models/2/",
	"id": 2,
	"name": "Penis",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Honda"
	    }
    }
    ```

    GET request to /api/models/<int:id>

    Returns (status code 200):
    ```
    {
	"href": "/api/models/1/",
	"id": 1,
	"name": "Accord",
	"picture_url": "https://cdn.jdpower.com/ArticleImages/JDPA_2020%20Honda%20Accord%20Touring%20Red%20Front%20View.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Honda"
	    }
    }
    ```

    PUT request to /api/models/<int:id>/

    Request body:
    ```
    {
    "name": "Accord",
    "picture_url": "https://cdn.jdpower.com/ArticleImages/JDPA_2020%20Honda%20Accord%20Touring%20Red%20Front%20View.jpg",
    "manufacturer_id": 2
    }
    ```

    Returns (status code 200):
    ```
    {
	"href": "/api/models/1/",
	"id": 1,
	"name": "Accord",
	"picture_url": "https://cdn.jdpower.com/ArticleImages/JDPA_2020%20Honda%20Accord%20Touring%20Red%20Front%20View.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Honda"
	    }
    }
    ```

    DELETE request to /api/models/<int:id>/

    Returns (status code: 200):
    ```
    {
	"id": null,
	"name": "Eclipse",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Honda"
	    }
    }
    ```

Manufacturer Service:
http://localhost:8100

    GET request to /api/manufacturers/

    Returns (status code 200):
    ```
    {
	"manufacturers": [
		{
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Honda"
		},
        ...
	    ]
    }
    ```

    POST request to /api/manufacturers/

    Request body:
    ```
    {
	"name": "Honda"
    }
    ```

    Returns (status code 200):
    ```
    {
	"href": "/api/manufacturers/2/",
	"id": 2,
	"name": "Honda"
    }
    ```

    GET request to /api/manufacturers/<int:id>/

    Returns (status code 200):
    ```
    {
	"href": "/api/manufacturers/2/",
	"id": 2,
	"name": "Honda"
    }
    ```

    PUT request to /api/manufacturers/<int:id>/

    Request body:
    ```
    {
    "name": "Honda"
    }
    ```

    Returns (status code 200):
    ```
    {
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "Honda"
    }
    ```

    DELETE request to /api/manufacturers/<int:id>/

    Returns (status code 200):
    ```
    {
	"id": null,
	"name": "Honda"
    }
    ```

Sales People:
http://localhost:8090

    GET request to /api/sales/

    Returns (status code 200):
    ```
    {
	"sales_person": [
		{
			"id": 4,
			"name": "Diglett",
			"employee_number": 12345
		},
		{
			"id": 6,
			"name": "Squirtle",
			"employee_number": 8776
		},
		{
			"id": 7,
			"name": "Pikachu",
			"employee_number": 54367
		}
	]
    }
    ```

    POST request to /api/sales/

    Request body:
    ```
    {
    "name": "Joe",
    "employee_number": "8976"
    }
    ```

    Returns (status code 200):
    ```
    {
	"id": 1,
	"name": "Joe",
	"employee_number": "8976"
    }
    ```

    GET request to /api/sales/<int:id>/

    Returns (status code 200):
    ```
    {
	"id": 6,
	"name": "Squirtle",
	"employee_number": 8776
}
    ```

    PUT request to /api/automobiles/<str:vin>/

    Request body:
    ```
    {
    "color": "red",
    "year": 2012,
    "vin": "1C3CC5FB2AN120174",
    "model_id": 1
    }
    ```

    Customer:
http://localhost:8090

    GET request to /api/customer/

    Returns (status code 200):
    ```
    {
	"customer": [
		{
			"id": 1,
			"name": "David",
			"address": "9876",
			"phone_number": "303-987-5432"
		},
    ```

    POST request to /api/sales/

    Request body:
    ```
   {
  "name": "David",
  "address": "9876",
	"phone_number": "303-987-5432"
}
    ```

    Returns (status code 200):
    ```
   {
	"id": 1,
	"name": "David",
	"address": "9876",
	"phone_number": "303-987-5432"
}
}
    ```

    GET request to /api/sales/<int:id>/

    Returns (status code 200):
    ```
   {
	"id": 2,
	"name": "Jesus",
	"address": "7777",
	"phone_number": "303-777-7777"
}
    ```
    Sales Log:
http://localhost:8090

    GET request to /api/sales_log/

    Returns (status code 200):
    ```
    {
	"sales_log": [
		{
			"id": 2,
			"sales_person": {
				"id": 4,
				"name": "Diglett",
				"employee_number": 12345
			},
			"automobile": {
				"vin": "cc3dd5FB2AN120174",
				"year": 1990,
				"color": "Red"
			},
			"purchase_price": 500,
			"customer": {
				"id": 2,
				"name": "Caleb",
				"address": "1234567",
				"phone_number": "1234567890"
			}
		},
        ...
        ]
    ```

    POST request to /api/sales_log/

    Request body:
    ```
   {
  "sales_person": 2,
  "automobile": "cc3dd5FB2AN120174",
  "purchase_price": 500,
	"customer": 2
}
    ```

    Returns (status code 200):
    ```
   {
	"id": 8,
	"sales_person": "Diglett",
	"automobile": "cc3dd5FB2AN120174",
	"purchase_price": 500,
	"customer": "Caleb"
}
}
    ```

    GET request to /api/sales_log/<int:id>/

    Returns (status code 200):
    ```
   {
	"id": 2,
	"sales_person": "Diglett",
	"automobile": "cc3dd5FB2AN120174",
	"purchase_price": 500,
	"customer": "Caleb"
}
    ```

## Service microservice

AutomobileVO:
Value object for the automobile model in the inventory microservice.
Created by polling inventory api using service/poll/poller.py
* 3 Attributes:
* color: CharField
* year: PositiveSmallIntegerField
* vin: CharField(unique=True)

Technician:
    Model to house technicians necessary for service appointments.
* 2 Attributes:
* name: CharField
* employee_number: PositiveSmallIntegerField(unique=True)

Appointment:
    Model to house service appointments.
    1 foreign key to the Technician model.
* 6 Attributes:
* vin: CharField
* owner: CharField
* time: DateField
* reason: TextField
* vip: BooleanField
* technician: Foreign key to Technician model.

## Sales microservice

AutomobileVO:
    Value object for the automobile model in the inventory microservice.
    Created by polling inventory api using service/poll/poller.py
* 3 Attributes:
* color: CharField
* year: PositiveSmallIntegerField
* vin: CharField(unique=True)

SalesPerson:
    Model to house sales people necessary for selling autos.
* 2 Attributes:
* name: CharField
* employee_number: PositiveSmallIntegerField(unique=True)

Customer:
    Model to house customers necessary for buying autos.
* 3 Attributes:
* name: CharField
* address: CharField
* phone_number: CharField

SalesLog:
    Model to house all sale records.
    3 foreign key to the automobile model, customer model, and sales person.
* 1 Attributes:
* purchase_price: PositiveIntegerField
