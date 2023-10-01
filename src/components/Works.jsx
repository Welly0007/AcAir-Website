import React from "react";
import clientIcon from "../assets/client-icon.webp"
export default function Works() {
  // const numPhotos = 9; // Assuming you have 9 photos
  // const imageElements = [];

  // for (let i = 1; i <= numPhotos; i++) {
  //   const imagePath = `/AcAir-company-website/lastWorks/work(${i}).jpg`;
  //   imageElements.push(
  //     <img key={i} src={imagePath} alt={`Work ${i}`} loading="lazy"/>
  //   );
  // }
  // const numOpinions = 6; // Assuming you have 9 photos
  // const opinionElements = [];

  // for (let i = 1; i <= numOpinions; i++) {
  //   const opinionPath = `/AcAir-company-website/opinions/opinion(${i}).jpg`;
  //   opinionElements.push(
  //     <img key={i} src={opinionPath} alt={`opinion ${i}`} loading="lazy"/>
  //   );
  // }
  return (
    <section id="works" data-aos="fade-left"
    data-aos-offset="200"
    data-aos-once="true"
    >
        <h1 className="works title" >أراء عملاؤنا</h1>
        <div className="opinions">
            <div className="test">
            <div className="review-box" data-aos="fade-up-left" data-aos-delay="300" data-aos-once="true">
              <h3>هاله دياب<img className="client-icon" src={clientIcon}></img></h3>
              <p>
              انا اول مره اجيب شركة تعمل صيانه للتكييفات وبجد اتبسطت جدا وهكررها معاكوا اولا التزام بالمواعيد. ثانیا اسلوب محترم جدا في التعامل ثالثا الصيانه ممتازه وبيستخدموا ادوات ومواد حديثه رابعا بينضفوا مكانهم علي قد ما يقدروا شكرا ليكوا وان شاء الله نتعامل معاكوا علي طول
              </p>
            </div>
            </div>
            <div className="review-box" data-aos="fade-up-left" data-aos-delay="350" data-aos-once="true">
              <h3>اميرة حسين<img className="client-icon" src={clientIcon}></img></h3>
              <p>
              احب اشكر شركة ايه سي اير على التزام المواعيد وبصراحه عندك مصداقية كنت خايفه ان الدنيا عندي تتبهدل بصراحة مشوفتش شركة بتحافظ على نظافة المكان بعد ما بتخلص شغلها و بصراحه الجهاز كنت يائسه منه انه يرجع جديد تاني بس بعد ما نضفتوه كفاءة التبريد رجعت زي ما كانت
              شكرا جدا وان شاء الله مش اخر تعامل ما بيننا
              </p>
            </div>
            <div className="review-box" data-aos="fade-up-left" data-aos-delay="400" data-aos-once="true" data-aos-offset="100">
              <h3>احمد حاباشي<img className="client-icon" src={clientIcon}></img></h3>
              <p>
              متشكر جدا لحضراتكم بجد شركه محترمه جدا وتعامل كويس اوي وصادقين في التعامل و اسعاركم كويسه وكمان بتحافظوا على نضافه المكان كنا شايلين هم تنضيف التكيفات بس معاكو بصراحه كله تمام وان شاء الله مش هيبقى آخر تعامل
              </p>
            </div>
        </div>
    </section>
  );
}
