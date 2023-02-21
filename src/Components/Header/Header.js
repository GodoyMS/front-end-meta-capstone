import React from 'react'
import imageHero from '../../assets/icons_assets/restauranfood.jpg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>

    <section  className={`dark:bg-gray-800}`}>
    <div style={{backgroundColor:'#495E57',position:'absolute',width:'100%',height:'420px',zIndex:'-1'}}></div>
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h2 style={{color:'#F4CE14',fontFamily:'Markazi Text'}} className="text-3xl font-bold tracking-wide  lg:text-5xl">
                    Little Lemon
                </h2>                
                <div className="mt-8 ">
                    <p style={{fontFamily:'Karla'}} className="grid grid-template-column -mx-2 text-white ">
                        

                        <span className="mx-2">We're family owned </span>
                        <span className="mx-2"> Mediterranean restaurant</span>
                        <span className="mx-2"> focused on traditional</span>
                        <span className="mx-2">recipes served with a modern</span>
                        <span className="mx-2">twist</span>



                    </p>   
                </div>
            </div>

            <div className="w-full mt-8   rounded-md lg:max-w-sm ">
                    
                        <Link to={'/booking'} style={{fontFamily:'Karla'}} type="button" className= " bg-yellow-400 h-10 px-4 py-2 m-1 text-black transition-colors duration-200 transform  rounded-md hover:bg-yellow-500 ">
                            Reserve a table
                        </Link>
            </div>
        </div>

        <div className=" flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={imageHero} alt="glasses photo" />
        </div>
    </div>
</section>
</header>

  )
}

export default Header