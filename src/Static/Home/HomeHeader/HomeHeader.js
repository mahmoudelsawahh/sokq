"use client"
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import { Rating } from "primereact/rating";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import BranchesHome from "../BranchesHome/BranchesHome";
import styles from "../../../app/page.module.css";
import Link from "next/link";
import {getHomeHeaders, getMainCat } from "@/store/CategoriesSlice";
import LazyLoad from "react-lazyload";
import image_1 from '/public/1.webp'
import image_2 from '/public/2imag.webp'
import image_3 from '/public/3imag.webp'
import image_4 from '/public/4imag.webp'
import image_5 from '/public/5imag.webp'
import image_6 from '/public/6imag.webp'
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.upArrow}`} onClick={onClick}>
      <IoIosArrowUp />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.downArrow}`} onClick={onClick}>
      <MdKeyboardArrowDown />
    </div>
  );
};


const Banners = [image_1 , image_2 , image_3 , image_4 , image_5 , image_6]

const HomeHeader = () => {
  const  {Categories}  = useSelector((state) => state.CategoriesSlice);
  const { lastOfferArr } = useSelector((state) => state.OfferSlice);
  const { HomeHeadersArr } = useSelector((state) => state.CategoriesSlice);



  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeHeaders());
    dispatch(getMainCat(0));
  }, [dispatch]);






  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // ***************
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    // ****************
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const CatgeoriesSelect =
    Categories &&
    Categories.cats.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx}  className={styles.Cat_Filter}>
          <Link
            href={`/branch/${ele.id}/${pathName}`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            {ele.name}
            <div  className={styles.img_container}>
              <LazyLoadImage
                src={`https://souq.deltawy.com/imag?id=${ele.icon}`}
                alt={ele.name}
                effect="blur"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      );
    });

  const OfferSlick =
    lastOfferArr &&
    lastOfferArr.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      const imageID = ele.images[0];
      return (
        <div
          key={idx}
        >
          <Link href={`/product/${ele.id}/${pathName}`}>
          <div  className={styles.card_container}>
            <LazyLoadImage
              src={`https://souq.deltawy.com/imag?id=${imageID}`}
              alt={ele.name}
              effect="blur"
              width={200}
              height={150}
            />
            <div className={styles.info} >
              <div className={styles.name_info}>
                <p>{ele.name}</p>
                <Rating readOnly value={ele.rate} stars={5} cancel={false} />
              </div>
              <div className={styles.price_info}>
                <del>{ele.priceBefore}</del>
                <span>{ele.priceAfter}</span>
              </div>
            </div>
          </div>
          </Link>
        </div>
      );
    });

  
  return (
    <div className={styles.HomeHeader}>
      <Container fluid>
        <Row  className={styles.Home_row}>
          {/* d-sm-block d-lg-none */}
          <Col md={3}  className={`${styles.diff_col_screen}  d-none d-lg-flex d-lg-flex `}>
            <div  className={styles.main_container_Filter}>
              {CatgeoriesSelect}
              <Link className={styles.More} href={"/shop"}>
                المزيد
              </Link>
            </div>
          </Col>
          <Col md={9}>
          
          <Carousel data-bs-theme="light">
            {Banners.map((item , id)=>{
              return (
                <Carousel.Item key={id}>
                    <Image
                      className="d-block w-100"
                      src={item}
                      alt="First slide"
                       loading="lazy"
                       height={550}
                    />
                    <Carousel.Caption className="d-none d-md-block" style={{position : 'absolute' , top : '60%' , left : '50%', transform : 'translate(-50% , -50%)',}}>
                      <h1 style={{fontWeight : 'bold'}}>سوق المحله الكبري</h1>
                      <p>سوق المحلة   شباشب حريمي محفظة حريمي موبايلات  مكياج </p>
                    </Carousel.Caption>
                  </Carousel.Item>
              )
            })}
          </Carousel>
          </Col>
          <Col md={2} className="d-none d-lg-flex " >
            <div  className={styles.offer_slick_header}>
              <h3>اخر العروض</h3>
              <LazyLoad height={"100%"} once>
                 <Slider {...settings}>{OfferSlick}</Slider>
              </LazyLoad>
            </div>
          </Col>
          <Col md={12}>
            <BranchesHome Categories={Categories} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeHeader;