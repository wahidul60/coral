import Container from '../Component/Container'
import Image from '../Component/Image'
import comming_soon from '../assets/comming_soon.jpg'

const Craft = () => {
  return (
    <Container>
      <h1 className='font-open text-[30px] font-bold'>Art & Collectibles</h1>
      <Flex className='items-center'>
        <p className='font-semibold'><Link to={`/${previousValue? previousValue.toLowerCase() : "home"}`}>{!previousValue || previousValue==currentValue ? "Home":previousValue}</Link></p> <FaAngleRight /> <p className='font-semibold'>{currentValue || "Craft"}</p>
      </Flex>
      <Image src={comming_soon} className=' w-full py-5'/>
    </Container>
  )
}

export default Craft
