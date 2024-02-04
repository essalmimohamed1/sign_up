import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/home.jsx';
import { About } from './pages/About/about.jsx';

function App() {
    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lasttname, setlastname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repeat, setrepeat] = useState("");
    const [validatedEmail, setValidatedEmail] = useState("");
    const [validatedPassword, setValidatedPassword] = useState(""); 

    class users {
        constructor(username, email, password, firstname, lastname , phone) {
            this.username = username
            this.email = email
            this.password = password
            this.firstname = firstname
            this.lastname = lastname
            this.phone = phone
        }
    }
    []
    const user = new users();
    // user.username = username;
    // user.email = email;
    // user.password = password;
    // user.firstname = firstname;
    // user.lastname = lasttname;
    // user.phone = phone;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/:id" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
