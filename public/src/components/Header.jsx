import React, { useEffect } from "react";
import HeadLogo from "../assets/Head_logo.webp";
export default function Header(props){    
    window.onscroll = function (){headerFunction()};
    function headerFunction(){
        var header = document.querySelector('header')
        var logoHead = document.querySelector('.logo-head')
        var navItems = document.querySelector('.nav-items')
        var navItem = document.querySelectorAll('.nav-item')
        if(document.documentElement.scrollTop < props.secPos.whoweareStart -50){
            navItem[0].classList.remove("active")
            navItem[1].classList.remove("active")
            navItem[2].classList.remove("active")
            navItem[3].classList.remove("active")
    }
        else if(document.documentElement.scrollTop < props.secPos.servicesStart -50){
                navItem[0].classList.add("active")
                navItem[1].classList.remove("active")
                navItem[2].classList.remove("active")
                navItem[3].classList.remove("active")
        }else if(document.documentElement.scrollTop < props.secPos.worksStart -50){
            navItem[0].classList.remove("active")
            navItem[1].classList.add("active")
            navItem[2].classList.remove("active")
            navItem[3].classList.remove("active")
        }else if(document.documentElement.scrollTop < props.secPos.contactStart- 50){
            navItem[0].classList.remove("active")
            navItem[1].classList.remove("active")
            navItem[2].classList.add("active")
            navItem[3].classList.remove("active")
        }else {
            navItem[0].classList.remove("active")
            navItem[1].classList.remove("active")
            navItem[2].classList.remove("active")
            navItem[3].classList.add("active")
        }
        if(document.documentElement.scrollTop > props.secPos.whoweareStart -70){
            header.classList.add("animate")
            logoHead.classList.add("animate")
            navItems.classList.add("animate")


        }else{
            header.classList.remove("animate")
            logoHead.classList.remove("animate")
            navItems.classList.remove("animate")
        }
    }

    return(
        <header dir="ltr" className="">
            <div className="logo-head">
                <img src={HeadLogo} alt="headLogo"></img>
            </div>
            <nav className="head-nav">
                <ul className="nav-items">
                    <a href="#whoweare"><li className="nav-item">احنا مين</li></a>
                    <a href="#services"><li className="nav-item">خدماتنا</li></a>
                    <a href="#works"><li className="nav-item">آراء عملاؤنا</li></a>
                    <a href="#contact"><li className="nav-item">تواصل معنا</li></a>
                </ul>
            </nav>

        </header>
    )
}