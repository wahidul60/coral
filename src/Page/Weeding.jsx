import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import comming_soon from '../assets/comming_soon.jpg'

const Weeding = () => {
  let previousValue = useSelector((state) => state.myBreadcumb.previousValue)
  let currentValue = useSelector((state) => state.myBreadcumb.currentValue)  
  return (
    <Container>
      <h1 className='font-open text-[30px] font-bold'>Wedding & Party</h1>
      <Flex className='items-center'>
        <p className='font-semibold'><Link to={`/${previousValue? previousValue.toLowerCase() : "home"}`}>{!previousValue || previousValue==currentValue ? "Home" :previousValue}</Link></p> <FaAngleRight /> <p className='font-semibold'>{currentValue || "Wedding"}</p>
      </Flex>
      <Image src={comming_soon} className=' w-full py-5'/>
    </Container>
  )
  
}

export default Weeding
