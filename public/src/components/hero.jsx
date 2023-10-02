import React from "react";

export default function Hero(){
    return(
        <section id="hero" dir="rtl">
            <div className="hero-inner"
                data-aos="fade-down-left"
                data-aos-mirror="true"
                data-aos-delay="300"
                data-aos-once="true"
            >
                <h2>
                كل الخدمات اللى هتحتاجها في عالم التبريد و التكييف والتجارة مع خبرة تمتد لاكثر من ٢٠ سنة
                </h2>
                <a href="#services"><button className="hero-butt" role="button" >خدماتنا</button></a>
                </div>
        </section>
    )
}