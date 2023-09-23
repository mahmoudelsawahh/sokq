"use client"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarketsDetails } from "../../../store/MarketsSlice";
// import GMapDemo from "./MatgerLocation/MatgerLocation";
import styles from "../../page.module.css"

import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import NavBar from "@/Static/NavBar/NavBar";
import Service from "@/Static/Service/Service";
import LastofOffersProducts from "@/Static/اخر المنتجات/LastofOffersProducts";
import FooterBar from "@/Static/FooterBar/FooterBar";
import MatgerHeader from "@/app/matgar/MatgerHeader/MatgerHeader";
import MatgerDescription from "@/app/matgar/MatgerDescription/MatgerDescription";
import MatgerLocation from "@/app/matgar/MatgerLocation/MatgerLocation";
import MatgerProducts from "@/app/matgar/MatgerProducts/MatgerProducts";

const matgarr = () => {
  // const param = useParams();
  // console.log(param)
  const dispatch = useDispatch();
  const { id, name } = useParams();
//   const router = useRouter();
//   const { id, name } = router.query || {};
  // const router = useRouter();
  // const   id  = router.query;
  // const  name  = router.query;
  useEffect(() => {
    dispatch(getMarketsDetails(parseInt(id)));
  }, [dispatch, id]);
  const { MarketDetialsArr } = useSelector((state) => state.MarketsSlice);
  // const MarketInfo = MarketDetialsArr
  //   ? MarketDetialsArr.products.map((ele) => {
  //       return <div>{ele.name}</div>;
  //     })
  //   : null;
  const MatHeader = MarketDetialsArr && (
    <MatgerHeader
      coverImage={MarketDetialsArr.coverImage}
      name={MarketDetialsArr.name}
      phone={MarketDetialsArr.call}
      face={MarketDetialsArr.face}
      messenger={MarketDetialsArr.messenger}
      whats={MarketDetialsArr.whats}
      pdf={MarketDetialsArr.pdf}
    />
  );

  const MatDescription = MarketDetialsArr && (
    <MatgerDescription
      description={MarketDetialsArr.description}
      face={MarketDetialsArr.face}
      address={MarketDetialsArr.address}
      phone={MarketDetialsArr.call}
      name={MarketDetialsArr.name}
      call={MarketDetialsArr.call}
    />
  );

  // const options = MarketDetialsArr && {
  //   center: { lat: MarketDetialsArr.lat, lng: MarketDetialsArr.lng },
  //   zoom: 12,
  // };

  const MatMap = MarketDetialsArr && (
    <MatgerLocation lat={MarketDetialsArr.lat} lng={MarketDetialsArr.lng} />
  );

  const MatgerProductsSection = MarketDetialsArr && (
    <MatgerProducts
      MatgerLogo={MarketDetialsArr.matgarImage}
      productsItems={MarketDetialsArr.products}
    />
  );
  return (
    <>
    <NavBar />
    <div className={styles.MatgerPage}>
      <Head>
        <title>{name}</title>
        <meta itemprop="name" content={`${name}`} />
        <meta
          itemprop="description"
          content={`${MarketDetialsArr && MarketDetialsArr.description}`}
        />
        <meta
          itemprop="image"
          content={`${MarketDetialsArr && MarketDetialsArr.images[0]}`}
        />
        <meta
          property="og:url"
          content={`${MarketDetialsArr && MarketDetialsArr.url}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${name}`} />
        <meta
          property="og:description"
          content={`${MarketDetialsArr && MarketDetialsArr.description}`}
        />
        <meta
          property="og:image"
          content={`${MarketDetialsArr && MarketDetialsArr.images[0]}`}
        />
        {MarketDetialsArr && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: `${name}`,
              email: `${MarketDetialsArr.email}`,
              jobTitle: `${MarketDetialsArr.catName}`,
              telephone: `${MarketDetialsArr.call}`,
              url: `${MarketDetialsArr.url}`,
              priceRange: "0 : 1000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "street",
                addressLocality: `${MarketDetialsArr.city}`,
                addressCountry: "EG",
              },
              image: [
                `http://souq.deltawy.com//imag?id=${MarketDetialsArr.images[0]}`,
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: MarketDetialsArr.lat,
                longitude: MarketDetialsArr.lng,
              },
              sameAs: [MarketDetialsArr.face, MarketDetialsArr.url],
            })}
          </script>
        )}
      </Head>
      {MatgerHeader}
      {/* {MarketInfo} */}
      {MatDescription}
      {MatMap}
      {MatgerProductsSection}
    </div>
    <Service />
   <LastofOffersProducts />

    <FooterBar />
    </>
  );
};

export default matgarr;
