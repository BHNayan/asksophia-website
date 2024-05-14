import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const ChatDashboard = () => {
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='BH Nayan'
      userSecret='Faltu@123'
      height='calc(100vh - 12px)'
    />
  );
}

export default ChatDashboard;