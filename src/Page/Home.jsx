import React from 'react'
import Banner from '../Layout/Banner'
import CompanyLogo from '../Layout/CompanyLogo'
import ExplorePart from '../Layout/ExplorePart'
import Allproduct from '../Layout/Allproduct'
import Image from '../Component/Image'
import ZaraSection from '../assets/brand-banner.png'
import BestSeller from '../Layout/BestSeller.Jsx'
import SocialMedia from '../Layout/SocialMedia'



const Home = () => {
  return (
    <>
      <Banner />
      <CompanyLogo />
      <ExplorePart />
      <Allproduct/>
      <section className='py-[140px]'>
        <Image className='w-full' src={ZaraSection}/>
      </section>
      <BestSeller/>
      <SocialMedia />
      

    </>
  )
}

export default Home
