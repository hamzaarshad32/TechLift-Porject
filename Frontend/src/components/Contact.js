import React, { useState } from "react";
import "./style/Contact.css";

function Contact() {
  //for input fields after submit
  const empty = {
    name: "",
    email: "",
    textarea: "",
  };

  const [handle, setHandle] = useState(empty);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  const createContatData = async () => {
    const record = await fetch("http://127.0.0.1:5000/createcontactdata", {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(handle),
    });
    record.save();
    setHandle(empty);
  };

  return (
    <div className="contact w-100 h-100">
      <div className="container">
        <form
          className="form-control border-0 bg-transparent"
          onSubmit={createContatData}
        >
          <div className="row p-4">
            <div className="col-md-12">
              <div>
                <h2 className="text-white">
                  <u>
                    <i>Contact Us:</i>
                  </u>
                </h2>
                <input
                  type="text"
                  name="name"
                  className="px-4 form-control border-0 input-fields my-3"
                  value={handle.name}
                  onChange={inputHandler}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={handle.email}
                  onChange={inputHandler}
                  required
                  className="px-4 form-control border-0 input-fields mb-3"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  rows={5}
                  name="textarea"
                  value={handle.textarea}
                  onChange={inputHandler}
                  required
                  className="px-4 form-control border-0 textarea"
                  placeholder="Enter Your Message..."
                />
              </div>

              <div className="text-right">
                <button className="btn btn-success mt-2">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
