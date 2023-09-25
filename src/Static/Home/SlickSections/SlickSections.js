"use client"
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ProductCard from "../../../Layout/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import MarketImage from "../../../../public/images/MarketSlick.png";
import styles from "../../../app/page.module.css"
import Link from "next/link";
import { getMarkets } from "@/store/MarketsSlice";
import { getMainCat } from "@/store/CategoriesSlice";
import SlickCategories from "@/Layout/SlickCategories/SlickCategories";
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
  const  {MarketsArr}  = useSelector((state) => state.MarketsSlice);
  const [CatLength , setCatLength] = useState(1)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarkets(0));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMainCat(0));

  }, [dispatch]);

  const MarketsData =
    Categories ?
    Categories.cats.map((item) => {
      item.catList.map((ele , id)=>{
        const pathName = ele.name.replace(/\s/g, "-");
      return (
        <ProductCard
                      key={id}
                      CatName={ele.name}
                      ProductName={ele.name}
                      image={ele.image}
                      Rate={5}
                      id={ele.id}
                      pathName={pathName}
                      MarketImage={ele.image}
                      Goto={"matgar"}
                      className={styles.Slick_Product}
                    />
      );
      })
    }) : null

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
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
          slidesToShow: 2,
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
      <Container fluid>
      {
                        Categories? Categories.cats
                          ?.filter((ele) => ele.catList.length > 0)
                          .map((ele, idx) => {
                            
                            return (
                              <div key={idx} className="row d-flex align-items-center text-center">
                               <div className="col-md-3 col-12">
                                  <SlickCategories
                                    MainName={ele.name}
                                    id={ele.id}
                                    catList={ele.catList}
                                    backImage={ele.image}
                                  />
                               </div>
                               <div className="col-md-8 col-12">
                                 <Slider {...settings} slidesToShow={ ele.products.length ==  1 ? 1 : ele.products.length == 2 ? 2 : ele.products.length == 3 ? 3 : 4}>
                                   {ele.products.map((item , id)=>{
                                    return (
                                      <Link href={`product/${item.id}/${item.name}`} key={id}>
                                      <ProductCard
                                            key={id}
                                            CatName={item.name}
                                            ProductName={item.name}
                                            image={item &&item.images[0]}
                                            Rate={5}
                                            id={item.id}
                                            pathName={item.name}
                                            MarketImage={item &&item.images[1]}
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
      </Container>
    </div>
  );
};

export default SlickSections;