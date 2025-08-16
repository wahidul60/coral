import React, { useState } from 'react'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import banner from '../assets/banner.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const Banner = () => {
  let [show, setShow] = useState(false);
  let dispatch = useDispatch()

  let handleClick = () => {
    setShow(!show)
  }

  
  return (
    <section className='relative'>

      <Container>
        <div className='w-full xl:hidden flex justify-end py-3 relative z-10'>
          {
            show ? <RxCross2 onClick={handleClick} /> : <GiHamburgerMenu className='hover:text-white' onClick={handleClick} />
          }

            {
          show &&
          <ul  className='w-full bg-white list-none top-12 left-0 absolute justify-between font-open text-[16px] pt-7 pb-20 '>
            <li> <Link to="jewelry">Jewelry & Accessories</Link></li>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>Art & Collectibles</li>
            <li>Craft Supplies & Tools</li>
          </ul>

        }

        </div>
        
        
        <Image className='sm:pt-10' src={banner} />
      </Container>
      {/* <div className='bg-banner absolute bg-no-repeat bg-bottom-left top-0 left-0 w-1/2 h-full'></div>
      <div className='bg-banner2 absolute bg-no-repeat bg-bottom-right top-0 right-0 w-1/2 h-full'></div> */}
    </section>
  )
}

export default Banner

