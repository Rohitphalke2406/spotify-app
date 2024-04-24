import React from 'react'
import { loginurl } from '../allThings'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-black h-screen w-auto'>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" className='w-1/4 h-34'/>
      <a href={loginurl} className='p-4 bg-green-500 rounded-full text-white font-bold mt-12 hover:bg-green-700'>LOGIN WITH SPOTIFY</a>
      
    </div>
  )
}

export default Login
