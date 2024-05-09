import React, { createContext, useContext, useState } from 'react';
import GetModal from '../components/GetModal';


// Create a context for managing the modal state
const ModalContext = createContext();

// Custom hook to access the modal context
export const useModal = () => useContext(ModalContext);

// ModalProvider component to manage modal state
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <GetModal isOpen={isOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
