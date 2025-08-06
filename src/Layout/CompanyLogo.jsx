import React from 'react'
import Image from '../Component/Image'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import Container from '../Component/Container'
import Flex from '../Component/Flex'

const CompanyLogo = () => {
  return (
    <section>
        <Container>
        <Flex className='justify-between pt-[150px] pb-[90px] '>
          <div><Image src={brand1} /></div>
          <div><Image src={brand2} /></div>
          <div><Image src={brand3} /></div>
          <div><Image src={brand4} /></div>
          <div><Image src={brand5} /></div>
        </Flex>        
      </Container>
    </section>
  )
}

export default CompanyLogo
