import gsap, { Power1 } from 'gsap'
import React, { useEffect } from 'react'
import ButtonComponent from './ButtonComponent.astro'

export const MiraqueLindo = () => {
  useEffect(() => {
    gsap.fromTo('.miraque', {
      xPercent: -1,
      opacity: 0.4
    }, {
      xPercent: 0, opacity: 1, ease: Power1.easeIn, duration: 1.5
    })
    gsap.fromTo('#miraquebueno', { xPercent: 1, opacity: 0.5, }, { xPercent: 0, opacity: 1, ease: Power1.easeIn, duration: 1.5 })
    gsap.fromTo('.buttonIphones', { opacity: 0 }, { opacity: 1, ease: Power1.easeIn, delay: 1.5, duration: .5 })

  }, [])
  return (
    <>

      <div className=" flex items-center justify-center pt-5 miraque" style={{ opacity: 0 }}>
        <div className="flex justify-around md:justify-center items-center" >
      <img src='/section2iphones.png' class='w-3/5 md:w-2/5 mx-0 md:1x-10' alt='foto'/>
          <p className="md:text-6xl text-2xl text-center md:text-start  " >Mirá que <br className='sm:hidden' /> lindo</p>
        </div >
      </div >
      <div className="w-full flex justify-center mt-10 " >
        <div className=" flex items-center justify-center " style={{ opacity: 0,maxWidth:'100vw' }} id='miraquebueno' >
          <div className="flex w-full justify-center items-center w-3/5 md:w-2/5 ">
            <p className="md:text-6xl text-2xl  text-center md:text-end ">Mirá que  <br className='sm:hidden' />bueno</p>
          </div>
          <img src="/iphones.svg" alt="iphones" className="md:mx-10 mx-2  w-3/5" />
        </div>
      </div>

      <a href="https://api.whatsapp.com/send/?phone=5491136740350&text&type=phone_number&app_absent=0">
        <div className="w-full flex justify-center mt-20 buttonIphones flex-wrap " style={{ opacity: 0, }}  >
          <p className="text-2xl md:text-4xl md:text-end text-center">¡Conseguilo antes que nadie!</p>
          <div className="flex justify-center items-center cursor-pointer" >
            <button
              className=" bg-lime-700 text-white  mt-0 px-9 buttonOne cursor-pointer ripple transition ease-in-out delay-150 hover:text-teal-900 text-md md:text-2xl hover:border-green-900 duration-300  md:mx-4 py-1  rounded-full"
            >
              Pedir ahora
            </button>
          </div>
        </div >
      </a>


    </>
  )
}
