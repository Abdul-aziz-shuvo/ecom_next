"use client"
import productDetails from '@/app/lib/productDetails';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";

export default function page({props}) {
    let [info,setInfo] = useState()
    const params= useParams()
    const detailsMethod =  async (id) => {
        let {data} = await productDetails(id)
        console.log(data);
        setInfo(data)
    }
    const viewPicture = (event) => {
      let img  = document.getElementsByClassName('details_main_img')
      event.target.style.border = '1px solid gray'
      img[0].src = event.target.src
     
    }
    useEffect(()=> {
      detailsMethod(params.id)
    },[])
    useEffect(()=> {
      
    },[info])
  return <div className='flex container mx-auto my-32'>
    <div className='img_column'>
        <div className='border' >
           <img  className='details_main_img' src="https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc" alt="" width={800} height={900}/>
        </div>
        <div className='slider_img flex justify-between my-2 ' style={{width:800,overflowX:'scroll'}}>
            <div onClick={() => viewPicture(event)}>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>

            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>

            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>

            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>
            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>
            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>
            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>
            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>
            <div>
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" width={100} height={100}/>
            </div>
        </div>
    </div>
    <div className='product_details mx-10 flex flex-col'>
        <p className='text-4xl mb-3 font-bold'>{info?.name} </p>
        <p className='my-3'>****</p>
        <p className='text-xl my-3'>{info?.price} </p>
        <p className='my-3'>{info?.description}</p>
    </div>
  </div>;
}
