import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./frontend/context/store/auth";
import { NoteListProvider } from "./frontend/context/store/notelist";
import { ThemeChanger } from "./frontend/context/store/theme";
// Call make Server
makeServer();
const container =document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeChanger>
      <NoteListProvider>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
    </NoteListProvider>
    </ThemeChanger>
    </AuthProvider>
  </React.StrictMode>
);
