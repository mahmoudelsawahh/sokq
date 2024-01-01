"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
  const [consoleLogs, setConsoleLogs] = useState([]);

  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      setConsoleLogs((prevLogs) => [...prevLogs, args]);
      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  console.log(consoleLogs)
  return (
   <>
    <Home />
   {/* <Service />
   <LastofOffersProducts />
   <FooterBar /> */}

   </>
  )
}
