# CarCar

Team:

* Caleb Laping - Service
* Person 2 - Which microservice?

## How to Run this Application

Insert steps to clone and run application

## Applicaiton Diagram

Insert diagram of project here

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


## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
