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
Localhost, Port 8080


GET request to /api/appointments/

Returns:
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

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
