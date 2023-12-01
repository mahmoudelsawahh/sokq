"use client"
import { useEffect, useRef, useState } from "react"
import { redirect, useRouter } from 'next/navigation';
import UserMap from "./UserMap";
import DashboardImages from "./DashboardImages";
import { localUrl } from "/src/lib/baseUrl";
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Paper } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import ImageUploading from "react-images-uploading";
import Image from "next/image";
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 30.9763086,
  lng: 31.1595836
};


const UserDetails = () => {
  const [LogoImageFromUser , setLogoImageFromUser] = useState(null)
  const [BannerImageFromUser , setBannerImageFromUser] = useState(null)
  const [ListImageFromUser , setListImageFromUser] = useState([])
  const [hasBranches , setHasBranches] = useState(null)
   const [barnchId , setBranchId] = useState(null)
	const [ListImages, setListImages] = useState([]);
  const [BannerImages, setBannerImages] = useState([]);
  const [LogoImages, setLogoImages] = useState([]);
  const [Loading , setLoading] = useState(false)
  const maxNumber = 6;

	const router = useRouter()
	if(!window.localStorage.getItem('dalilElmahalla')){
		redirect('/loginPage')
	}
	const [selectedLocation, setSelectedLocation] = useState(center);
	const [GetGovAllData , setGetGovAllData] = useState([]);
	const [GetGovId , seGetGovId] = useState(0);
	const [GetAllCity , setGetAllCity] = useState([]);
	const [GeCityId , setGetCityId] = useState(0)
	const [Cat , setCat] = useState([]);
	const [CatId , setCatId] = useState(0);
	const [SubCat , SetSubCat] = useState([]);
	const ref = useRef()
	const [CopyTags, setCopyTags] = useState("")
	const [CopyCatType, setCopyCatType] = useState("")
	const [UserName, setUserName] = useState("")
	const [Phone, setPhone] = useState("")
	const [Facebook, setFacebook] = useState("")
	const [WhatsApp, setWhatsApp] = useState("")
	const [Instagram, setInstagram] = useState("")
	const [Gmail, setGmail] = useState("")
	const [Website, setWebsite] = useState("")
	const [Telegram, setTelegram] = useState("")
	const [Youtube, setYoutube] = useState("")
	const [Linkedin, setLinkedin] = useState("")
	const [Twitter, setTwitter] = useState("")
	const [Address, setAddress] = useState("")
	const [shortDesc, setshortDesc] = useState("")
	const [Desc, setDesc] = useState("")
	const [tags, setTags] = useState([])
	const [CatType, setCatType] = useState([])
  const [validName , setValidName] = useState(true)
  const [validPhone , setValidPhone] = useState(true)
  const [isEdit , setIsEdit] =  useState(false)
  const [CurrentCatId , setCurrentCatId] = useState(0)
  const sendData = ()=>{
    event.preventDefault()
    if(validPhone , validName){
      setLoading(true)
        fetch(`${localUrl}/rest/test.branch/saveBranch`,{
          method : 'POST',
          body : JSON.stringify(data),
          headers : {
            "Content-Type" : "application/json"
          }
        })
          .then((res) =>{
            res.json(),
            setLoading(false)
          })
    }
}
  
	const onChange = (imageList) => {
		setListImages(imageList);
	  };
	  const onChangeBanner = (imageList) => {
		setBannerImages(imageList);
	  };
	
	  const onChangeLogo = (imageList) => {
		setLogoImages(imageList);
	  };

	const handleMapClick = (event) => {
		setSelectedLocation({
		  lat: event.latLng.lat(),
		  lng: event.latLng.lng()
		});
		
	  };
	
	  const handelClick = ()=>{
		navigator.geolocation.getCurrentPosition((position) => {
				 const { latitude, longitude } = position.coords;
				 setSelectedLocation({
						lat: latitude,
					   lng: longitude
				 });
			   });
	  }

    
	 
    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }
	function removeCatType(index){
        setCatType(tags.filter((el, i) => i !== index))
    }

	useEffect(() => {
		fetch(`${localUrl}/rest/test.branch/getStates`)
		  .then((res) => res.json())
		  .then((data) => {
			setGetGovAllData(data.reverse())
		  })

		  fetch(`${localUrl}/rest/test.branch/getCities`,{
			method : 'POST',
			body : JSON.stringify({"id" : GetGovId}),
		})
		  .then((res) => res.json())
		  .then((data) => {
			return setGetAllCity(data.cities)
		  })

		  fetch(`${localUrl}/rest/test.category/cats`)
		  .then((res) => res.json())
		  .then((data) => {
			setCat(data)
		  })

	  }, [GetGovId])


 useEffect(()=>{
  const data = Cat.filter((item)=>{
    return item.id ==   9 //CatId
    })
    SetSubCat(data)
 },[Cat, CatId])

  
 useEffect(()=>{
  fetch(`${localUrl}/rest/test.branch/prepare`,{
    method : 'POST',
    body : JSON.stringify({"id" : window.localStorage.getItem('dalilElmahalla')}),
    headers : {
      "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
      'Content-Type': 'application/json',
    } 
  })
    .then((res) => res.json())
    .then((data) => {
    return data.hasBranch == 1 ? 
     (
      setIsEdit(true),
      setUserName(data.name),
      setPhone(data.phone),
      setFacebook(data.face),
      setGmail(data.mail),
      setTwitter(data.twitter),
      setAddress(data.address),
      setDesc(data.description),
      setCatType(data.services),
      setLogoImageFromUser(data.logo),
      setBannerImageFromUser(data.cover),
      setListImageFromUser(data.images),
      seGetGovId(data.stateId),
      setGetCityId(data.cityId),
      setCatId(data.catId),
      setHasBranches(data.hasBranch),
      setBranchId(data.branchId),
      setWhatsApp(data.whats),
      setYoutube(data.youtube),
      setWebsite(data.website),
      setTelegram(data.telegram),
      
      setSelectedLocation({
        lat: data.lat,
         lng: data.lang
     })
     )
     : null
    })
 },[])


    const data = {
      "statId": GetGovId,
      "cityId": GeCityId,
      "mainCatId": SubCat.length > 0 ? SubCat[0].id : 0,
      "subCatId": SubCat.length > 0 ? SubCat[0].id : 0,
      "name": UserName,
      "phone": Phone,
      "face": Facebook,
      "whats": WhatsApp,
      "instagram": Instagram,
      "mail": Gmail,
      "webSite": Website,
      "telegram": Telegram,
      "youtube": Youtube,
      "twitter": Twitter,
          "address": Address,
              "shortDescription": shortDesc,
                  "fullDescription": Desc,
                  "userId":  window.localStorage.getItem('dalilElmahalla'),
                      "lang": selectedLocation.lng,
                          "lat": selectedLocation.lat,
                          "logo": LogoImages.length > 0 ?  LogoImages[0].data_url.split(',')[1] :  LogoImageFromUser,
                              "cover": BannerImages.length > 0 ? BannerImages[0].data_url.split(',')[1] : BannerImageFromUser ,
                                  "images":  ListImages.length > 0 &&  ListImages[0].data_url ? [...ListImages.map((item)=> item.data_url.split(',')[1]) , ...ListImageFromUser] : ListImageFromUser,
                                  "services":  CatType,
                                  "tags": tags
     
  } 



        const handelRemove =  (item)=>{
          //  fetch(`${localUrl}/rest/test.branch/deleteImageBranch`,{
          //   method : 'post',
          //   body : JSON.stringify({
          //     "imageId": item,
          //     "brancheId": barnchId
          //   })
          //   ,
          //   headers : {
          //     "Content-Type" : "application/json"
          //   }
          //  })
          if(item.data_url){
            const removeDataImage = ListImages.filter((ele)=> ele.data_url !== item.data_url)
            setListImages(removeDataImage)
          }else{
            const removeDataImage = ListImageFromUser.filter((ele)=> ele !== item)
            setListImageFromUser(removeDataImage)
          }
        }



        useEffect(()=>{
            if(UserName.length > 0 &&!isEdit){
              fetch(`${localUrl}/rest/test.branch/checkName`,{
                method : 'post',
                body : JSON.stringify({
                  "name" : UserName
                })
                ,
                headers : {
                  "Content-Type" : "application/json"
                }
               }).then((res)=> res.json()).then((data)=> setValidName(data))
            }
        },[UserName, isEdit])

        useEffect(()=>{
          if(Phone.length > 0 && !isEdit){
            fetch(`${localUrl}/rest/test.branch/checkMobile`,{
              method : 'post',
              body : JSON.stringify({
                "name" : Phone
              })
              ,
              headers : {
                "Content-Type" : "application/json"
              }
             }).then((res)=> res.json()).then((data)=> setValidPhone(data))
          }
      },[Phone, isEdit])

