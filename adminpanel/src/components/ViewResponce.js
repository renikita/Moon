import React, { useEffect, useState } from "react";
import "./ViewResponse.css";
import axios from 'axios';
import Cookies from 'js-cookie';

const GET_ALL_USERS_URL = 'http://localhost:8080/response/users';
const DELETE_USER_URL = 'http://localhost:8080/response/user/';

function ViewResponse() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);

  useEffect(() => {
    axios.get(GET_ALL_USERS_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleContextMenu = (event, user) => {
    event.preventDefault();
    setSelectedUser(user);
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleCloseContextMenu = () => setContextMenu(null);

  const handleDelete = (id) => {
    axios.delete(`${DELETE_USER_URL}${id}`)
      .then((response) => {
        console.log("Deleting: " + response.data);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
    handleCloseContextMenu();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 1:
        return <span className="badge text-bg-warning">In order</span>;
      case 2:
        return <span className="badge text-bg-success">Checked</span>;
      case 3:
        return <span className="badge text-bg-dark">Declined</span>;
      default:
        return <span className="badge text-bg-danger">Unchecked</span>;
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    authorized ?
    <div className="view-response">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="search-bar"
      />
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Message</th>
            <th>Response Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              onContextMenu={(e) => handleContextMenu(e, user)}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>{user.message_res}</td>
              <td>{new Date(user.response_time).toLocaleString()}</td>
              <td>{getStatusBadge(user.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {contextMenu && (
        <div
          className="context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onMouseLeave={handleCloseContextMenu}
        >
          <button onClick={() => alert(`Edit User: ${selectedUser.id}`)}>
            Edit
          </button>
          <button onClick={() => handleDelete(selectedUser.id)}>Delete</button>
        </div>
      )}
    </div>
    : <h1 className="access-denied">Access Denied</h1>
  );
}

export default ViewResponse;