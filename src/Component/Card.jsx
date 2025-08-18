import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { FiHeart } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { FaBagShopping } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { addCardSlice } from '../Slices/addToCard'

const Card = ({ src, productName, category, price }) => {
    let dispatch = useDispatch()
    let handleClick = () => {
        dispatch(addCardSlice(
            {
                title: productName,
                category: category,
                price: price,
                quantity : 1,
                image : src,
            }
        ))
    }
    return (
        <div className='w-[296px] h-auto border border-[#e9e9e9] object-cover relative group'>
            <Flex className='w-[296px] bg-[#1E2832] absolute items-center bottom-0 opacity-0 duration-300 group-hover:opacity-100 group-hover:bottom-23'>
                <Flex className='text-white p-3 gap-5 w-1/2'>
                    <FiHeart />
                    <IoSearchOutline />
                </Flex>
                <Flex className='gap-3 text-white w-1/2 justify-end items-center p-3'>
                    <FaBagShopping />
                    <li onClick={handleClick} className='list-none cursor-pointer'>shop now</li>
                </Flex>
            </Flex>
            <Image src={src} className='pb-5 w-' />
            <p className='pb-4 font-open font-semibold text-base px-1'>{productName}</p>
            <Flex className='justify-between px-1 pb-1'>
                <p className='font-open text-base text-[#676767]'>{category}</p>
                <p className='font-open font-semibold text-base'>{price}</p>
            </Flex>
        </div>
    )
}

export default Card
