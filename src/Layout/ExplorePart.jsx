import React from 'react'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import Container from '../Component/Container'
import Heading from '../Component/Heading'

const ExplorePart = () => {
    return (

        <section>
            <Container>
                <Heading text='Explore new and popular styles' className='text-center pb-[35px]'/>
                <Flex className='gap-6 w-full pb-[140px]'>

                    <div className='w-1/2'>
                        <div className='w-[613px] h-[613px] bg-black50'><Image src={card1}/></div>
                    </div>

                    <div className='flex flex-wrap w-1/2 gap-6'>
                        <div className='w-[294px] h-[294px] bg-black50'><Image src={card2}/></div>
                         <div className='w-[294px] h-[294px] bg-black50'><Image src={card3}/></div>
                         <div className='w-[294px] h-[294px] bg-black50'><Image src={card4}/></div>
                         <div className='w-[294px] h-[294px] bg-black50'><Image src={card5}/></div>
                    </div>

                </Flex>
            </Container>
        </section>

    )
}

export default ExplorePart
