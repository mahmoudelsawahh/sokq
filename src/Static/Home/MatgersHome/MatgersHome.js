"use client"
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ProductCard from "../../../Layout/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import MarketImage from "../../../../public/images/MarketSlick.png";
import styles from "../../../app/page.module.css"
import Link from "next/link";
import { getMarkets } from "/src/store/MarketsSlice";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
       className={`${styles.Arrow} ${styles.NextArrow}`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.PrevArrow}`} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};
const MatgersHome = () => {
  const  {MarketsArr}  = useSelector((state) => state.MarketsSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarkets(0));
  }, [dispatch]);


  const MarketsData =
    MarketsArr.length > 0 &&
    MarketsArr.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <Link href={`/matgarr/${ele.id}/${ele.name.replace(/\s/g, "-")}`} key={idx}>
          <ProductCard
            key={idx}
            CatName={ele.catName}
            ProductName={ele.name}
            image={ele.coverImage}
            Rate={ele.rate}
            id={ele.id}
            pathName={pathName}
            MarketImage={ele.matgarImage}
            className={styles.Slick_Product}
            hideLogo={true}

          />
        </Link>
      );
    });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    initialSlide: 0,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div  className={styles.SlMatgerHomeick_Product} style={{margin : '60px 0px'}}>
      <Container fluid>
        <Row className="align-items-center ">
          <Col md={3} className="d-flex justify-content-center mb-md-2 mb-0">
            <div
             className={styles.MainCatBackgound}
             style={{position : 'relative'}}
            >
              <h2  className={styles.Main_title} style={{color : '#fff' ,  zIndex : 544}}>اهم المتاجر</h2>
              <div style={{position : 'absolute' , backgroundColor : '#00000036', width : '100%' , height : '100%'}}></div>
            </div>
          </Col>
          <Col md={8}>
            <Slider {...settings}>{MarketsData}</Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MatgersHome;
