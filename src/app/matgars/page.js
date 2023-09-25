"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarkets, Increes } from "../../store/MarketsSlice";
import { Col, Container, Row } from "react-bootstrap";
import MatgerCard from "../../Layout/MatgerCard/MatgerCard";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { Helmet } from "react-helmet";
import SearchHesder from "../../Static/SearchHesder/SearchHesder";
import styles from "../page.module.css"
import Service from "@/Static/Service/Service";
import LastofOffersProducts from "@/Static/اخر المنتجات/LastofOffersProducts";
import FooterBar from "@/Static/FooterBar/FooterBar";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block" }}
      className="NextArrow Arrow"
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"PrevArrow Arrow"} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};
const Markets = () => {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  const { MarketsArr, MarketNum } = useSelector((state) => state.MarketsSlice);

  useEffect(() => {
    if (MarketNum <= 0) {
      // setPage((state) => state + 1);
      dispatch(Increes(1));
      dispatch(getMarkets(1));
    } else {
      return;
    }
  }, [dispatch, MarketNum]);

  const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: MarketsArr.length < 4 ? 2 : 4,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const MarketsData =
    MarketsArr.length > 0 &&
    MarketsArr.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <Col xs={12} sm={6} md={3} key={idx}>
          <MatgerCard
            key={idx}
            name={ele.name}
            catName={ele.catName}
            coverImage={ele.coverImage}
            matgarImage={ele.matgarImage}
            face={ele.face}
            whats={ele.whats}
            messenger={ele.messenger}
            call={ele.call}
            pdf={ele.pdf}
            Rate={ele.rate}
            prodCount={ele.prodCount}
            offerCount={ele.offerCount}
            buys={ele.buys}
            id={ele.id}
            pathName={pathName}
          />
        </Col>
      );
    });

  return (
    <>
      {/* <MetaTags>
        <title> سوق المحلة</title>
      </MetaTags> */}
      {/* <Helmet>
        <title>سوق المحلة</title>
        <meta
          name="description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />

        <meta itemprop="name" content="سوق المحلة" />
        <meta
          itemprop="description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />
        <meta
          itemprop="image"
          content="https://apps.souq-mahala.com/javax.faces.resource/logo.png.html?ln=imgs"
        />

        <meta property="og:url" content="https://souq-mahala.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="سوق المحلة" />
        <meta
          property="og:description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />
        <meta
          property="og:image"
          content="https://apps.souq-mahala.com/javax.faces.resource/logo.png.html?ln=imgs"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سوق المحلة" />
        <meta
          name="twitter:description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />
        <meta
          name="twitter:image"
          content="https://apps.souq-mahala.com/javax.faces.resource/logo.png.html?ln=imgs"
        />
      </Helmet> */}
      <Container fluid>
        <SearchHesder res={12} />
        <h1 className={styles.main_heading}>المتاجر المميزة</h1>
        <Slider {...settings}>{MarketsData}</Slider>
        <h2  className={styles.main_heading}>جميع المتاجر</h2>
        <Row>{MarketsData}</Row>
      </Container>
      <Service />
<LastofOffersProducts />
<FooterBar />
    </>
  );
};

export default Markets;
