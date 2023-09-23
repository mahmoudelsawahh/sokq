"use client"
import React from "react";
import styles from "../../../app/page.module.css"
import NavBar from "@/Static/NavBar/NavBar";
import Service from "@/Static/Service/Service";
import LastofOffersProducts from "@/Static/اخر المنتجات/LastofOffersProducts";
import FooterBar from "@/Static/FooterBar/FooterBar";
const About = () => {
  return (
    <>
    <NavBar />


    <div className={styles.About} >
      <h1  className={styles.main_heading} >عن الموقع</h1>
      <div>
        <ul>
          <li>
            يصارع معظم المستخدمين عند محاولة اختيار أفضل برنامج للتجارة
            الإلكترونية. هناك الكثير من الأشياء هناك. هناك متطلبات مختلفة
            للمقارنة ، ونقاط الأسعار المختلفة ، والميزات ، والقدرات ، والتصاميم
            ، وما إلى ذلك.
          </li>
          <li>
            للقول ببساطة ، فإن برنامج التجارة الإلكترونية هو نظام التشغيل (OS)
            الخاص بمتجرك على الإنترنت.
          </li>

          <li>
            تمامًا كما يحتوي هاتفك الذكي على نظام التشغيل الخاص به - على الأرجح
            iOS أو Android - يحتاج متجرك عبر الإنترنت إلى نظام تشغيل أيضًا. يعمل
            نظام التشغيل هذا خلف الكواليس ويسمح للعملاء بالشراء منك ، ويمكنك من
            إدارة الطلبات الواردة ومعالجتها والتواصل مع العملاء بشكل فعال - مما
            يساعدك على تحقيق المزيد من المبيعات.
          </li>

          <li>
            ربما يكون أفضل شيء مع أفضل برامج التجارة الإلكترونية هو أنه لا يتطلب
            أي معرفة متخصصة لاستخدامها.
          </li>
        </ul>
      </div>
    </div>
    <Service />
   <LastofOffersProducts />
    <FooterBar />
    </>
  );
};

export default About;
