import React from 'react'
import Heading from '../Component/Heading'
import cardImage1 from '../assets/cardImage1.png'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Card from '../Component/Card'

const BestSeller = () => {
    return (
        <section>
            <Container>
                <Heading text='Best sellers' className='pb-[35px] text-center' />
                <Flex className='w-full pb-[35px]'>
                    <ul className='flex w-1/2 gap-10'>
                        <li className='text-base font-open text-black font-bold '>All Products</li>
                        <li className='text-base font-open text-[#676767] font-normal '>T-shirt</li>
                        <li className='text-base font-open text-[#676767] font-normal '>Hoodies</li>
                        <li className='text-base font-open text-[#676767] font-normal '>Jacket</li>
                    </ul>
                    <div className='w-1/2 flex justify-end'>
                        <button className='w-[92px] h-[32px] bg-black text-white flex justify-center items-center gap-2'>Show all</button>
                    </div>
                </Flex>
                <Flex className='gap-6 flex-wrap pb-[140px]'>
                    <Card src={cardImage1} productName='Adicolor Classics Joggers' category='Dress' price='$63.85' />
                    <Card src={cardImage1} productName='Adicolor Classics Joggers' category='Dress' price='$63.85' />
                    <Card src={cardImage1} productName='Adicolor Classics Joggers' category='Dress' price='$63.85' />
                    <Card src={cardImage1} productName='Adicolor Classics Joggers' category='Dress' price='$63.85' />
                </Flex>
            </Container>
        </section>
    )
}

export default BestSeller
