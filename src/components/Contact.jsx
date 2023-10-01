import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapLocationDot, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact(){
    return(
        <section id="contact"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-once="true"
        >
            <h1 className="title">تواصل معنا</h1>
            <div className="inner">
                <p className="contact-text">
                دايما هنكون اختيارك الافضل من حيث الجودة والكفاءة والثقة <span className="redheard">♥</span> نقدم لكم جميع أعمال الصيانة لجميع انواع اجهزة التكييف سواء توريد أو تركيب أو تأسيس. وافضل عروض الصيانة والعقود السنوية والكشف على المكيفات والتصليح الدوري و الغسيل بأحدث تكنولوجيا متاحة في مصر. <br/>
                لمزيد من التفاصيل برجاء التواصل معنا على:
                </p>
                <div className="contact-info">
                    <ul dir="rtl">
                        <li className="contact-social" dir="ltr" >
                        <FontAwesomeIcon icon={faThumbsUp} beat className="social-icon" />
                        <h4>صفحاتنا</h4>
                                    <a href="https://www.facebook.com/Acair.egypt"><FontAwesomeIcon icon={faFacebook} /> facebook.com/Acair.egypt
                                    </a>
                                    <a href="https://www.instagram.com/acair.eg"><FontAwesomeIcon icon={faInstagram} /> instagram.com/acair.eg</a>
                        </li>
                        <li className="contact-phone">
                        <FontAwesomeIcon icon={faPhone} shake className="social-icon"/>
                        <h4>ارقامنا</h4>
                        <span>01103666942</span>
                        <span>01003463633</span>
                        <span>01200790086</span>
                        <span>0237403474</span>
                        </li>
                        <li className="contact-location">
                        <FontAwesomeIcon icon={faMapLocationDot} bounce  className="social-icon"/>
                        <h4>مكاننا</h4>
                            <span><FontAwesomeIcon icon={faLocationDot} /> 170-شارع الملك فيصل-الجيزة</span>
                            <span>مواعيد العمل:<br/>
                            من ٩ ص ل ١٠ م
                            </span>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
