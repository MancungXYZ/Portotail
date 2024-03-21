import React, { useEffect, useRef } from 'react'

function Navbar() {
    const myHeader = useRef(null)
    const myMenu = useRef(null)

    useEffect(() => {
        console.log(myHeader.current.offsetTop)
        window.onscroll = function () {
            const fixedNav = myHeader.current.offsetTop
            if (window.pageYOffset > fixedNav) {
                myHeader.current.classList.add('navbar-fixed')
            } else {
                myHeader.current.classList.remove('navbar-fixed')
            }
        }
    }, [])

    const hambuger = (e) => {
        e.target.classList.toggle('hambuger-active')
        myMenu.current.classList.toggle('hidden')

    }
  return (
    <header ref={myHeader} className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4 ">
                    <a href="hero" className='text-teal-500 font-bold text-2xl py-6 block'>Reihan Wiyanda</a>
                </div>
                <div className="flex items-center px-4">
                    <button onClick={hambuger} id='hambuger' name='hamburger' type='button' className='block absolute right-4 lg:hidden'>
                        <span className='w-[30px] h-[2px] my-2 block bg-slate-900 transition duration-300 ease-in-out origin-top-left '></span>
                        <span className='w-[30px] h-[2px] my-2 block bg-slate-900 transition duration-300 ease-in-out'></span>
                        <span className='w-[30px] h-[2px] my-2 block bg-slate-900 transition duration-300 ease-in-out origin-bottom-left '></span>
                    </button>
                    <nav id='nav-menu' ref={myMenu} className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
                        <ul className='lg:flex'>
                            <li className='group'>
                                <a href="#hero" className='text-lg font-semibold text-slate-900 py-2 mx-8 flex group-hover:text-slate-500'>Beranda</a>
                            </li>
                            <li className='group'>
                                <a href="#about" className='text-lg font-semibold text-slate-900 py-2 mx-8 flex group-hover:text-slate-500'>About Me</a>
                            </li>
                            <li className='group'>
                                <a href="#portofolio" className='text-lg font-semibold text-slate-900 py-2 mx-8 flex group-hover:text-slate-500'>Projects</a>
                            </li>
                            <li className='group'>
                                <a href="#contact" className='text-lg font-semibold text-slate-900 py-2 mx-8 flex group-hover:text-slate-500'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar