import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../DataLayer';

function Header() {
    const[{user} , dispatch] = useDataLayerValue();
  return (
    <div className='flex justify-between items-center h-14 mb-7 w-full'>
      <div className='flex items-center bg-white rounded-3xl ml-3 mt-3 px-3 py-3 text-gray-500 gap-2'>
        <SearchIcon color='disabled'/>
        <input type="text" placeholder='Search for Artists, Songs..' className='rounded-3xl ' />
      </div>
      <div className='flex items-center mx-4 gap-2 mt-3'>
        <Avatar sx={{ width: 40, height: 40 }} src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
