import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const API_URL = 'http://localhost:4000/posts';
// const link = 'https://jsonplaceholder.typicode.com/users'
const initialNewUser = {
  name: '',
  email: '',
  username: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
};

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(initialNewUser);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    // Fetch users from the mock API
    axios.get(API_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddUser = () => {
    // Add a new user to the mock API
    axios.post(API_URL, newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        setNewUser(initialNewUser);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };

  const handleEditUser = (id) => {
    // Set the user to edit
    setEditUserId(id);
    const userToEdit = users.find((user) => user.id === id);
    setNewUser(userToEdit);
  };

  const handleSaveEdit = () => {
    // Update the edited user in the mock API
    axios.put(`${API_URL}/${editUserId}`, newUser)
      .then(() => {
        const updatedUsers = users.map((user) => {
          if (user.id === editUserId) {
            return newUser;
          }
          return user;
        });
        setUsers(updatedUsers);
        setEditUserId(null);
        setNewUser(initialNewUser);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const handleDeleteUser = (id) => {
    // Delete a user from the mock API
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div>
      <h1>User Management</h1>

      <h2>Add Your Details</h2>
      <h4>Scroll Down For Our Stored Data</h4>
      <div className='user-box'>
      <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <label>Street:</label>
        <input
          type="text"
          placeholder="Street"
          value={newUser.address.street}
          onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, street: e.target.value } })}
        />
        <label>Suite:</label>
        <input
          type="text"
          placeholder="Suite"
          value={newUser.address.suite}
          onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, suite: e.target.value } })}
        />
        <label>City:</label>
        <input
          type="text"
          placeholder="City"
          value={newUser.address.city}
          onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
        />
        <label>Zip code</label>
        <input
          type="text"
          placeholder="Zipcode"
          value={newUser.address.zipcode}
          onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, zipcode: e.target.value } })}
        />
        <label>Latitude:</label>
        <input
          type="text"
          placeholder="Latitude"
          value={newUser.address.geo.lat}
          onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, geo: { ...newUser.address.geo, lat: e.target.value } } })}
        />
        <label>Longitude</label>
        <input
          type="text"
          placeholder="Longitude"
          value={newUser.address.geo.lng}
          onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, geo: { ...newUser.address.geo, lng: e.target.value } } })}
        />
        {editUserId ? (
          <button onClick={handleSaveEdit}>Save Edit</button>
        ) : (
          <button onClick={handleAddUser}>Add</button>
        )}
      </div>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li className='user-box' key={user.id}>
             <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Username:</strong> {user.username}<br />
            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}<br />
            <strong>Geo:</strong> Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
            <button id='del-btn' onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
