"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Layout/ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../app/page.module.css";
import { getSearchResult } from "../../store/ShopSlice";
import Link from "next/link";
import { Subcategories, catDetails, getBranchesProducts, getMostViewed } from "/src/store/CategoriesSlice";
import { getOffers } from "/src/store/OfferSlice";
import Image from "next/image";
import testImage from '/public/images/HomeHeader.png'
const LastofOffersProducts = () => {
  const dispatch = useDispatch();
  const { lastOfferArr } = useSelector((state) => state.OfferSlice);
  const { LastProductArr } = useSelector(
    (state) => state.ShopSlice
  );
  const { MostViewedArr } = useSelector((state) => state.CategoriesSlice);

   useEffect(()=>{
    dispatch(getMostViewed());
   },[dispatch])

   const OfferSlick =
   MostViewedArr &&
   MostViewedArr.offers.slice(11, 15).map((ele, idx) => {
     const pathName = ele.name.replace(/\s/g, "-");
     const imageID = ele.images[0];
     return (
      <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}  style={{padding : '30px 0px'}} >
      <div className="d-flex gap-2">
        <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={100} height={100}/>
        <div style={{display : 'flex', justifyContent : 'space-between', flexDirection : 'column'}}>
            <h1 style={{fontSize : '20px'}}>{pathName}</h1>
            {/* <h1 style={{fontSize : '20px'}}>{ele.priceAfter == 0 ? "": ele.priceAfter}</h1> */}
        </div>
      </div>
  </Link>
     );
   });



   const ShopData =
   MostViewedArr &&
   MostViewedArr.offers.slice(5, 9).map((ele, idx) => {
     const pathName = ele.name.replace(/\s/g, "-");
     const imageID = ele.images[0];
     return (
      <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}  style={{padding : '30px 0px'}} >
          <div className="d-flex gap-2">
            <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={100} height={100}/>
            <div style={{display : 'flex', justifyContent : 'space-between', flexDirection : 'column'}}>
                <h1 style={{fontSize : '20px'}}>{pathName}</h1>
                {/* <h1 style={{fontSize : '20px'}}>{ele.priceAfter == 0 ? "": ele.priceAfter}</h1> */}
            </div>
          </div>
      </Link>
     );
   });


   
  const Mostview =
  MostViewedArr &&
  MostViewedArr.offers.slice(0, 4).map((ele, idx) => {
    const pathName = ele.name.replace(/\s/g, "-");
    const imageID = ele.images[0];
    return (
      <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}  style={{padding : '30px 0px'}} >
      <div className="d-flex gap-2">
        <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={100} height={100}/>
        <div style={{display : 'flex', justifyContent : 'space-between', flexDirection : 'column'}}>
            <h1 style={{fontSize : '20px'}}>{pathName}</h1>
        </div>
      </div>
  </Link>
    );
  });

  

  return (
    <div  className={styles.LastofOffersProducts}>
      <Container>
      <Row>
          <Col xs={12} md={4}>
            <h2  className={styles.LastHeading}>اخر المنتجات</h2>
            <div>
                {ShopData}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h2  className={styles.LastHeading}> الاكثر مشاهدة</h2>
            <div>
                {OfferSlick}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h2  className={styles.LastHeading}> المضاف حديثا</h2>
            <div>
                {Mostview}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LastofOffersProducts;
