import React from "react";

export default function Form(props) {
  return (
    <>
      <form
        method="post"
        id="create-user"
        onSubmit={props.submit}
        encType="multipart/form-data"
      >
        <div className="card">
          <div className="container p-3">
            <div className="header">
              <h1 className="fs-5">Create User</h1>
            </div>
            <div className="-body">
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter username"
                  name="username"
                />
              </div>
              <div className="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="password"
                  placeholder="Enter password"
                  name="password"
                />
              </div>
              <div className="form-group">
                <label for="gender">Gender</label>
                <select name="gender" id="gender" className="form-select">
                  <option value="" defaultValue>
                    -- please select gender --
                  </option>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                  <option value="o">Prefer not to say</option>
                </select>
              </div>
              <div className="form-group">
                <label for="image">Photo</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  aria-describedby="image"
                  name="image"
                />
              </div>
              <div className="form-group">
                <label for="address">Address</label>
                <textarea
                  rows="5"
                  className="form-control"
                  id="address"
                  aria-describedby="address"
                  name="address"
                ></textarea>
              </div>
            </div>
            <input type="hidden" name="action" id="action" value="createUser" />
            <input type="hidden" name="edit_id" id="edit-id" />
            <div className="-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss=""
              >
                Close
              </button>
              <button type="sumbit" className="btn btn-primary m-2">
                Sumbit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
