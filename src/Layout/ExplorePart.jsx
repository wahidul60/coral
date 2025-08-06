import React from 'react'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import Container from '../Component/Container'

const ExplorePart = () => {
    return (

        <section>
            <Container>
                <Flex className='w-full h-auto gap-2 gap-x-2 gap-y-2 pb-[140px]'>
                    <div className='w-1/2 h-[648px]'><Image src={card1} /></div>
                    <Flex className='flex-wrap w-1/2 h-auto gap-x-2 gap-y-2'>
                        <Image className='w-96% h-96% object-cover' src={card2} />
                        <Image className='w-96% h-96% object-cover' src={card3} />
                        <Image className='w-96% h-96% object-cover' src={card4} />
                        <Image className='w-96% h-96% object-cover' src={card5} />
                    </Flex>
                </Flex>
            </Container>
        </section>

    )
}

export default ExplorePart
