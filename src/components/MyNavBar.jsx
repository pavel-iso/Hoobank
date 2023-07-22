import React from 'react'
import img from "../assets/india-flag.svg"
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function MyNavBar() {
  return (
    <div className='NavBar'>
      <nav className="bg-deepBlue font-poppins font-normal">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between ">
          <ul className="flex space-x-11">
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block meow">
              <Link to='/Career'>
                Career
                </Link>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
              transition-all duration-200" ></div>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block meow">
              <Link to="/FAQ">FAQ</Link>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
              transition-all duration-200" ></div>
            </li>
          </ul>
          <div>
            <Navbar/>
          </div>
          <div className="flex space-x-6">
            <img
              src={img}
              width="28px"
              height="20px"
              class="hidden lg:block"
            />
            <button className="py-3 px-5 font-mullish text-white border-lightBlue border
              rounded-sm text-sm  font-bold">
              <nav>
                <ul>
                  <li><Link to='/login'>Login</Link></li>
                </ul>
              </nav>
            </button>
            <button class="py-3 px-4 font-mullish rounded-sm text-sm font-bold
              bg-white text-lightBlue300 border transition-all duration-200
              hover:text-lightBlue500 hidden lg:flex">
                <nav>
                <ul>
                  <li><Link to='/login'>Sign Up</Link></li>
                </ul>
              </nav>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                class="w-[14px] h-[14px] ml-3"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
              
              </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MyNavBar;