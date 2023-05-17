import React, { useState } from "react";
import axios from "axios";
import { BACKEND_API_BASE_URL } from "../../../constants";


const AddAgency = () => {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value, "name value");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_API_BASE_URL}/agency/add-agency`,
        formData
      );
      console.log(response.data);
      setSuccess("Agency Added Successfully");
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="cyber-security">
      <div className="content content-wrapper">
        <div className="box">
          <div className="content-header">
            <h1> Add Agency </h1>
          </div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="crime-form">
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b>Agecy Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="logo" className="form-label">
                        ImageLogo:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="mb-3 btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>

                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAgency;
