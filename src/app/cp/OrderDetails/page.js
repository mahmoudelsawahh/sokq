
"use client"
import NavBar from "@/Static/NavBar/NavBar";
import Service from "@/Static/Service/Service";
import LastofOffersProducts from "@/Static/اخر المنتجات/LastofOffersProducts";
import FooterBar from "@/Static/FooterBar/FooterBar";
import styles from "../../../app/page.module.css"
import { useParams, useRouter } from 'next/navigation';

import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import working from "../../../../public/images/emptyCart.svg";
import { getOrderDetails } from "../../../store/ControlPanalSlice";
import Image from "next/image";
const OrderDetails = () => {
  //   const router = useRouter();
  // const id  = router.query;

  const dispatch = useDispatch();
  // const { id } = useParams();
  const router = useRouter();
  const { id } = router.query || {};
  const { OrderDetailsArr } = useSelector((state) => state.ControlPanalSlice);
  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);

  const OrderDetails = OrderDetailsArr && <div>{OrderDetailsArr.name}</div>;
  return (
    <>
     <NavBar />

      {" "}
      {/* {OrderDetails} */}
      {/*  */}
      <div className={styles.CartEmpty}>
        <div className={styles.card_container_empty}>
          <Image src={working} effect="blur" alt="empty" />
        </div>
        <h3>نقوم بالعمل علي هذه الصفحة الان</h3>
        <p>تصفح فئاتنا واكتشف أفضل عروضنا</p>
      </div>
      <Service />
   <LastofOffersProducts />
    <FooterBar />
    </>
  );
};

export default OrderDetails;
