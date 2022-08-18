import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';

import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Header from './components/Header';
//import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Footer from './components/footer';
//import ResponsiveCarouselComponent from "./pages/crousal";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import Login from './pages/Login';
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import SignUp from './pages/signup';
//import AdminLogin from './pages/adminlogin';
//import AdminSignUp from './pages/adminsignup';
import Contact from './pages/contact';


 


export default function App() {
return (
	<Router><Navbar1/>	<Header/><Navbar /> 
	<Routes>
		<Route exact path='/'  element={<Home />} />
    <Route path='/home' element={<Home/>} />
  	<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
    <Route exact path="/" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/reset" element={<Reset />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
		{/* <Route path='/'  element={<Login/>} /> */}
    <Route path='/profile' element={<Profile/>} />
		{/* <Route path='/signup' element={<SignUp/>} /> */}
    {/* <Route path='/adminlogin' element={<AdminLogin/>} /> */}
    
   </Routes>
  <Footer/>
	</Router> 
);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
/* 



const steps = [
  {
      id: '0',
      message: 'Hey Geek!',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
  }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',

      // Here we want the user
      // to enter input
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [
           
          // When we need to show a number of
          // options to choose we create alist
          // like this
          { value: 1, label: 'View Courses' },
          { value: 2, label: 'Read Articles' },

      ],
      end: true
  }
];

// Creating our own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "img.png",
  floating: true,
};




<ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GeekBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>*/
	