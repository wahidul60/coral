import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import { AiFillLinkedin, AiOutlineVerticalAlignTop } from 'react-icons/ai'
import icons_payment from '../assets/icons_payment 1.png'


const Footer = () => {
  return (
    <section className='pt-[140px]'>
      <Container>
        <Flex className='justify-between pb-[90px]'>
          <div>
            <Image src={logo} className='pb-8' />
            <p className='font-open text-[#1E2832] text-[16px] pb-[32px]'>desktop</p>
            <Flex className='gap-8'>
              <FaFacebookF />
              <FaTwitter />
              <AiFillLinkedin />
              <FaInstagram />
            </Flex>
          </div>
          <div>
            <h1 className='font-semibold pb-5'>CATALOG</h1>
            <ul className='style-none flex flex-col gap-3'>
              <li>Necklaces</li>
              <li>hoodies</li>
              <li>Jewelry Box</li>
              <li>t-shirt</li>
              <li>jacket</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold pb-5'>ABOUT US</h1>
            <ul className='style-none flex flex-col gap-3'>
              <li>Our Producers</li>
              <li>Sitemap</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold pb-5'>CUSTOMER SERVICES</h1>
            <ul className='style-none flex flex-col gap-3'>
              <li>Contact Us</li>
              <li>Track Your Order</li>
              <li>Product Care & Repair</li>
              <li>Book an Appointment</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
        </Flex>
      </Container>
      <div className='bg-[#1E2832] w-auto h-[52px] flex items-center justify-center'>
        <Container>
          <Flex className='justify-between items-center'>
            <p className='text-white'>© 2022 Coral , Inc.</p>
            <Image src={icons_payment} />
            <button className='flex justify-center items-center text-white'>Scroll to top <AiOutlineVerticalAlignTop className='pl-2 text-[25px]'/></button>
          </Flex>
        </Container>
      </div>
    </section>
  )
}

export default Footer
