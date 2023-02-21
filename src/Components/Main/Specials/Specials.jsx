import React from 'react'
import greekSalad from '../../../assets/icons_assets/greek salad.jpg'
import bruchetta from '../../../assets/icons_assets/bruchetta.svg'

import lemonDessert from '../../../assets/icons_assets/lemon dessert.jpg'

const Specials = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className='flex justify-between pt-4 pb-16'>
                 <h2 style={{color:'#F4CE14',fontFamily:'Markazi Text'}} className="text-3xl font-bold tracking-wide  lg:text-5xl">
                    This week specials !
                </h2>
                <button to={'/booking'} style={{fontFamily:'Karla',fontWeight:600}} type="button" className= " bg-yellow-400 h-10 px-4 py-2 m-1 text-black transition-colors duration-200 transform  rounded-md hover:bg-yellow-500 ">
                        Online Menu
                    </button>
            </div>

            <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                <article className='px-4'>
                        <div style={{backgroundColor:'#EDEFEE'}} className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1" >
                        <a  class="cursor-pointer">
                            <figure>
                                <img src={greekSalad}    class="rounded-t h-72 w-full object-cover" />
                                <figcaption className="p-4" >
                                    <div  className="bold my-6 text-2xl text-gray-700 dark:text-gray-400 flex justify-around"   >
                                        <p style={{fontFamily:'Markazi Text'}} className='font-bold'> Greek Salad</p>
                                        <p style={{fontFamily:'Markazi Text',color:'#EE9972'}}> $12.49</p>
                                    </div>
                                    <p style={{fontFamily:'Karla'}} class="text-lg my-6   leading-relaxed text-gray-800 dark:text-gray-300"    >
                                        The famous Greek Salad of crispy lettuce, peppers, olives  and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons
                                    </p>
                                    <button className='font-bold'>Order a deliver</button>
                                    
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    
                </article>
                <article className='px-4'>
                        <div style={{backgroundColor:'#EDEFEE'}} className="my-8 rounded shadow-lg  shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1" >
                        <a class="cursor-pointer">
                            <figure>
                                <img src={bruchetta}    class="rounded-t h-72 w-full object-cover" />
                                <figcaption className="p-4" >
                                    <div  className="bold my-6 text-2xl text-gray-700 dark:text-gray-400 flex justify-around"   >
                                        <p style={{fontFamily:'Markazi Text'}} className='font-bold'> Bruchetta</p>
                                        <p style={{fontFamily:'Markazi Text',color:'#EE9972'}}> $5.99</p>
                                    </div>
                                    <p style={{fontFamily:'Karla'}} class="text-lg my-6   leading-relaxed text-gray-800 dark:text-gray-300"    >
                                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil
                                    </p>
                                    <button className='font-bold'>Order a deliver</button>
                                    
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    
                </article>
                <article className='px-4'>
                        <div style={{backgroundColor:'#EDEFEE'}} className="my-8 rounded shadow-lg shadow-gray-200   bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1" >
                        <a  class="cursor-pointer">
                            <figure>
                                <img src={lemonDessert}    class="rounded-t h-72 w-full object-cover" />
                                <figcaption className="p-4" >
                                    <div  className="bold my-6 text-2xl text-gray-700 dark:text-gray-400 flex justify-around"   >
                                        <p style={{fontFamily:'Markazi Text'}} className='font-bold'> Lemon Dessert</p>
                                        <p style={{fontFamily:'Markazi Text',color:'#EE9972'}}> $5.00</p>
                                    </div>
                                    <p style={{fontFamily:'Karla'}} class="text-lg my-6   leading-relaxed text-gray-800 dark:text-gray-300"    >
                                        This comes straigth from grandma's recipe book, every last ingredient  has been sourced and is as authentic as can be imagined
                                    </p>
                                    <button className='font-bold'>Order a deliver</button>
                                    
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    
                </article>
                
                
                

            </div>
           
        </div>
        
        
    </section>
  )
}

export default Specials