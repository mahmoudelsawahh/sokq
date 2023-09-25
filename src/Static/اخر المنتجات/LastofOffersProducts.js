"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Layout/ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../app/page.module.css";
import { getSearchResult } from "../../store/ShopSlice";
import Link from "next/link";
import { Subcategories, catDetails, getBranchesProducts, getMostViewed } from "@/store/CategoriesSlice";
import { getOffers } from "@/store/OfferSlice";

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

  const Mostview =
  MostViewedArr &&
  MostViewedArr.offers.slice(0, 4).map((ele, idx) => {
    const pathName = ele.name.replace(/\s/g, "-");
    const imageID = ele.images[0];
    return (
     <Link href={`product/${ele.id}/${ele.name}`}  style={{padding : '30px 0px'}}>
       <ProductCard
        key={idx}
        CatName={ele.catName}
        ProductName={ele.name}
        priceBefore={ele.priceBefore}
        priceAfter={ele.priceAfter}
        image={imageID}
        Rate={ele.rate}
        id={ele.id}
        pathName={pathName}
        MarketImage={ele.matgarLogo}
        className={styles.Last_div}
        // Goto={"product"}
        imgWid={100}
        imgHei={100}
      />
     </Link>
    );
  });

  const OfferSlick =
  MostViewedArr &&
  MostViewedArr.offers.slice(11, 15).map((ele, idx) => {
    const pathName = ele.name.replace(/\s/g, "-");
    const imageID = ele.images[0];
    return (
     <Link href={`product/${ele.id}/${ele.name}`} style={{padding : '30px 0px'}}>
       <ProductCard
        key={idx}
        CatName={ele.catName}
        ProductName={ele.name}
        priceBefore={ele.priceBefore}
        priceAfter={ele.priceAfter}
        image={imageID}
        Rate={ele.rate}
        id={ele.id}
        pathName={pathName}
        MarketImage={ele.matgarLogo}
        className={styles.Last_div}
        // Goto={"product"}
        imgWid={100}
        imgHei={100}
        
      />
     </Link>
    );
  });

  const ShopData =
  MostViewedArr &&
  MostViewedArr.offers.slice(5, 9).map((ele, idx) => {
    const pathName = ele.name.replace(/\s/g, "-");
    const imageID = ele.images[0];
    return (
     <Link href={`product/${ele.id}/${ele.name}`}  style={{padding : '30px 0px'}}>
       <ProductCard
        key={idx}
        CatName={ele.catName}
        ProductName={ele.name}
        priceBefore={ele.priceBefore}
        priceAfter={ele.priceAfter}
        image={imageID}
        Rate={ele.rate}
        id={ele.id}
        pathName={pathName}
        MarketImage={ele.matgarLogo}
        className={styles.Last_div}
        // Goto={"product"}
        imgWid={100}
        imgHei={100}
      />
     </Link>
    );
  });

  return (
    <div  className={styles.LastofOffersProducts}>
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <h2  className={styles.LastHeading}>اخر المنتجات</h2>
            {ShopData}
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h2  className={styles.LastHeading}>الاكثر مشاهدة</h2>
            {Mostview}
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h2  className={styles.LastHeading}>اخر العروض</h2>
            {OfferSlick}
          </Col> 
        </Row>
      </Container>
    </div>
  );
};

export default LastofOffersProducts;
