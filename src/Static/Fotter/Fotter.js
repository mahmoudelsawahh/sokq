"use client"
import React from "react";
import { Col, Container,  Row } from "react-bootstrap";

import { CgChevronDoubleLeft } from "react-icons/cg";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import deltawyLogo from '/public/logo.png'
// HiOutlineMail
const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <Container>
          <Row className="text-center footer-row">
            <Col md={2} className="column-footer">
              <ul className="SouqImage_container">
                <li>
                  <div
                    onClick={() => {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.Deltawy.DeltawyNet",
                        "_blank"
                      );
                    }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      src="https://souq.deltawy.com/javax.faces.resource/logo.png.html?ln=imgs"
                      alt="Clipart Google Play Logo PNG Photos @transparentpng.com"
                    />
                  </div>
                </li>
                <li>
                  <div className="Souq_Links">
                    <FaFacebookF />
                    <BsTwitter />
                    <AiFillInstagram />
                  </div>
                </li>
              </ul>
            </Col>
            {/* <Col md={3} className="column-footer">
              <h3>للشراء من السوق </h3>
              <hr />
              <p>
                دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل
                صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من
                مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع
                المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل
                مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث
                يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية
                الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص
                أصحاب الأعمال
              </p>
            </Col> */}
            <Col md={2} className="column-footer">
              <h3> للشراء من السوق</h3>
              <hr />
              <ul>
                <li>
                  <Link href={"/"}>كبف تشترى من السوق</Link>{" "}
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"/"}>الشحن</Link>{" "}
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"/login"}> عملية الاسترجاع </Link>
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
              </ul>
            </Col>

            <Col md={2} className="column-footer">
              <h3> أصحاب المتاجر</h3>
              <hr />
              <ul>
                <li>
                  <Link  href={"/"}>كيفية التسجيل</Link>{" "}
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"/"}>ادخال بيانات المتجر</Link>{" "}
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"/login"}> انشاء العروض </Link>
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
              </ul>
            </Col>

            <Col md={2} className="column-footer">
              <h3> الصفحات الداخليه </h3>
              <hr />
              <ul>
                <li>
                  <Link  href={"/sitemap.xml"}> الرئيسية</Link>{" "}
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"/shop/sitemap.xml"}> المتجر</Link>{" "}
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"/offers/sitemap.xml"}>العروض</Link>
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"/matgars/sitemap.xml"}>المتاجر</Link>
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
              </ul>
            </Col>

            <Col md={2} className="column-footer">
              <h3> خدمتنا </h3>
              <hr />
              <ul>
                <li>
                  <Link  href={"/tel:01067439828"}>التلفون : 01067439828 </Link>{" "}
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li>
                  <Link  href={"admin@souq-mahala.com"}>
                    الايميل : admin@souq-mahala.com
                  </Link>
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
                <li   onClick={() => {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla",
                        "_blank"
                      );
                    }}>
                  <Link  href={"https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla"}>
                  حمل التطبيق : 
                  </Link>
                  <LazyLoadImage
                      width={50}
                      height={50}
                      effect="blur"
                      src="https://www.transparentpng.com/thumb/google-play-logo/clipart-google-play-logo-png-photos-14.png"
                      alt="Clipart Google Play Logo PNG Photos @transparentpng.com"
                    />
                  <CgChevronDoubleLeft className="footer-arrow-icon" />
                </li>
              </ul>
            </Col>
          </Row>
          <LazyLoadComponent>
            <div className="rights-container">
              <h2 className="text-center">جميع الحقوق محفوظة لدي</h2>
              <Link href={'https://deltawy.com/'}>
              <div
                className="rights-logo"
              >
                <Image src={deltawyLogo} alt="deltawy" layout="responsive" height={200} width={200} loading="lazy"/>
              </div>
              </Link>
            </div>
          </LazyLoadComponent>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
