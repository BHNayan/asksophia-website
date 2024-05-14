import React, { useState } from "react";
import { styles } from "../ChatPages/Styles.js";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Avatar from "../ChatPages/Avatar";

const EmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const private_key = "a70b4056-5030-40bd-91c2-7226115c6f94"; // Replace with your actual private key
  const project_id = "6718deb0-be1f-42f6-b3de-bc9488c93d4f"; // Replace with your actual project ID

  function getOrCreateUser(callback) {
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username: email, email: email, secret: email },
        {
          headers: {
            "PRIVATE-KEY": private_key,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("User created successfully:", response.data);
        callback(response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  }



  function getOrCreateChat(callback) {
    axios
      .put(
        "https://api.chatengine.io/chats/",
        { usernames: [email,"BH Nayan"], title: "New Chat", is_direct_chat: true },
        {
          headers: {
            "Project-ID": project_id,
            "User-Name": email,
            "User-Secret": email,
            "Content-Type": "application/json",
          },
        }
      )
      .then((r) => callback(r.data))
      .catch((e) => console.log("Get or create chat error", e));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    console.log("Sending Email", email);

    getOrCreateUser((user) => {
      props.setUser && props.setUser(user);
      getOrCreateChat((chat) => {
        setLoading(false);
        props.setChat && props.setChat(chat);
      });
    });
  }

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: props.visible ? "100%" : "0px",
          opacity: props.visible ? "1" : "0",
        },
      }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe} />
      </div>

      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />
      <AiOutlineLoading3Quarters
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "1" : "0",
            fontSize: "82px",
            top: "calc(50% - 41px)",
            left: "calc(50% - 41px)",
          },
        }}
      />

      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Avatar
          style={{
            position: "relative",
            left: "calc(50% - 44px)",
            top: "10%",
          }}
        />

        <div style={styles.topText}>
          Welcome to Asksophia
          <br /> support 👋
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: "relative", width: "100%", top: "19.75%" }}
          className="flex flex-col items-center justify-center m-2 gap-2"
        >
          <input
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.emailInput}
          />
        </form>

        <div style={styles.bottomText}>
          Enter your email <br /> to get started.
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
