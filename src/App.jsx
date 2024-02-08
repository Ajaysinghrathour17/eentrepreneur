import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Team from "./components/Team/Team.jsx";
import Reports from "./components/Reports/Reports.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import AboutPage from "./components/About/AboutPage.jsx";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Event from "./components/gallery/Event.jsx";
import Media from "./Pages/Media.jsx";
// ..
AOS.init();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" Component={Home} />
      <Route path="about" Component={AboutPage} />
      <Route path="team" element={<Team />} />
      <Route path="reports" element={<Reports />} />
      <Route path="contact" element={<Contact />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="events" element={<Event />} />
      <Route path="media" element={<Media />} />



    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
