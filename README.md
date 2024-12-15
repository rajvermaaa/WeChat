# WeChat 🚀💬

## Overview
WeChat is a full-stack real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a seamless messaging experience with features like user authentication, avatar selection, and real-time communication.

## Features ✨
- User Registration and Authentication
- Real-time Messaging
- Emoji Support
- Avatar Customization
- Responsive Design


## Prerequisites 📋
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download) (v14 or later)
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
- [Yarn](https://yarnpkg.com/getting-started/install) (Recommended package manager)

## Architecture 🏗️
### Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **State Management**: Local Storage
- **Styling**: Styled Components

### Concurrency Handling
- Socket.io manages real-time bidirectional communication between clients and server
- Backend uses a global `onlineUsers` map to track active user connections
- Messages are broadcasted efficiently using socket events

