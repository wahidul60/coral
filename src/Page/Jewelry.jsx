import React from 'react'
import Container from '../Component/Container'
import comming_soon from '../assets/comming_soon.jpg'
import Image from '../Component/Image'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Component/Flex'
import { FaAngleRight } from 'react-icons/fa'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { increment } from '../Slices/breadcumb'

const Jewelry = () => {
  let previousValue = useSelector((state) => state.myBreadcumb.previousValue)
  let currentValue = useSelector((state) => state.myBreadcumb.currentValue)
  let dispatch = useDispatch()
  const navigate = useNavigate();
  let link = previousValue ? previousValue.toLowerCase() : "/"

  let handleBreadcumb = (value) => {
    dispatch(increment(value))
  }


  return (
    <Container>
      <h1 className='font-open text-[30px] font-bold'>Jewelry & Accessories</h1>
      <Flex className='items-center'>
        <p className='font-semibold'>
          <Link onClick={() => handleBreadcumb(!previousValue || previousValue == currentValue ? "Home" : previousValue)} to={`/${previousValue ? previousValue.toLowerCase() : "home"}`}>
            {!previousValue || previousValue == currentValue ? "Home" : previousValue}
          </Link>
        </p>

        <FaAngleRight />

        <p className='font-semibold'>
          {currentValue || "Jewelry"}
        </p>

      </Flex>
      <Image src={comming_soon} className=' w-full py-5' />
    </Container>
  )
}

export default Jewelry
