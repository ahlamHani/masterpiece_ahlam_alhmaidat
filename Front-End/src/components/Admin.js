import React, { Component } from "react";

export class Admin extends Component {
  render() {
    return (
      <div>
        <table
          style={{ border: " 1px solid black", width: "95%", margin: "0px auto", marginBottom:"1000px"}}
        >
          <thead>

            <tr
              className="table-success"
              style={{
                border: " 1px solid black",
                textAlign: "center",
                margin: "20px auto !important",
                padding: "20px 0px !important"
              }}
            >
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Points</th>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Quantity</th>

            </tr>
          </thead>

          <tbody>
            {this.props.users.map((user, index) => {
              return (
                <tr
                  scope="row"
                  class="table  "
                  style={{
                    border: " 1px solid black",
                    textAlign: "center",
                    margin: "20px auto !important",
                    padding: "20px 0px !important"
                  }}
                >
                  <td scope="col">{index + 1}</td>
                  <td scope="col">{user.userName}</td>
                  <td scope="col">{user.phoneNumber}</td>
                  <td scope="col">{user.email}</td>
                  {/* <input type="number" value={user.point}/> */}

                  <td scope="col">{user.point}</td>
                  <td scope="col">{user.location}</td>
                  <td scope="col">{JSON.parse(user.addMaterial[0]).type}</td>
                  <td scope="col">{JSON.parse(user.addMaterial[0]).quantity}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
