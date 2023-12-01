"use client"
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ProductCard from "../../../Layout/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../app/page.module.css"
import Link from "next/link";
import { getMarkets } from "/src/store/MarketsSlice";
import { getMainCat } from "/src/store/CategoriesSlice";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
const SlickSections = ({Categories}) => {
  const getCatProduct = useSelector((item)=>item.CategoriesSlice.ColtheProducts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarkets(0));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMainCat(0));

  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: false,
    autoplaySpeed: 3000,
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
    <div >
      <Container>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
        {
                        Categories? Categories.cats
                          ?.filter((ele) => ele.catList.length > 0)
                          .map((ele, idx) => {
                            
                            return (
                              <div key={idx} className="row d-flex align-items-center text-center">
      
                               <div className="col-md-12 col-12">
                                  <div className="d-flex flex-md-row flex-column gap-md-0 gap-3  justify-content-between align-items-center my-5 p-3" style={{width : '100%', backgroundColor : '#f4f4f4' , borderBottomColor : '#e3e3e3'}}>
                                  <h1 style={{fontSize : '25px', fontWeight : 'bold'}}>{ele.name}</h1>
                                  <ul className="d-flex gap-5 flex-row-reverse flex-wrap justify-content-center" >
                                  {ele.catList.map((item)=>{
                                     return (
                                      <li key={item.id}  style={{cursor : 'pointer', fontWeight : 700, color : '#575252'}}>
                                         <p>{item.name}</p>
                                      </li>
                                     )
                                  })}
                                  </ul>
                                  </div>
                                 <Slider {...settings} slidesToShow={ ele.products.length ==  1 ? 1 : ele.products.length == 2 ? 2 : ele.products.length == 3 ? 3 : 4}>
                                   {ele.products.map((item , id)=>{
                                    return (
                                      <Link href={`product/${item.id}/${item.name.replace(/\s/g, "-")}`} key={id}>
                                      <ProductCard
                                            key={id}
                                            CatName={item.catName}
                                            ProductName={item.name}
                                            image={item &&item.images[0]}
                                            Rate={5}
                                            id={item.id}
                                            matgarId={item.matgarId}
                                            pathName={item.name}
                                            MarketImage={item &&item.matgarLogo}
                                            Goto={"product"}
                                            className={styles.Slick_Product}

                                          />
                                      </Link>
                                    )
                                   })}

                                 </Slider>
                               </div>
                              </div>
                            );
                          })
                      : null
       }
    </Tabs>
      </Container>
    </div>
  );
};

export default SlickSections;




























