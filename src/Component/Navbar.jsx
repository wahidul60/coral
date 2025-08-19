import React, { useState } from 'react'
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
import { RxCross2 } from 'react-icons/rx'


const Navbar = () => {
  let dispatch = useDispatch()
  let [show, setShow] = useState(false)

  let card = useSelector((item) => item.myCard.value)
  let handlebreadcumb = (value) => {
    dispatch(increment(value))
  }
  let handleCard = () => {
    setShow(!show)
  }

  let handleRemove = () => {
    console.log("Clicked")
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

              <div className='relative ' onClick={handleCard}  >
                <Flex className='hover:scale-[1.09] duration-150 gap-2 cursor-pointer'>
                  <FaShoppingBag />
                  <p className='font-open text-sm'>Shopping</p>
                </Flex>
                <div className='absolute w-[300px] h-auto  top-8 bg-[#f5f4f4] z-11 ' onClick={(e) => e.stopPropagation()}>

                
                  {show &&
                  <>
                    {
                      card.length > 0 ?
                    <>
                      {
                      card.map(item => (
                        
                        <>
                          <Flex className='gap-3 items-center border border-[#e3e3e3]' >
                            <Image className='w-[100px] h-auto m-2 border border-[#dfdfdf]' src={item.image} />
                            <div className='m-2'>
                              <h1 className='font-semibold'>{item.title.substring(0, 15)}...</h1>
                              <h1>{item.price}</h1>
                              <h1>quantity:{item.quantity}</h1>
                            </div>
                            <RxCross2 onClick={handleRemove} className='cursor-pointer hover:scale-[1.09] duration-150' />
                          </Flex>
                        </>
                      ))
                    }
                    </> : <p className='text-center my-10'>Card is empty!</p>
                    }
                  </>
                  }


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
