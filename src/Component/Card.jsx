import React from 'react'
import Image from './Image'
import Flex from './Flex'

const Card = ({ src, productName, category, price }) => {
    return (
        <div className='w-[296px] h-auto border border-[#e9e9e9] object-cover'>
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
