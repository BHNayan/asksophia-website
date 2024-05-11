import React, { useState } from "react";
import axios from "axios";
import { Button, Modal } from "keep-react";
import { IoClose } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetModal = ({ isOpen, onClose }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log the request data before sending
      console.log(Name, Email);
      const data = {
        Name,
        Email,
      };

      // Send form data to the server

      await axios
        .post(
          "https://sheet.best/api/sheets/58bb8500-ac17-4e20-a6b6-9ba7136133a7",
          data
        )
        .then((response) => {
          console.log("data send succesfully", response);
          setName("");
          setEmail("");
          onClose(); // Close the modal after form submission
          toast.success(<div>Thank you very much.<br />Your data submitted successfully!</div>);
        });
    } catch (error) {
      console.error("Error:", error.message);
      toast.error('Failed to submit data!');
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Body className="space-y-3">
          <div className="flex flex-row justify-between items-center p-2">
            <div>
              <img
                src="./images/asksophia-logo.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div>
              <IoClose
                onClick={onClose}
                className=" cursor-pointer h-6 w-6 hover:bg-primary hover:text-white"
              />
            </div>
          </div>

          <Modal.Content>
            <form onSubmit={handleSubmit}>
              <div className="p-2">
                <h3 className="p-4 text-body-1 font-medium text-metal-900 text-center">
                  Get Early Access
                </h3>
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className=" p-2 w-full border-gray-300 rounded-md border-2 shadow-lg focus:outline-none "
                  />
                </div>
                <div className="p-4">
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" p-2 w-full border-gray-300 rounded-md border-2 shadow-lg  focus:outline-none "
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
              <Button type="submit" size="sm" className="bg-primary px-28">
                Submit
              </Button>
              </div>
            </form>
          </Modal.Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GetModal;
