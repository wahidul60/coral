import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoSearchOutline } from 'react-icons/io5'
import logo from '../assets/logo.png'
import Image from './Image'
import { CgProfile } from 'react-icons/cg'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Slices/breadcumb'


const Navbar = () => {
  let dispatch = useDispatch()
  let card = useSelector((item)=>console.log(item.myCard))
  let handlebreadcumb = (value) => {
    dispatch(increment(value))
  }
  let handleCard =()=> {
    console.log(handleCard)
  }
  return (
    <section>
      <Container>

        <Flex className='justify-between bg-white pt-8 pb-6 border-b border-black50'>
          <div className='1/3'><IoSearchOutline /></div>
          <div className='1/3'> <Link to="home"><Image src={logo} /></Link> </div>
          <div className='1/3'>
            <Flex className='justify-between gap-5'>
              <div className='flex items-center gap-2'>
                <CgProfile />
                <p className='font-open text-sm'>Account</p>
              </div>
              <div className='flex gap-2 relative cursor-pointer hover:scale-[1.09] duration-150' onClick={handleCard}  >
                <FaShoppingBag />
                <p className='font-open text-sm'>Shopping</p>
                <div className='absolute w-[300px] h-auto '>
                    {/* <Image src={}/> */}
                </div>
              </div>
            </Flex>
          </div>
        </Flex>
        <Flex className='w-full list-none justify-between font-open text-[16px] pt-7 pb-20 hidden xl:flex '>
          <li className='hover:scale-[1.06] duration-150'> <Link onClick={() => handlebreadcumb("Jewelry")} to="jewelry">Jewelry & Accessories</Link> </li>
          <li className='hover:scale-[1.06] duration-150'><Link onClick={() => handlebreadcumb("Clothing")} to="clothing">Clothing & Shoes</Link></li>
          <li className='hover:scale-[1.06] duration-150'><Link onClick={() => handlebreadcumb("Home Living")} to="home_living">Home & Living</Link></li>
          <li className='hover:scale-[1.06] duration-150'><Link onClick={() => handlebreadcumb("Wedding")} to="wedding">Wedding & Party</Link></li>
          <li className='hover:scale-[1.06] duration-150'><Link onClick={() => handlebreadcumb("Toys")} to="toys">Toys & Entertainment</Link></li>
          <li className='hover:scale-[1.06] duration-150'><Link onClick={() => handlebreadcumb("Art")} to="art">Art & Collectibles</Link></li>
          <li className='hover:scale-[1.06] duration-150'><Link onClick={() => handlebreadcumb("Craft")} to="craft">Craft Supplies & Tools</Link></li>
        </Flex>

      </Container>
    </section>
  )
}

export default Navbar
