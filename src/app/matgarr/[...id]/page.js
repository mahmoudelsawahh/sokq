import dynamic from 'next/dynamic'
import generateProductRss from '/src/lib/generateProductRss'
 
const MatagrComponent = dynamic(() => import('/src/app/component/Matagr_Component/MatagrComponent'), {
  ssr : false
})

export const metadata = {
  title: 'سوق المحله الكبري',
}


const page = async({params}) => {
  metadata.title = params.id.length > 1 ? decodeURIComponent(params.id[1]) :  'سوق المحله الكبري'
  await generateProductRss(params.id[0])
  return (
    <>
       <MatagrComponent params={params}/>
    </>
  )
}

export default page