"use client"
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react'
import { MdLocationOn} from "react-icons/md";
import ImageGallery from "react-image-gallery";
import { ImEye } from "react-icons/im";
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    LinkedinShareButton,
    LinkedinIcon,
    ViberIcon
  } from 'next-share'
import Image from 'next/image';
import {FaFacebookMessenger, FaWhatsapp , FaPhone} from "react-icons/fa";
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { AiOutlinePhone } from 'react-icons/ai';
import MatagrLocation from "./MatagrLocation";
import styles from "/src/app/page.module.css"

const MatgarContent = ({MarketDetialsArr}) => {
   
  return (
    <div className="container">
       <div>

      {MarketDetialsArr ? 
     <div style={{minHeight : '100vh', position : 'relative'}}>
       {screen.width < 767 ? 
         null
        :
        <div style={{position : 'relative', height : '400px', marginBottom : '50px', display : 'flex', justifyContent : 'center'}} className="responsive-Layout">
      <Image src={`https://souq.deltawy.com/imag?id=${MarketDetialsArr.coverImage}`} alt={MarketDetialsArr.name} width={700} height={400} priority={true} />
      
       </div>
        } 


        <div className="d-flex d-md-none" style={{position : 'fixed', left : 0 , overflow : 'hidden',bottom : 0 , justifyContent : 'center', alignContent : 'center', width : '100%', zIndex : 555}}>
         <div style={{background : '#0084ff', width : '100%', textAlign : 'center', padding : '5px 0px'}}>
          <FaFacebookMessenger fontSize={30} style={{color : '#fff'}} onClick={()=> router.push(MarketDetialsArr.face.replace('https://www.facebook.com', 'https://www.messenger.com/t'))}/>
         </div>
          {
            MarketDetialsArr.whats > 2 ? 
            <div style={{background : '#25d366', width : '100%', textAlign : 'center', padding : '6px 0px', cursor : 'pointer'}} onClick={()=> router.push(`${MarketDetialsArr.whats}`)}>
        <FaWhatsapp fontSize={30} style={{color : '#fff'}}/>
        </div>
            : 
            null
          }
        <div style={{background : '#379d00', width : '100%', textAlign : 'center', padding : '6px 0px', cursor : 'pointer'}}>
         <Link href={`tel:${MarketDetialsArr.phone}`}>
         <FaPhone fontSize={28} style={{color : '#fff'}}/>
         </Link>
        </div>
    </div>    
    

    <div style={{gap : '20px', padding : '0px 0px', paddingBottom : '50px' }} className="d-flex flex-md-row flex-column align-items-center align-items-md-center">
              <LazyLoad height={"100%"} once>
              <div style={{boxShadow : '5px 5px 12px rgba(0,0,0,.15)', border : '5px solid #fff', width : '140px', height : '140px', borderRadius : '50%', overflow : 'hidden'}}>
              <Image src={`https://souq.deltawy.com/imag?id=${MarketDetialsArr.matgarImage}`} alt={MarketDetialsArr.name}
                width={140}
                height={140}
                style={{borderRadius : '50%'}}
                loading="lazy"
              />
              </div>
              </LazyLoad>
                <div  className="text-md-end ">
                  <h1 style={{fontSize : '28px', color : '#000', fontWeight : 'bold', textAlign : 'center', margin: '15px 0px'}}>{MarketDetialsArr.name}</h1>                            

                   <div style={{padding : '15px 0px'}}>
                   <Link href={`https://www.google.com/maps/search/location/@${MarketDetialsArr.lat},${MarketDetialsArr.lng},12z?entry=ttu`} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                   <MdLocationOn style={{fontSize : '20px'}}/>  {MarketDetialsArr.address}
                  </Link>
                   </div>
         
                   {MarketDetialsArr.url.length > 0 ? null
                   :
                   <div style={{padding : '15px 0px'}}>
                   <Link href={MarketDetialsArr.url} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                  <AiOutlineGlobal style={{fontSize : '25px'}}/> {MarketDetialsArr.url}
                  </Link>
                   </div>
                    }
                   
                   {
                    MarketDetialsArr.whats.length > 2 ? 
                    <div style={{padding : '15px 0px'}}>
                     <Link href={MarketDetialsArr.whats} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                    <FaWhatsapp style={{fontSize : '25px'}}/> {MarketDetialsArr.phone}
                    </Link>
                     </div>
                    : null
                   }

                     <div style={{padding : '15px 0px'}}>
                     <Link href={`tel:${MarketDetialsArr.phone}`} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                    <AiOutlinePhone style={{fontSize : '25px'}}/> {MarketDetialsArr.phone}
                    </Link>
                     </div>

                   {screen.width < 767 ? 
                    <div style={{padding : '0px 20px'}}  className={styles.Views_section}>
                <h1 style={{fontSize : '28px'}}>عدد المشاهدات</h1>
                <ImEye />
                {/* <p>{MarketDetialsArr.views}</p> */}
                <p>5500</p>

              </div>

                   :
                   null
                   }

                    <div style={{marginLeft : '5px', textAlign : 'center', padding : '20px 0px' , flexWrap : 'wrap'}} className="d-flex justify-content-md-center justify-content-center">
                      <FacebookShareButton
                        url={`${MarketDetialsArr.url}`}
                        title={`${MarketDetialsArr.name}`}
                      >
                        <FacebookIcon size={45} style={{margin : '0px 10px'}} round />
                      </FacebookShareButton>
                      
                      <TwitterShareButton
                        url={`${MarketDetialsArr.url}`}
                        title={`${MarketDetialsArr.name}`}
                        hashtag={`${MarketDetialsArr.name}`}
                      >
                        <TwitterIcon size={45} style={{margin : '0px 10px'}} round />
                      </TwitterShareButton>

                      <WhatsappShareButton
                        url={`${MarketDetialsArr.url}`}
                        title={`${MarketDetialsArr.name}`}
                        hashtag={`${MarketDetialsArr.name}`}
                      >
                        <WhatsappIcon size={45} style={{margin : '0px 10px'}} round />
                      </WhatsappShareButton>

                      <TelegramShareButton
                        url={`${MarketDetialsArr.url}`}
                        title={`${MarketDetialsArr.name}`}
                        hashtag={`${MarketDetialsArr.name}`}
                      >
                        <TelegramIcon size={45} style={{margin : '0px 10px'}} round />
                      </TelegramShareButton>

                      <LinkedinShareButton
                        url={`${MarketDetialsArr.url}`}
                        title={`${MarketDetialsArr.name}`}
                        hashtag={`${MarketDetialsArr.name}`}
                      >
                        <LinkedinIcon size={45} style={{margin : '0px 10px'}} round />
                      </LinkedinShareButton>

                        {/* <Link href="/rss.xml">
                      <Image src={RssImage} alt="rss-image" width={45} height={45}/>
                      </Link> */}
                      {/* <Link href="/page/sitemap.xml">
                      <Image src={SitMapIcon} alt="rss-image" width={45} height={45} style={{margin : '0px 10px'}}/>
                      </Link> */}
                    </div>
          
                  <div>
                </div>
                </div>
                
        </div>


        <div style={{color : '#fff', marginBottom : '50px'}}>
             <div className="card text-center">
                  <div className="card-body">
                    <h1 className="card-title" style={{fontSize : '30px'}}>{MarketDetialsArr.name}</h1>
                    <p className="card-text" style={{lineHeight : '50px', direction : 'ltr'}}>{MarketDetialsArr.description}</p>
                  </div>
            </div>
         </div>




         {/* <div className="row" style={{marginBottom : '50px'}}>
        <div className="col-12 col-md-8">
        <LazyLoad height={"100%"} once>
                <>
            {
                MarketDetialsArr.images.length > 0 ?
                <LazyLoad height={"100%"} once>
                    <ImageGallery showNav={false} showFullscreenButton={false} showPlayButton={false} items={
                        MarketDetialsArr.images.map((item)=>{
                            return (
                                {
                                    original: `https://souq.deltawy.com/imag?id=${item}`,
                                    thumbnail: `https://souq.deltawy.com/imag?id=${item}`,
                            }
                            )
                        })
                    } isRTL={true} lazyLoad={true}/>
                </LazyLoad>
                : null 
            }
            </>
         </LazyLoad>
        <LazyLoad height={"100%"} once>
           {
            MarketDetialsArr.services.length > 0 ?
            <div className={styles.servises} >
            <h1 style={{fontSize : '28px'}}>الخدمات المتاحة</h1>
             <ul style={{marginRight : '20px'}}>
              {MarketDetialsArr.services.map((item , id)=>{
                return (
                  <li key={id} style={{fontSize : '20px', padding : '10px 0px'}}>{item.name}</li>
                )
              })}

             </ul>
          </div>
             : null
           }
         
          
         
         
        </LazyLoad>
      
        </div>
        <div className="col-12 col-md-4">
        <LazyLoad height={"100%"} once>
              <div >
                <h2 className="text-center" >تابعنا علي صفحتنا </h2>
                  <LazyLoad height={"100%"} once>
                  <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=${MarketDetialsArr.face}%2Ffacebook&tabs=timeline&width=300&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  style={{ width: "300px", height: "500px" }}
                  scrolling="no"
                  frameBorderr="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook"
                  loading="lazy"
                />
                  </LazyLoad>
              </div>
              {screen.width > 767 ? 
                    <div style={{padding : '0px 20px'}}>
                <h1 style={{fontSize : '28px'}}>عدد المشاهدات</h1>
                <ImEye />
                <p>5500</p>
              </div>

                   :
                   null
                   }
            </LazyLoad>
        </div>


       </div> */}

     </div>
     : 
     <div style={{height : '100vh'}}></div>
     } 
  </div>
    </div>
  )
}

export default MatgarContent
