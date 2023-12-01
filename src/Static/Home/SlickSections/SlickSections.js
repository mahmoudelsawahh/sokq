"use client"
import React, { useEffect } from "react";
import { Col, Container, Row, TabPane } from "react-bootstrap";
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
import { useState } from "react";
import { baseUrl } from "/src/app/baseUrl";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const [ProductData , setProductData] = useState([])
  const [CatData , setCatData] = useState([])

  const [ProductNumber , setProductNumber] = useState(0)
  const getCatProduct = useSelector((item)=>item.CategoriesSlice.ColtheProducts);
   const [GetParams , setGetParams] = useState()
   const [filterId , setFilterId] = useState(null)
   const [sliderNumber , setSliderNumber] = useState(1)
  const [getChangeData , setGetChangeData] = useState([])
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


  useEffect(()=>{
    fetch(`${baseUrl}/rest/rest.category/getCatProducts`,{
      method : 'POST',
      body : JSON.stringify({
        "uid":4,
        "id":GetParams,
        "page":0
      }),
      cache : 'no-store',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
        'Content-Type': 'application/json',
      } 
    }).then((res)=> res.json())
    .then((data)=> setGetChangeData([...getChangeData , data]))
// -----------------------------------------------------------------------------
  },[GetParams])



  const num = Categories? Categories.cats.map((ele)=> ele.id) : [];
useEffect(()=>{
  
  const featchApiProduct = async()=>{
    
    const res = await fetch(`${baseUrl}/rest/rest.matgar/getCategoryDetailsLite`,{
      method : 'POST',
      body : JSON.stringify({
        "catId":num.length > 0 ? num[ProductNumber + 1] :  3,
        "userId":0,
        "pageId":0
      }),
      cache : 'no-store',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
        'Content-Type': 'application/json',
      } 
    })
    const data = await res.json();
    setProductData(data.products)
    setCatData([data])
  }
  featchApiProduct()
},[])


const fetchData = ()=>{
  setProductNumber(ProductNumber + 1);
  const featchApiProduct = async()=>{
    const res = await fetch(`${baseUrl}/rest/rest.matgar/getCategoryDetailsLite`,{
      method : 'POST',
      body : JSON.stringify({
        "catId": num.length > 0 ? num[ProductNumber + 1] :  3 ,
        "userId":0,
        "pageId":0
      }),
      cache : 'no-store',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
        'Content-Type': 'application/json',
      } 
    })
    const data = await res.json();
    setProductData(ProductData.concat(data.products))
    setCatData([...CatData , data])

  }
  featchApiProduct()
}
  return (
    <>
    <InfiniteScroll
      dataLength={ ProductData.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
    >
              <Container>
      {
        CatData.length > 0 ? CatData
                          .map((ele, idx) => {
                            return (
                              <div key={idx} className="row d-flex align-items-center text-center">
      
                               <div className="col-md-12 col-12">
                              
                               <Tabs
                                    defaultActiveKey="الكل"
                                    id="fill-tab-example"
                                    className="mb-3"
                                    fill
                                    onSelect={(k)=> setGetParams(k)}
                                    style={{backgroundColor : '#f9f9f9', padding : '20px 0px', margin : '50px 0px'}}
                                  >
                                          <TabPane eventKey="الكل" title={ele.name}>
                                               
                               <Slider {...settings} slidesToShow={ ProductData.length ==  1 ? 1 : ProductData.length == 2 ? 2 : ProductData.length == 3 ? 3 : 4}>
                                   { ProductData.filter((items)=> items.parentCat == ele.id)
                                   .map((item , id)=>{
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
                                           </TabPane>
                                         {ele.cats.map((item)=>{
                                          return (
                                            <TabPane key={item.id} eventKey={item.id}  title={item.name}>
                                            <Slider {...settings} slidesToShow={getChangeData.filter((items)=>items.parentId == item.id).length ==   1 ? 1 : getChangeData.filter((items)=>items.parentId == item.id).length ==  2 ? 2 : getChangeData.filter((items)=>items.parentId == item.id).length ==  3 ? 3 : 4}>
                                            
                                            {
                                            getChangeData.filter((element)=>{
                                               return element.parentId == item.id
                                            })
                                            .map((item)=> {
                                              return item.offers.map((item)=>{
                                                 return (
                                                    <Link href={`product/${item.id}/${item.name.replace(/\s/g, "-")}`} key={item.id}>
                                                    <ProductCard
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
                                              })
                                            })
                                            }

                                 </Slider>
                                            </TabPane>
                                          )
                                        })}
                                        
                                  </Tabs>
                          
                           
                      
                               </div>
                              </div>
                            );
                          })
                      : null
       }
      </Container>
    </InfiniteScroll>
    <div >
    

</div>
    </>
  );
};

export default SlickSections;




