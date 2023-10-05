import gsap from 'gsap'
import React, { useEffect } from 'react'

export const VideoCallToaction = () => {

    useEffect(() => {
        gsap.to('.videoSection', {
            opacity: 1, delay: 2
        })
    }, [])

    return (
        <div className='videoSection flex justify-center flex-col  items-center ' style={{ opacity: 0.3, position: 'relative' }}>
            <div class="w-5/6 flex items-center justify-center pt-5" style={{}}>
                <div class="flex w-full justify-center items-center">
                    <div class="w-3/5 md:w-3/12">
                        <img src="/iphones.jpg" alt="" />
                    </div>
                    <div class="w-5/5 mx-4"></div>
                    <p class="text-2xl  md:text-6xl text-center md:text-end" style={{ color: "#6E6B66" }}>
                        Mirá que lindo
                    </p>
                </div>
            </div>
            <div class="w-full flex justify-center py-10" >
                <div className="w-full flex justify-center  py-10 flex-wrap" >
                    <p class="text-3xl mx-2 md:mx-0 md:text-4xl" style={{ color: "#6E6B66", textAlign: 'center' }}>
                        ¡Conseguilo antes que nadie!
                    </p>
                    <div className="flex justify-center items-center cursor-pointer">
                        <a href="https://api.whatsapp.com/send/?phone=5491136740350&text&type=phone_number&app_absent=0">

                            <button
                                className="w-fit bg-lime-50 text-emerald-900  buttonOne cursor-pointer ripple mx-4 transition ease-in-out delay-150 hover:text-teal-900 mt-5 md:mt-0  text-xl md:text-2xl hover:border-green-900 duration-300 py-1 px-5 rounded-full"
                            >
                                Pedir ahora
                            </button>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    )
}
