import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const API_URL = 'http://localhost:4000/posts';
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
  const editRef = useRef(null); 

  // Fetching API
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // handle for adding user
  const handleAddUser = () => {
    axios.post(API_URL, newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        setNewUser(initialNewUser);
        toast.success('User added successfully');
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };

  // handle for edit user
  const handleEditUser = (id) => {
    setEditUserId(id);
    const userToEdit = users.find((user) => user.id === id);
    setNewUser(userToEdit);

    // Scroll to the edit input
    if (editRef.current) {
      editRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

// handle for edit and save user
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
        toast.success('User edit and saved sccesfully');
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        toast.error('Error updating user')
      });
  };

  const handleDeleteUser = (id) => {
    // Delete a user from the mock API
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        setTimeout(()=>{
          toast.success('User deleted');
        },1000)
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        toast.error('Error deleting user')
      });
  };

  return (
        <div className="container">
      <ToastContainer/>
        <h1>User Management</h1>
      <h2 ref={editRef}>Scroll Down For Our Stored Data</h2>
      <div className="image-container">
      </div>
      <div className="content-wrapper">
      <div className="form-container">
      <form className="form">
      <h2 className='h2'>Add Your Details</h2>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input
            className='input'
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div className="form-group">
        <label htmlFor="">Email:</label>
          <input
            className='input'
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          </div>
          <div className="form-group">
        <label htmlFor="">Username:</label>
          <input
            type="text"
            className='input'
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
           </div>
                  <div className="form-group">
        <label htmlFor="">Street:</label>
          <input
            type="text"
            className='input'
            placeholder="Street"
            value={newUser.address.street}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, street: e.target.value } })}
          />
          </div>
                  <div className="form-group">
        <label htmlFor="">Suite:</label>
          <input
            type="text"
            className='input'
            placeholder="Suite"
            value={newUser.address.suite}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, suite: e.target.value } })}
          />
          </div>
          <div className="form-group">
        <label htmlFor="">City:</label>
          <input
            type="text"
            className='input'
            placeholder="City"
            value={newUser.address.city}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
          />
          </div>
                  <div className="form-group">
        <label htmlFor="">Zipcode:</label>
          <input
            type="text"
            className='input'
            placeholder="Zipcode"
            value={newUser.address.zipcode}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, zipcode: e.target.value } })}
          />
          </div>
                  <div className="form-group">
        <label htmlFor="">Latitude:</label>
          <input
            type="text"
            className='input'
            placeholder="Latitude"
            value={newUser.address.geo.lat}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, geo: { ...newUser.address.geo, lat: e.target.value } } })}
          />
          </div>
                  <div className="form-group">
        <label htmlFor="">Longitude:</label>
          <input
            type="text"
            className='input'
            placeholder="Longitude"
            value={newUser.address.geo.lng}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, geo: { ...newUser.address.geo, lng: e.target.value } } })}
          />
          </div>
        {editUserId ? (
          <button className='editadd' onClick={handleSaveEdit}>Save Edit</button>
        ) : (
          <button className='editadd' onClick={handleAddUser}>Add</button>
        )}
        </form>
        </div>
        </div>
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li className='user-box' key={user.id}>
          <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Username:</strong> {user.username}<br />
            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}<br />
            <strong>Geo:</strong> Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}
            <div className='edit-delete'>
            <button className='edit' onClick={() => handleEditUser(user.id)}>Edit</button>
            <button className='delete' id='del-btn' onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
