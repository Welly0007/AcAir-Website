import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import Hero from "./components/hero";
import Whoweare from "./components/Whoweare";
import Services from "./components/Services"
import Works from "./components/Works";
import Contact from "./components/Contact"
import './index.css'


function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}
export default function App(){

  const [secPos, setSecPos] = React.useState([])
  useEffect(()=> {
    function knowScroll(){
      const whoweare = getOffset(document.getElementById('whoweare')).top;
      const services = getOffset(document.getElementById('services')).top;
      const works = getOffset(document.getElementById('works')).top;
      const contact = getOffset(document.getElementById('contact')).top;
      setSecPos(()=> ({
        whoweareStart:whoweare,
        servicesStart:services,
        worksStart: works,
        contactStart: contact
      }))

    }

    // Call the knowScroll function when the component mounts.
    knowScroll();

    // Optionally, you can add an event listener to call knowScroll when the user scrolls.
    window.addEventListener('scroll', knowScroll);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', knowScroll);
    };

  }, [setSecPos])

  return(
    <>
    <Header 
    secPos={secPos}
    />
    <Hero/>
    <div className="container">
      <Whoweare/>
      <Services/>
      <Works/>
      <Contact/>
    </div>
    </>
  )
}

















  // const services = Data.map(item =>{
  //   return(
  //       <Service
  //       className="service"
  //       key={item.id}
  //       {...item}
  //       />
  //   )
  // })
        /* <section id="services" data-aos="zoom-out-up" data-aos-offset="500" data-aos-duration="1000">
            <h1 className="services title">خدماتنا</h1>
            <div className="service">
              {services}
            </div>
      </section> */