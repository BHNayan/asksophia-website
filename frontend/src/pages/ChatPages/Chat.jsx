import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const inputRef = useRef(null);

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMessage.trim() === "") return;

    const messageData = {
      text: newMessage,
      fromUser: true,
    };

    // Add the new message to the local state
    const updatedMessages = [...messages, messageData];
    setMessages(updatedMessages);

    // Clear the input field
    setNewMessage("");

    // Simulate agent response after a short delay
    setTimeout(async () => {
      const agentResponse = {
        text: "This is an automated response from the agent.",
        fromUser: false,
      };

      // Add the agent response to the local state
      setMessages([...updatedMessages, agentResponse]);

      // Save messages to localStorage
      localStorage.setItem(
        "chatMessages",
        JSON.stringify([...updatedMessages, agentResponse])
      );
    }, 500);
  };

  // Load messages from localStorage when component mounts
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages"));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  // Focus on the input field when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-4">
      <h1>Chat</h1>
      <div className="p-4 border-2 border-black">
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              textAlign: message.fromUser ? "right" : "left",
            }}
          >
            <span
              style={{
                backgroundColor: message.fromUser ? "#d9f2e6" : "#f2f2f2",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          ref={inputRef}
          className="p-4"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-primary text-white px-8 py-4 rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
