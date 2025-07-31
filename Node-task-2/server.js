const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const rooms = [];

// Function to check room availability
function isRoomAvailable(room, date, startTime, endTime) {
  for (const booking of room.bookings) {
    if (booking.date === date) {
      if (
        (startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime) ||
        (startTime <= booking.startTime && endTime >= booking.endTime)
      ) {
        return false;
      }
    }
  }
  return true;
}

// Create a Room
app.post('/create-room', (req, res) => {
  const { seats, amenities, pricePerHour } = req.body;

  if (!seats || !amenities || !pricePerHour) {
    return res.status(400).json({ error: 'Incomplete room data' });
  }

  const roomId = uuid.v4();

  const newRoom = {
    id: roomId,
    seats,
    amenities,
    pricePerHour,
    bookings: [],
  };

  rooms.push(newRoom);

  res.status(201).json({ message: 'Room created successfully', roomId });
});

// Book a Room
app.post('/book-room', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  if (!customerName || !date || !startTime || !endTime || !roomId) {
    return res.status(400).json({ error: 'Incomplete booking data' });
  }

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }

  const isAvailable = isRoomAvailable(room, date, startTime, endTime);

  if (!isAvailable) {
    return res.status(409).json({ error: 'Room already booked at this time' });
  }

  const booking = {
    customerName,
    date,
    startTime,
    endTime,
    roomId,
  };

  room.bookings.push(booking);

  res.status(201).json({ message: 'Room booked successfully' });
});

// List All Rooms with Booked Data
app.get('/list-rooms', (req, res) => {
  const roomsWithBookings = rooms.map((room) => ({
    id: room.id,
    seats: room.seats,
    amenities: room.amenities,
    pricePerHour: room.pricePerHour,
    bookings: room.bookings,
  }));

  res.json(roomsWithBookings);
});

// List All Customers with Booked Data
app.get('/list-customers', (req, res) => {
  const customersWithBookings = [];

  rooms.forEach((room) => {
    room.bookings.forEach((booking) => {
      const customerBooking = {
        customerName: booking.customerName,
        roomId: room.id,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
      };

      customersWithBookings.push(customerBooking);
    });
  });

  res.json(customersWithBookings);
});


// List how many times a customer has booked a room
app.get('/customer-booking-count/:customerName', (req, res) => {
  const customerName = req.params.customerName;
  let bookingCount = 0;

  rooms.forEach((room) => {
    room.bookings.forEach((booking) => {
      if (booking.customerName === customerName) {
        bookingCount++;
      }
    });
  });

  res.json({
    customerName,
    bookingCount,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
