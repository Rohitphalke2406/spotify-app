import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
  const[{playlists}, dispatch] = useDataLayerValue()
  return ( 
    <div className=' w-1/5 h-screen bg-black px-3 min-w-60 text-white'>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" className='h-16 w-3/5  object-contain'/>
      <SidebarOption Icon={HomeRoundedIcon} title="Home" />
      <SidebarOption Icon={SearchRoundedIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicRoundedIcon} title="Your Library"/>
      <br />
      <strong className='text-xs uppercase mr-3 ml-3'>Playlists</strong>
      <hr className='border border-gray-400 w-11/12 mx-auto my-2 ' />

     {playlists?.items?.map(playlist => (
        <SidebarOption title = {playlist.name} />
     ))}
      

    </div>
  )
}

export default Sidebar
