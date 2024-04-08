import React from 'react';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router basename='chat-app'>
      <Routes>
      <Route path="/" exact Component={Join} />
      <Route path="/chat" Component={Chat} />
      </Routes>
    </Router>
  )
}

export default App;