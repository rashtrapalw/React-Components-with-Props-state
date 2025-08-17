import React from 'react';
import './App.css';  // ✅ Import CSS
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  const userData = {
    name: "Pratik",
    email: "pratik@gmail.com",
    role: "MERN Developer"
  };

  const serviceData = {
    service1: "Web Development",
    service2: "App Development",
    service3: "UI/UX Design"
  };

  return (
    <div>
      <Navbar />
      <hr />
      <Home />
         <hr />
      <About userData={userData} />
         <hr />
      <Contact />
         <hr />
      <Services serviceData={serviceData} />
         <hr />
    </div>
  );
}

export default App;
