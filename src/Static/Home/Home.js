"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import BranchesHome from "./BranchesHome/BranchesHome";
import HomeHeader from "./HomeHeader/HomeHeader";
import MatgersHome from "./MatgersHome/MatgersHome";
import SlickSections from "./SlickSections/SlickSections";
import { Col, Container, Row } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchHesder from "./../../Static/SearchHesder/SearchHesder";
import styles from "../../app/page.module.css"
import  { Subcategories, catDetails, getBranchesProducts, getHomeHeaders, getMainCat, getMostViewed } from "@/store/CategoriesSlice";
import { getMarkets } from "@/store/MarketsSlice";
import { getOffers } from "@/store/OfferSlice";
import { getSearchResult, searchChar } from "@/store/ShopSlice";

const Home = () => {
  const { LoginSouq } = useSelector((state) => state.authSlice);
  const { GetFromCartAarr, isLoading, ProductLoading } = useSelector(
    (state) => state.ShopSlice
  );
  const  {Categories}  = useSelector((state) => state.CategoriesSlice);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Subcategories());
    dispatch(getBranchesProducts());
    dispatch(getOffers(0));
    dispatch(getMostViewed());
    dispatch(catDetails(1));
  }, [dispatch]);


  useEffect(() => {
    const ID = parseInt(window.localStorage.getItem("ClientId"));
    if (
      !GetFromCartAarr &&
      parseInt(window.localStorage.getItem("ClientId")) > 0
    ) {
      dispatch(GetFromCart(ID));
  ;
    }
  }, [dispatch, GetFromCartAarr]);


  return (
    <div>

      <Container fluid>
        <Row>
          <Col xs={12} md={3}  className={styles.diff_col_screen2}>
            <div  className={styles.CatHeader}>
              <FiMenu />
              <h2>التصنيفات</h2>
              <IoMdArrowDropdown />
            </div>
          </Col>
          <SearchHesder res={8} />
        </Row>
      </Container>

      <HomeHeader />

      <MatgersHome />
      <SlickSections Categories={Categories}/>
    </div>
  );
};

export default Home;
