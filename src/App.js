// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './Layout';
import Services from './Services';
import Home from './Home';
import About from './About';
import Properties from './Properties';
import ContactUs from './ContactUs.jsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/services',
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/properties',
    element: (
      <Layout>
        <Properties />
      </Layout>
    ),
  },
  {
    path:'/contactus',
    element:(
      <Layout>
        <ContactUs/>
      </Layout>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
