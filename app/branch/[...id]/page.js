// import dynamic from 'next/dynamic'
 
// const MatagrComponent = dynamic(() => import('@/app/component/Matagr_Component/MatagrComponent'), {
//   ssr : false
// })

// const page = () => {
//   return (
//     <>
//        <MatagrComponent/>
//     </>
//   )
// }

// export default page


import Test from '@/app/copmonent/Test'
import React from 'react'

const page = () => {
  return (
    <div>
        <Test/>
    </div>
  )
}

export default page