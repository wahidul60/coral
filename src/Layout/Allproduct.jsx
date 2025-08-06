import React from 'react'
import Heading from '../Component/Heading'
import Flex from '../Component/Flex'

const Allproduct = () => {
  return (
    <div>
      <Heading text='Or subscribe to the newsletter' className='pb-[35px]'/>
      <Flex className='w-full'>
        
        <ul className='flex w-1/2'>
            <li>all products</li>
            <li>t-shirt</li>
            <li>hoodies</li>
            <li>jacket</li>            
        </ul>
        <div>
            <button>filter</button>
        </div>
      </Flex>
    </div>
  )
}

export default Allproduct
