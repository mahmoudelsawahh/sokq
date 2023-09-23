import { Providers } from '@/store/provider'
import './globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '@/Static/Fotter/Fotter';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ 
  subsets: ['latin'] ,
  display : 'swap',
  preload : true
})

export const metadata = {
  title : 'سوق المحلة',
  description : 'سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Providers>
          {children}
      </Providers>
       <footer>
         <Footer/>
       </footer>
      </body>
    </html>
  )
}