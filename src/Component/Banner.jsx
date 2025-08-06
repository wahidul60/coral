import React from 'react'
import Flex from './Flex'
import banner from '../assets/banner.png'
import Image from './Image'
import Container from './Container'

const Banner = () => {
  return (
    <section className='relative'>
        <div className='bg-banner absolute bg-no-repeat bg-bottom-left top-0 left-0 w-1/2 h-full'></div>
        <div className='bg-banner absolute bg-no-repeat bg-bottom-right top-0 right-0 w-1/2 h-full'></div>
        
        <Container>
            <Flex className='w-full list-none justify-between font-open text-[16px] pt-7 pb-20'>          
            <li>Jewelry & Accessories</li>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>Art & Collectibles</li>
            <li>Craft Supplies & Tools</li>        
        </Flex>
        <Image src={banner}/>
        </Container>
    </section>
  )
}

export default Banner

