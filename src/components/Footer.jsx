import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { FaAsterisk, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa6'
import { MdLanguage } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-800 p-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <h3 className='font-bold mb-4'>Get the GetResponse App</h3>
          <div className='flex gap-2 cursor-pointer'>
            <img src="google.png" alt="Google Play" className='w-20' />
            <img src="app store.png" alt="App Store" className='w-20' />
          </div>
        </div>
        <div>
          <h3 className='font-bold mb-4'>Follow us</h3>
          <div className='flex gap-4 text-xl'>
            <FaFacebookF/>
            <FaInstagram/>
            <FaLinkedinIn/>
            <FaYoutube/>
            <FaPinterestP/>
            <FaAsterisk/>
          </div>
        </div>
        <div>
          <h3 className='font-bold mb-4'>Change the Language</h3>
          <div className='flex items-center border rounded px-4 py-2 w-fit bg-white'>
            <MdLanguage className='mr-2'/>
            <span>English</span>
            <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
              <path d='M19 9l-7 7-7-7'/>
            </svg>
          </div>
        </div>

        <div>
          <h3 className='font-bold mb-4'>Turn on high contract</h3>
          <div className='flex items-center gap-2'>
            <BsPersonCircle className='text-2xl'/>
            <label className='inline-flex relative items-center cursor-pointer'>
              {/* { <input type='checkbox' className='sr-only peer' checked={highContrast} onChange={() => setHighContrast(!highContrast)}/>} */}
            </label>
          </div>
        </div>

        <div className='border-t mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <svg width={20} height={20} viewBox='0 0 24 24' fill='none'><path d='M...'/></svg>
            <span>Copyright @ 2025 GetResponse. Email marketing & beyond</span>
          </div>
        </div>

        <div className='lg:flex gap-4'>
          <a href="#" className='hover:underline'>Privacy Policy</a>
          <a href="#" className='hover:underline'>Anti-Spam Policy</a>
          <a href="#" className='hover:underline'>Terms of Service</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
