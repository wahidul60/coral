import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoSearchOutline } from 'react-icons/io5'
import logo from '../assets/logo.png'
import Image from './Image'
import { CgProfile } from 'react-icons/cg'
import { FaShoppingBag } from 'react-icons/fa'
import banner from '../assets/banner.png'

const Navbar = () => {
  return (
    <section>
      <Container>
        <Flex className='justify-between bg-white pt-8 pb-6 border-b border-black50'>
          <div className='1/3'><IoSearchOutline /></div>
          <div className='1/3'><Image src={logo}/></div>
          <div className='1/3'>
            <Flex className='justify-between gap-5'>
              <div className='flex items-center gap-2'>
                <CgProfile />
                <p className='font-open text-sm'>Account</p>
              </div>
              <div className='flex gap-2'>
                <FaShoppingBag />
                <p className='font-open text-sm'>Shopping</p>
              </div>
            </Flex>
          </div>
        </Flex>
        
      </Container>
    </section>
  )
}

export default Navbar
