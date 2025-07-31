- My code server is 3001
- Navigation details are clearly in the code
- npm packages -> express, body-parser, cors, uuid.

  1. Creating a room (POST)

- INSERT DATA LIKE THIS USING POST
- Insert whatever data you want
  {
  "seats": 50,  
   "amenities": ["Projector", "Whiteboard"],
  "pricePerHour": 100
  }
- THEN ROOM WILL Be CREATED SUCCESSFULLY.

  2. Booking a room (POST)

- INSERT DATA LIKE THIS USING POST
- Insert whatever data you want
  {
  "customerName": "Rajesh",  
   "date": "2023-09-20",
  "startTime": "10:00 AM",
  "endTime": "12:00 PM",
  "roomId": "1234567890"  
  }
- In roomId copy paste the roomId you got in the creating room process then would be it work

  3. List all rooms with booked data (GET)
     Your Localhost

  - http://localhost:3001/list-rooms

  4. List all customers with booked data (GET)
     Your Localhost

  - http://localhost:3001/list-customers

  5. List how many times a customer has booked the room (GET)

  - http://localhost:3001/customer-booking-count/

  * Enter your customer name in the end to see how many times a coustomer has booked a room.