return (
    <div style={{position : 'relative'}}>  
        {
          Loading ? 
          <div style={{position : 'absolute', background : '#0000008f', width : '100%' , height : '100%' , zIndex : 5}}>
                <div className="" style={{display :'flex' , justifyContent : 'center',
                 alignItems : 'center', height : '100vh', position : 'fixed', width : '100%', zIndex : 15,
                 top : '40%' , left : '50%', transform : 'translate(-50% , -50%)'
                 }}>
                  <div class="text-center">
                    <div class="spinner-border" role="status" style={{color : '#fff' , width : '3rem' , height : '3rem'}}>
                    </div>
                  </div>
                </div>
            </div>
           : 
           null
          }
        <form onSubmit={sendData}>
					<div className="container-xxl">
					<div className="row dashboard-input row-gap-4 pt-5">
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">المحافظة </label>
							<select className="form-select" aria-label="Default select example"  onChange={(event) => seGetGovId(event.target.value)} required>
								{GetGovAllData.map((item)=>{
									return (
											<option value={item.id}  key={item.id} selected={item.id == GetGovId}>{item.name}</option>
											)
								})}
							</select>
					</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">المدينة </label>
							<select className="form-select" aria-label="Default select example" onChange={(e)=> setGetCityId(e.target.value)} required>
							<option value={0} selected={GetAllCity == 0}>اختر المدينه</option>
								{GetAllCity.map((item)=>{
									return (
											<option value={item.id} key={item.id} selected={item.id == GeCityId}>{item.name}</option>
											)
								})}
							</select>
						</div>
						<div className="col-12 col-md-6">
						<label for="exampleFormControlInput1" className="form-label">التصنيف الاساسي </label>
							<select className="form-select" aria-label="Default select example" onChange={event => setCatId(event.target.value)} required>
              <option  value={0}  selected={CatId == 0}>التصنيف الاساسي</option>
									{Cat.map((item)=>{
										return (                                                              //CatId
												<option ref={ref} value={item.id} key={item.id} selected={item.id == 9}>{item.name}</option>
												)
									})}
								</select>
						</div>
						<div className="col-12 col-md-6">
						<label for="exampleFormControlInput1" className="form-label">التصنيف الفرعي  </label>
						<select className="form-select" aria-label="Default select example" onChange={((e)=> setCurrentCatId(e.target.value))} required>
            <option value={0} selected={CurrentCatId == 0}>اختر التصنيف</option>

									{SubCat.length > 0 ? 
										SubCat[0].catList.map((item)=>{
										return (
												<option value={item.id}  key={item.id} selected={item.id == 22}>{item.name}</option>
												)
									}):
									null
									}
								</select>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">اسم النشاط  </label>
							<input type="text" className="form-control" placeholder={" برجاء ادخال اسم النشاط "} value={UserName} onChange={(e)=> setUserName(e.target.value)} required
							/>
              {
                validName ? null : 'اكتب اسم اخر'
              }
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">رقم الهاتف </label>
							<input type="tel" className="form-control " placeholder={" برجاء ادخال رقم الهاتف  "} value={Phone} onChange={(e)=> setPhone(e.target.value)} 	
							/>
               {
                  validPhone ? null : 'اكتب رقم اخر'
              }
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">رابط صفحة الفيس بوك  </label>
							<input type="url" className="form-control" style={{direction : 'ltr'}} placeholder={"ادخل رابط صفحة الفيس بوك"} value={Facebook} onChange={(e)=> setFacebook(e.target.value)}	
							/>
						</div>
					
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">رقم الواتساب</label>
							<input type="tel" className="form-control"  placeholder={" برجاء ارسال رقم الواتساب"} value={WhatsApp} onChange={(e)=> setWhatsApp(e.target.value)}	 
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">رابط صفحه الانستجرام</label>
							<input type="url" className="form-control" style={{direction : 'ltr'}} placeholder={" برجاء ادخال رابط  الانستجرام"} value={Instagram} onChange={(e)=> setInstagram(e.target.value)}	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label"> البريد الالكتروني</label>
							<input type="email" className="form-control" style={{direction : 'ltr'}} placeholder={" برجاء ادخال البريد الالكتروني "} value={Gmail} onChange={(e)=> setGmail(e.target.value)} 	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label"> المواقع الالكتروني </label>
							<input type="url" className="form-control" style={{direction : 'ltr'}} placeholder={"   رابط المواقع  "} value={Website} onChange={(e)=> setWebsite(e.target.value)}	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">  رقم تيليجرام </label>
							<input type="tel" className="form-control"  placeholder={" برجاء ارسال رقم التيليجرام"} value={Telegram} onChange={(e)=> setTelegram(e.target.value)}	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">   رابط فيديو يوتيوب  </label>
							<input type="url" className="form-control" style={{direction : 'ltr'}} placeholder={"رابط الفيديو  "} value={Youtube}   onChange={(e)=> setYoutube(e.target.value)}	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">  حساب لينكد ان   </label>
							<input type="text" className="form-control" style={{direction : 'ltr'}} placeholder={"رابط حساب لينكد ان"} value={Linkedin} onChange={(e)=> setLinkedin(e.target.value)}	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">   حساب تويتر    </label>
							<input type="text" className="form-control" style={{direction : 'ltr'}} placeholder={"رابط حساب تويتر  "} value={Twitter} onChange={(e)=> setTwitter(e.target.value)}	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">عنوان النشاط</label>
							<input type="text" className="form-control" placeholder={" برجاء ادخال عنوان النشاط"} value={Address}  onChange={(e)=> setAddress(e.target.value)} required
							/>
						</div>
						<div className="col-12">
							<label for="exampleFormControlInput1" className="form-label">وصف النشاط</label> 
							<textarea className="form-control p-3" id="exampleFormControlTextarea1" rows={7}
							 placeholder={"وصف النشاط بشكل تفصيلي"}  onChange={(e)=> setDesc(e.target.value)}  value={Desc}
							></textarea>

						</div>
						<div className="col-12 col-md-12">
						<div className="tags-layout">
							<div className="tags-input-container">
								{ tags.map((tag, index) => (
									<div className="tag-item" key={index}>
										<span className="text">{tag}</span>
										<span className="close" onClick={() => removeTag(index)}>&times;</span>
									</div>
								)) }
								<input  onChange={(e)=> setCopyTags(e.target.value)} type="text" className="tags-input" placeholder=" برجاء ادخال كلمات مفتاحيه لنشاطك" value={CopyTags} />
								<button className="btn" 
								style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff', width : '100%', padding : '10px 0px'}}
								onClick={(e)=> 
								{
                  e.preventDefault(),
									setTags([...tags , CopyTags]),
								setCopyTags("")
								}
								}>اضافه كلمه مفتاحيه  </button>
							</div>
					</div>
				
						</div>
						<div className="col-12 col-md-12">
							<div className="tags-layout">
								<div className="tags-input-container">
									{ CatType.map((tag, index) => (
										<div className="tag-item" key={index}>
											<span className="text">{tag}</span>
											<span className="close" onClick={() => removeCatType(index)}>&times;</span>
										</div>
									)) }
									<input onChange={(e)=> setCopyCatType(e.target.value)} value={CopyCatType} type="text" className="form-control tags-input" placeholder={"اضافه خدمه "}/>

									<button className="btn" 
									style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff', width : '100%', padding : '10px 0px'}}
									onClick={(e)=> 
									{
                    e.preventDefault(),
										setCatType([...CatType , CopyCatType]),
									setCopyCatType("")
									}
									}>  اضافه خدمه   </button>
								</div>
							</div>
						</div>
					</div>
					</div>
					<div className="breadcrumb-bar my-5">
				<div className="container-xxl">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<h2 className="breadcrumb-title"> عنوان النشاط </h2>
						</div>
					</div>
				</div>
     		 </div>
			  <div className="container-xxl">	    
				<LoadScript 
				googleMapsApiKey={'AIzaSyDJ8uTFj6943jB6JmStfHma3--E0eqTk5w'}
				>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={selectedLocation}
					zoom={18}
					onClick={handleMapClick}
          
				>
					<Marker position={selectedLocation} />
				</GoogleMap>
				</LoadScript>
				<button type="button" className="btn  w-100 p-2" onClick={handelClick}
				style={{backgroundColor : '#055c97', color : '#fff', fontWeight : 700 , fontSize : '18px'}}>تحديد موقعي على الخريطة  </button>
    		  </div>
			  <div className="breadcrumb-bar my-5">
				<div className="container-xxl">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<h2 className="breadcrumb-title"> صور النشاط </h2>
						</div>
					</div>
				</div>
     		 </div>
			 <div className="container-xxl">	




			 <>
      <div className="row row-gap-5">
        <div className="col-md-4 col-12">
          <ImageUploading
            value={LogoImages}
            onChange={onChangeLogo}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, dragProps }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                   {
                    LogoImageFromUser && LogoImages.length == 0?
                    <div  className="image-item" style={{position : 'relative' , width : '100%', height : '190px'}}>
                          <Image
                          fill
                            src={`http://dalil.deltawy.com/images?id=${LogoImageFromUser}&type=tab`}
                            alt="deltawy"
                            style={{
                              margin: "5px",
                              border: "1px solid #eee",
                              padding: "10px ",
                            }}
                          />
                          <div className="image-item__btn-wrapper"></div>
                        </div>
                     : 

                     LogoImages.length > 0 ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item" style={{position : 'relative' , width : '100%', height : '190px'}}>
                          <Image
                          fill
                            src={image["data_url"]}
                            alt="حذف"
                            style={{
                              margin: "5px",
                              border: "1px solid #eee",
                              padding: "10px ",
                            }}
                          />
                          <div className="image-item__btn-wrapper"></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div 
                      style={{
                        backgroundColor: "#f5f5f5",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <FaCloudUploadAlt
                          style={{ fontSize: "50px", color: "#055c97" }}
                        />
                        <h1
                          style={{
                            fontSize: "25px",
                            color: "#055c97",
                            fontWeight: 700,
                          }}
                        >
                          تحميل صوره
                        </h1>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#333",
                            fontWeight: 500,
                          }}
                        >
                          يجب ان تكون عاليه الدقه وحجم منحفض
                        </p>
                      </div>
                      <div></div>
                    </div>
                  )
                   }
                  <input
                    className="btn"
                    onClick={()=> onImageUpload}
                    {...dragProps}
                    style={{
                      backgroundColor: "#055c97",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "16px",
                      width: "100%",
                      marginTop: "15px",
                    }}
					value=" صور الغلاف" readOnly required
                  />
                </Paper>
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="col-md-4 col-12">
          <ImageUploading
            value={BannerImages}
            onChange={onChangeBanner}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, dragProps }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  {BannerImageFromUser &&  BannerImages.length == 0  ? 
                    <div  className="image-item" style={{position : 'relative' , width : '100%', height : '190px'}}>
                          <Image
                          fill
                          src={`https://dalil.deltawy.com/images?id=${BannerImageFromUser}&type=tab`}
                            alt="حذف"
                            style={{
                              margin: "5px",
                              border: "1px solid #eee",
                              padding: "10px ",
                            }}
                          />
                          <div className="image-item__btn-wrapper"></div>
                        </div>
                  : 
                  
                  BannerImages.length > 0 ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item" style={{position : 'relative' , width : '100%', height : '190px'}}>
                          <Image
                          fill
                            src={image["data_url"]}
                            alt="حذف"
                            style={{
                              margin: "5px",
                              border: "1px solid #eee",
                              padding: "10px ",
                            }}
                          />
                          <div className="image-item__btn-wrapper"></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#f5f5f5",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <FaCloudUploadAlt
                          style={{ fontSize: "50px", color: "#055c97" }}
                        />
                        <h1
                          style={{
                            fontSize: "25px",
                            color: "#055c97",
                            fontWeight: 700,
                          }}
                        >
                          تحميل صوره
                        </h1>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#333",
                            fontWeight: 500,
                          }}
                        >
                          يجب ان تكون عاليه الدقه وحجم منحفض
                        </p>
                      </div>
                      <div></div>
                    </div>
                  )
                  }
                  <input
                  required
                    className="btn"
                    onClick={()=> onImageUpload}
                    {...dragProps}
                    style={{
                      backgroundColor: "#055c97",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "16px",
                      width: "100%",
                      marginTop: "15px",
                    }}
                    value={"صور اللوجو"} readOnly
                  />
                </Paper>
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="col-md-4 col-12">
          <ImageUploading
          
            multiple
            value={ListImages}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, dragProps }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  {...dragProps}
                >
                 
                  { ListImages.length > 0 || ListImageFromUser.length?
                     <>
                      {
                        ListImageFromUser.map((item , id)=>{
                      return (
                        <div key={id} className="image-item" style={{position : 'relative' , width : '100%', height : '190px'}}>
                          <Image
                          fill
                          src={`https://dalil.deltawy.com/images?id=${item}&type=bran`}
                            alt="deltawy"
                            style={{
                              margin: "5px",
                              border: "1px solid #eee",
                              padding: "10px ",
                            }}
                          />
                          <div className="image-item__btn-wrapper">
                            <div className="btn btn-danger" onClick={()=> handelRemove(item)} style={{position : 'absolute'}}>حذف</div>
                          </div>
                        </div>
                      )
                    })
                      
                      }
                      {imageList.map((item, index) => (
                        <div key={index} className="image-item" style={{position : 'relative' , width : '100%', height : '190px'}}>
                          <Image
                          fill
                            src={item["data_url"]}
                            alt="حذف"
                            style={{
                              margin: "5px",
                              border: "1px solid #eee",
                              padding: "10px ",
                            }}
                          />
                          <div className="image-item__btn-wrapper">
                          <div className="btn btn-danger" onClick={()=> handelRemove(item)} style={{position : 'absolute'}}>حذف</div>
                          </div>
                        </div>
                      ))}
                     </>
                    
                    
                     
                  
                   :
                   ListImages.length > 9999999 ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        minHeight: "200px",
                      }}
                    >
                    
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item" style={{position : 'relative' , width : '100%', height : '190px'}}>
                          <Image
                          fill
                            src={image["data_url"]}
                            alt="حذف"
                            style={{
                              margin: "5px",
                              border: "1px solid #eee",
                              padding: "10px ",
                            }}
                          />
                          <div className="image-item__btn-wrapper"></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#f5f5f5",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <FaCloudUploadAlt
                          style={{ fontSize: "50px", color: "#055c97" }}
                        />
                        <h1
                          style={{
                            fontSize: "25px",
                            color: "#055c97",
                            fontWeight: 700,
                          }}
                        >
                          تحميل صوره
                        </h1>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#333",
                            fontWeight: 500,
                          }}
                        >
                          يجب ان تكون عاليه الدقه وحجم منحفض
                        </p>
                      </div>
                      <div></div>
                    </div>
                  )
                  
                  }

                  <input
                    className="btn"
                    onClick={onImageUpload}

                    {...dragProps}
                    style={{
                      backgroundColor: "#055c97",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "16px",
                      width: "100%",
                      marginTop: "15px",
                    }}
                    value={"صور المكان"} readOnly required
                  >
                  </input>
                </Paper>
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </>
			  </div>

			  <div className="container-xxl pb-5">	    
			     <div style={{marginTop : '50px'}}>
					 <input 
					 type="submit" className="btn" style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff', width : '100%', padding : '10px 0px'}}
					 />
			  </div>
        </div>

			  
		   		</form>
				
				
    </div>
  )
}

export default UserDetails



