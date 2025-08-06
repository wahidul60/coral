import React from 'react'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='relative'>
        <div className='bg-banner absolute bg-no-repeat bg-bottom-left top-0 left-0 w-1/2 h-full'></div>
        <div className='bg-banner2 absolute bg-no-repeat bg-bottom-right top-0 right-0 w-1/2 h-full'></div>
        
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

