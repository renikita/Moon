import React, { useEffect, useState } from "react";
import "./ViewResponse.css";
import axios from 'axios';

const GET_ALL_USERS_URL = 'http://localhost:8080/response/users';
const DELETE_USER_URL = 'http://localhost:8080/response/user/';

function ViewResponse() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
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
  );
}

export default ViewResponse;
