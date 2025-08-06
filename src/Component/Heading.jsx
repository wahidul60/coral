import React from 'react'

const Heading = ({text, className}) => {
  return (
    <div>
      <h1 className={`font-roboto text-[50px] font-medium ${className}`}>{text}</h1>
    </div>
  )
}

export default Heading
