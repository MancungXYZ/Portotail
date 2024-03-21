import React from 'react'
import {data} from '../data/data'

function Projects() {
  return (
    <section id='projects' className='pt-36 pb-16 bg-slate-100'>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-bold text-xl text-teal-500 mb-2'>PORTOFOLIO</h4>
            <h2 className='font-bold text-slate-900 text-3xl mb-4'>Recent Projects</h2>
            <p className='font-medium text-sm text-slate-500 lg:text-lg'>I've created a few project while i was learing about frontend website development. And all of project i'll explain below</p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          {data.map((item) => (
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                  <a href={item.live}>
                    <img src={item.img} alt={item.img} width='w-full'/>
                  </a>
                </div>
                <h3 className='font-semibold text-xl text-slate-900 mt-5 mb-3'>{item.title}</h3>
                <p className='font-medium text-md text-slate-500 mt-5 mb-3'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects