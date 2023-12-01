"use client"
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import styles from "/src/app/page.module.css"
import Link from "next/link";
import {getHomeHeaders, getMainCat } from "/src/store/CategoriesSlice";

import MatgarContent from "./MatgarContent";
import { useParams } from "next/navigation";
import { getMarketsDetails } from "/src/store/MarketsSlice";
import MatagrLocation from "./MatagrLocation";
import LazyLoad from "react-lazyload";
import MatagrProduct from "./MatagrProduct";

const MatagrBody = ({params}) => {
  const  {Categories}  = useSelector((state) => state.CategoriesSlice);

 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeHeaders());
    dispatch(getMainCat(0));
  }, [dispatch]);


  const { MarketDetialsArr } = useSelector((state) => state.MarketsSlice);
  const { id, name } = useParams();
  useEffect(() => {
    dispatch(getMarketsDetails(parseInt(id)));
  }, [dispatch]);



 const CatgeoriesSelect =
    Categories &&
    Categories.cats.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx}  className={styles.Cat_Filter}>
          <Link
            href={`/branch/${ele.id}/${pathName}`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            {ele.name}
            <div  className={styles.img_container}>
              <LazyLoadImage
                src={`https://souq.deltawy.com/imag?id=${ele.icon}`}
                alt={ele.name}
                effect="blur"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      );
    });
  
  return (
    <div className={styles.HomeHeader}>
      <Container fluid>
        <Row  className={styles.Home_row}>
          {/* d-sm-block d-lg-none */}
          <Col md={3}  className={`${styles.diff_col_screen}  d-none d-lg-flex d-lg-flex `} style={{height : '100%'}}>
            <div  className={styles.main_container_Filter}>
              {CatgeoriesSelect}
              <Link className={styles.More} href={"/shop"}>
                المزيد
              </Link>
            </div>
          </Col>
          <Col md={9}>
            <MatgarContent MarketDetialsArr={MarketDetialsArr} params={params}/>
          </Col>       
          <Col md={12}>
              <MatagrProduct MarketDetialsArr={MarketDetialsArr}/>
          </Col>
           <Col md={12}>
                <div style={{color : '#fff', marginBottom : '50px'}}>
                    <div className="card text-center">
                    <div className="card-header" style={{ backgroundColor : '#fff'}}>
                            <h1 style={{fontSize : '32px', color : '#055c97', textAlign : 'start'}}>الخريطه</h1>
                        </div>
                        <div className="card-body">
                        <div >
                            <LazyLoad height={"100%"} once>
                            <MatagrLocation latt={MarketDetialsArr} />
                                </LazyLoad>
                            </div>
                        </div>
                        
                    </div>
                </div>  
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MatagrBody;