import React from 'react'
import Heading from '../Component/Heading'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import insproduct1 from '../assets/insproduct1.png'
import insproduct2 from '../assets/insproduct2.png'
import insproduct3 from '../assets/insproduct3.png'
import insproduct4 from '../assets/insproduct4.png'
import insproduct5 from '../assets/insproduct5.png'
import insproduct6 from '../assets/insproduct6.png'
import Container from '../Component/Container'

const SocialMedia = () => {
    return (
        <section className='bg-[#ebebeb]'>
            <Container>
                <Heading className='text-center pb-[60px] pt-[100px]' text='Follow products and discounts on Instagram' />
                <Flex className='gap-6 pb-[70px]'>
                    <Image src={insproduct1} />
                    <Image src={insproduct2} />
                    <Image src={insproduct3} />
                    <Image src={insproduct4} />
                    <Image src={insproduct5} />
                    <Image src={insproduct6} />
                </Flex>
                <Heading className='text-center pb-[74px]'/>
                <Flex className='gap-6 justify-center pb-[100px]'>
                    <div className='w-[643px] border-b-1 border-black'></div>
                    <button className='border-b-1 border-black'>SUBMIT</button>
                </Flex>
            </Container>
        </section>
    )
}

export default SocialMedia
