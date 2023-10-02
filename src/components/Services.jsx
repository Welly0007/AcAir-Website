import React from "react";

export default function Services(props){
    const numPhotos = 3; // Assuming you have 9 photos
    const servicePhotos = [];
    const serviceIcons = []
  
    for (let i = 1; i <= numPhotos; i++) {
      const imagePath = `/services/service-photo(${i}).webp`;
      const iconPath = `/services/service-icon(${i}).webp`;
      servicePhotos.push(
        <img key={i} className="service-img" src={imagePath} alt={`photo ${i}`} loading="lazy"/>
      );
      serviceIcons.push(
        <img key={i+"1"} className="service-icon" src={iconPath} alt={`icon ${i}`} loading="lazy"/>
      );
    }
    return(
            <section id="services" data-aos="fade-right" data-aos-once="true"
            data-aos-offset="200"

            >
            <h1 className="services title">خدماتنا</h1>
            <div className="inner">
                <div className="service-card" data-aos="zoom-out" data-aos-once="true" data-aos-delay="300">
                {servicePhotos[0]}
                {serviceIcons[0]}
                <div className="service-text">
                <h3>اجهزة التكييف</h3>
                <p>
                هنساعدك تحدد التكييف المناسب لراحتك وبيئة عملك وتقدر تختار اللي يعجبك من تشكيلتنا الواسعة لكل الشركات والموديلات.
                </p>
                </div>
                </div>
                <div className="service-card" data-aos="zoom-out" data-aos-once="true" data-aos-delay="400">
                {servicePhotos[1]}
                {serviceIcons[1]}
                <div className="service-text">
                <div className="service-text">
                <h3>تركيب وتجهيز مواسير التكييف</h3>
                <p>
                عشان راحتك تهمنا بنقدملك خدمة تاسيس وتجهيز مواسير الفريون النحاس قبل ما تبدأ تشطيب وتأسيس بيتك او مكتبك او شركتك ودة بيقدملك الاختيار الافضل من حيث الكفاءة والشكل العام ويحميك من اي مشاكل او تسريب ممكن يحصل وينتج عنه اضرار وخيمه.
                </p>
                </div>
                </div>
                </div>
                <div className="service-card" data-aos="zoom-out" data-aos-delay="500" data-aos-once="true">
                {servicePhotos[2]}
                {serviceIcons[2]}
                <div className="service-text">
                <div className="service-text">
                <h3>صيانة واصلاحات التكييف</h3>
                <p>
                اجهزة التكييف مش شغاله كويس؟ أدائها بدأ يضعف؟ هتقدر تعمل فحص كامل للتكييف وتصلح كل المشاكل بالإضافة إلى التقارير لكل جهاز مع عقود صيانة سنوية تقدر من خلالها تحافظ على التكييف وتزود كفائتة وعمره الافتراضي.
                </p>
                </div>
                </div>
                </div>
            </div>
            </section>
    )
}
    // function readMore(){
    //     var moreText = document.querySelector('#more')
    //     var dots = document.querySelector('#dots')
    //     var readMoreBtn = document.querySelector('#readMoreBtn')
    //     if(dots.style.display !== 'none'){
    //         dots.style.display = 'inline'
    //         moreText.style.display = 'inline'
    //         readMoreBtn.style.display= 'none'
    //     }
    // }
    
                // <div className="inner">
            //     <div className="inner-text">
            //     <h3>
            //         {props.title}
            //     </h3>
            //     <p style={{ whiteSpace: 'pre-line' }}>
            //     {htmlReactParser(props.description)}
            //     <button onClick={readMore} id="readMoreBtn" className={`class${props.id}`}>المزيد</button>
            //     </p>
            //     </div>
            //     <div className="inner-frame">
            //     <video controls poster={props.videoPoster}>
            //     <source src={props.videoSource} type="video/mp4"/>
            //     </video>
            //     </div>
            // </div>
            // import htmlReactParser from 'html-react-parser';