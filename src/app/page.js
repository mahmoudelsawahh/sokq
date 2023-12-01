import dynamic from "next/dynamic";
// const FooterBar = dynamic(() => import('/src/Static/FooterBar/FooterBar'), {
//   ssr : false
// })

  const Home = dynamic(() => import('/src/Static/Home/Home'), {
    ssr : false
  })

  //  const Service = dynamic(() => import('/src/Static/Service/Service'), {
  //     ssr : false
  //  })

  // const LastofOffersProducts = dynamic(() => import('/src/Static/اخر المنتجات/LastofOffersProducts'), {
  //       ssr : false
  //  })

export default function App() {

  return (
   <>
    <Home />
   {/* <Service />
   <LastofOffersProducts />
   <FooterBar /> */}

   </>
  )
}
