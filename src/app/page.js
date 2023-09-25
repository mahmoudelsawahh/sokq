import dynamic from "next/dynamic";
const FooterBar = dynamic(() => import('@/Static/FooterBar/FooterBar'), {
  ssr : false
})

  const Home = dynamic(() => import('@/Static/Home/Home'), {
    ssr : false
  })

   const Service = dynamic(() => import('@/Static/Service/Service'), {
      ssr : false
   })

  const LastofOffersProducts = dynamic(() => import('@/Static/اخر المنتجات/LastofOffersProducts'), {
        ssr : false
   })

export default function App() {

  return (
   <>
    <Home />
   <Service />
   <LastofOffersProducts />
   <FooterBar />

   </>
  )
}
