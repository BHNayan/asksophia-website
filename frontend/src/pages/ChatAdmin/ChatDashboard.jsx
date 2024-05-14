import React from "react";
import { ChatEngine } from "react-chat-engine";

const ChatDashboard = () => {
  const project_id = "6718deb0-be1f-42f6-b3de-bc9488c93d4f";
  return (
    <div className="p-4">
      <ChatEngine
        projectID={project_id}
        userName="BH Nayan"
        userSecret="Faltu@123"
        height="calc(100vh - 110px)"
      />
    </div>
  );
};

export default ChatDashboard;
