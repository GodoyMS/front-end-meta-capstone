import React from 'react'
import companyImage1 from '../../../assets/icons_assets/Mario and Adrian A.jpg';
import companyImage2 from '../../../assets/icons_assets/Mario and Adrian b.jpg';
const About = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div style={{backgroundColor:'#EDEFEE'}} className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-start">
          <h2  style={{fontFamily:'Markazi Text',color:'#333333'}} className="text-2xl font-bold  md:text-5xl">
            Little Lemon
          </h2>
          <h3 style={{fontFamily:'Markazi Text',color:'#EE9972'}} className='text-lg font-bold md:text-2xl'>Chicago</h3>

          <p style={{fontFamily:'Karla', maxWidth:'20em',wordBreak:'break-word',whiteSpace:'pre-wrap'}} className="  sm:mt-4 sm:block">
          "Little Lemon" is a cozy and inviting restaurant that specializes in fresh and flavorful cuisine. With a focus on using locally-sourced ingredients, our menu features a variety of dishes that are as delicious as they are healthy. From zesty lemon-infused entrees to light and refreshing salads, our menu is sure to please all taste buds.
          </p>

        
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Adrian and Mario 1"
          src={companyImage1}
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Adrian and Mario 2"
          src={companyImage2}
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default About