import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Linkedin from './Components/Linkedin/Linkedin'

export default function App() {
  return (
    <BrowserRouter>
        <Route component={Linkedin} exact/>
    </BrowserRouter>
  );
}
