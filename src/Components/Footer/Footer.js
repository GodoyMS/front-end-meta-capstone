import React from 'react'
import Logo from '../../assets/icons_assets/Logo.svg';
const Footer = () => {
  return (
    
    <footer aria-label="Site Footer" className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-8 lg:col-span-2 lg:h-full">
    <img
      src={Logo}
      alt=""
      className=" w-full h-full"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

      <div>
          <p className="font-medium text-gray-900">Dormat Navigation</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Menu
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Reservations
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Order online
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>


        <div>
          <p className="font-medium text-gray-900">Contact</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                123 Main St. Anytown, USA 12345
                </a>
              </li>

             

             
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  +51 913 464 041
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  littlelemon@gmail.com
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-medium text-gray-900">Social Media Links</p>

          <nav aria-label="Footer Navigation - Company" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Facebook
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Instagram
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div className="pt-12 mt-12 border-t border-gray-100">
      <div className="sm:flex sm:items-center sm:justify-between">
        <nav aria-label="Footer Navigation - Support">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>
        </nav>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; Developed by Godoy Liam Muñoz
        </p>
      </div>
    </div>
</footer>

  )
}

export default Footer