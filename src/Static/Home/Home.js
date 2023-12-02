"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import BranchesHome from "./BranchesHome/BranchesHome";
import HomeHeader from "./HomeHeader/HomeHeader";
import SlickSections from "./SlickSections/SlickSections";
import  { Subcategories, catDetails, getBranchesProducts, getHomeHeaders, getMainCat, getMostViewed } from "/src/store/CategoriesSlice";
import { getOffers } from "/src/store/OfferSlice";
import { GetFromCart } from "../../store/ShopSlice";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import LazyLoad from "react-lazyload";
import dynamic from 'next/dynamic'
const MatgersHome = dynamic(() => import('./MatgersHome/MatgersHome'), {
  ssr : false
})



const Home = () => {
  const { LoginSouq } = useSelector((state) => state.authSlice);
  const { GetFromCartAarr, isLoading, ProductLoading } = useSelector(
    (state) => state.ShopSlice
  );
  const  {Categories}  = useSelector((state) => state.CategoriesSlice);
 console.log(Categories)
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(Subcategories());
    // dispatch(getBranchesProducts());
    // dispatch(getOffers(0));
    dispatch(getMostViewed());
    // dispatch(catDetails(1));
  }, [dispatch]);


  // useEffect(() => {
  //   const ID = parseInt(window.localStorage.getItem("ClientId"));
  //   if (
  //     !GetFromCartAarr &&
  //     parseInt(window.localStorage.getItem("ClientId")) > 0
  //   ) {
  //     dispatch(GetFromCart(ID));
  // ;
  //   }
  // }, [dispatch, GetFromCartAarr]);

  return (
    <div>
      
      <HomeHeader />

     <LazyLoad height={"500px"} once>
     <MatgersHome />
     </LazyLoad>
     

      <SlickSections Categories={Categories}/>
    </div>
  );
};

export default Home;
