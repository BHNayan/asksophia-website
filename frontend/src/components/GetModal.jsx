import React, { useState } from "react";
import axios from "axios";
import { Button, Modal } from "keep-react";
import { IoClose } from "react-icons/io5";

const GetModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the server
      await axios.post("/submitFormData", formData);
      setFormData({ name: "", email: "" }); // Clear form data
      onClose(); // Close the modal after form submission
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Body className="space-y-3">
          <Modal.Icon className="flex justify-end items-end text-right w-full">
            <IoClose
              onClick={onClose}
              className=" cursor-pointer h-6 w-6 hover:bg-primary hover:text-white"
            />
          </Modal.Icon>
    
          <Modal.Content>
            <form onSubmit={handleSubmit}>
              <div className="!mb-6">
                <h3 className="p-4 text-body-1 font-medium text-metal-900 text-center">
                  Get Early Access
                </h3>
                <div className="p-4">
                  
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border-gray-300 rounded-md border-2 shadow-lg  "
                  />
                  
                </div>
                <div className="p-4">
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border-gray-300 rounded-md border-2 inset-4 shadow-sm"
                  />
                </div>
              </div>
              <Button type="submit" size="sm" className="bg-primary">
                Submit
              </Button>
            </form>
          </Modal.Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GetModal;
