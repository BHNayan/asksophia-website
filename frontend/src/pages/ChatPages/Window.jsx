import React, { useState } from "react";
import { styles } from "../ChatPages/Styles.js";
import EmailForm from "./EmailForm";
import { ChatEngine } from "react-chat-engine";

const Window = (props) => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);

  return (
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <EmailForm
        visible={user === null || chat === null}
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
      />

      <ChatEngine
        visible={user !== null || chat !== null}
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
      />
    </div>
  );
};

export default Window;
