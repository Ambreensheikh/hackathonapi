"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Product } from '../../types/products'
import { client } from '@/sanity/lib/client'
import { allProducts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

const FeaturedProducts=()=> {
  const [product,setProduct]= useState<Product[]>([])
  useEffect(()=>{
    async function fetchProduct(){
    const fetchProduct:Product[]= await client.fetch(allProducts)
    setProduct(fetchProduct)
    
    }
    fetchProduct()
  },[])

  return (
    
    <div className='flex flex-col'>
        <h1 className='flex items-center justify-center line-height-[50px] text-[42px] font-bold text-[#151875]'>Featured Products</h1>
      {product.map((product)=>{
        return(
          <div key={product._id} className='flex flex-col items-center justify-center'>
            {product.image && ( <Image 
            src={urlFor (product.image).url()} alt={"image"} width={200} height={200} />)}
          
            <h1 className='text-[#151875] font-bold text-[24px]'>{product.name}</h1>
            <p className='text-[#151875] font-normal text-[18px]'>{product.description}</p>
            <p className='text-[#151875] font-bold text-[24px]'>${product.price}</p>

          </div>
        
        )
      }
     
      )}
   </div>
  )}



export default FeaturedProducts 