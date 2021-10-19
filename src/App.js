import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import socketClient from "socket.io-client";
import CanvasBoard from './canvas/CanvasBoard';
import { Form, Button } from 'react-bootstrap';
const SERVER = "http://127.0.0.1:8080";
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center mt-5" >
          <CanvasBoard  />
    </div>
  );
}

export default App;
