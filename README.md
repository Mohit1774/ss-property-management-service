# ss-property-management-service

This repository is for property management service.

Run the application using the command:

```markdown
docker-compose up --build
```

**Example POST call:**

```markdown
POST http://localhost:5000/api/properties
```

Payload: 

```json
{
    "title": "Beachfront Villa",
    "description": "A beautiful beachfront villa with direct access to the beach and luxury finishes.",
    "type": "Residential",
    "price": 3500000,
    "location": {
      "city": "Miami",
      "state": "FL",
      "country": "USA",
      "zip": "33139"
    },
    "features": ["Private Pool", "Beach Access", "Outdoor Kitchen", "Fireplace", "Deck"],
    "media": ["villa_1.jpg", "villa_2.jpg", "villa_3.jpg"]
}
```

**GET all properties**

```markdown
GET http://localhost:5000/api/properties
```

**GET Property by ID**

```markdown
GET http://localhost:5000/api/properties/:id
```

**PUT Property by ID**

```markdown
PUT http://localhost:5000/api/properties/:id
```

**DELETE Property by ID**

```markdown
DELETE http://localhost:5000/api/properties/:id
```



 
