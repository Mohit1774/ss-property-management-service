# Real-Estate-Platform
## Property Management Service

The Property Management Service is a microservice in the Real Estate Platform that manages property data. It provides functionality for creating property entries, updating properties information, retrieving properties, and deleting properties. 

## Features

- **Property Creation**: Create a new property entry by providing property details as per the schema provided below.
- **Get All Properties**: Retrieve all properties.
- **Get Property by ID**: Retrieve a property by its unique ID.
- **Update Property**: Update property information by its ID.
- **Delete Property**: Delete a property by their ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker for deployment and containerization
- bcryptjs for password hashing

## Setup

### Prerequisites

- Node.js
- MongoDB instance (can use MongoDB Atlas for cloud-based DB)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohit1774/ss-property-management-service.git


2. Run the application using the command:

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
 
