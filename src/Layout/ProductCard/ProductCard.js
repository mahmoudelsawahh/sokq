"use client"
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Rating } from "primereact/rating";
import  styles from "../../app/page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCard = ({

  image,
  CatName,
  ProductName,
  priceBefore,
  priceAfter,
  Rate,
  id,
  pathName,
  MarketImage,
  styleClass,
  Goto,
  imgWid,
  imgHei,
}) => {
  const router = useRouter();

  return (
    // <div className={styles.ProductCard}>
<div className={`${styles.ProductCard} ${styleClass ? styleClass : styles["normal_div"]}`}>
      <div className={styles.Card_img}>
        <div className={styles.card_logo}>
          <LazyLoadImage
            src={`https://souq.deltawy.com/imag?id=${MarketImage}`}
            alt="marketLogo"
            effect="blur"
            width={50}
            height={50}
             className={styles.logo}
            
          />
        </div>
       <div  className={styles.logo_imgg} >
        <LazyLoadImage
          src={`https://souq.deltawy.com/imag?id=${image}`}
          alt={ProductName}
          width={imgWid ? imgWid : 200}
          height={imgHei ? imgHei : 200}
          effect="blur"
         
          onClick={() => {
            if (Goto === "product") {
              router.push(`/product/${id}/${pathName}`);
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }
            if (Goto === "matgar") {
              router.push(`/matgarr/${id}/${pathName}`);
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }
          }}
          />
      </div>
      </div>

      <div className={styles.CardInfo}
      onClick={() => {
          if (Goto === "product") {
            router.push(`/product/${id}/${pathName}`);
            window.scrollTo({
              top: 0,
              left: 100,
              behavior: "instant",
            });
          }
          if (Goto === "matgar") {
            router.push(`/matgarr/${id}/${pathName}`);
            window.scrollTo({
              top: 0,
              left: 100,
              behavior: "instant",
            });
          }
        }}
 >
  <div  className={styles.Product_Name}>
          <h3>{ProductName}</h3>
          {/* <Rating
            readOnly
            value={Rate <= 1 ? 1 : Rate}
            stars={5}
            cancel={false}
          /> */}
        </div>
        <h5 className="text-center">{CatName}</h5>
</div>
    </div>
    // </div>
    
  );
};

export default ProductCard;
