import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import ButtonComponent from './ButtonComponent.astro';

const videoComponent = ({ children }) => {


  return (
    <>

      <video className='pt-10 md:pt-0' autoPlay muted playsInline src="/titanium.mp4"></video>

      <div style={{ position: "relative" }} className='sm:bottom-0 bottom-34'>

        {children}
      </div>


    </>
  )

}

export default videoComponent