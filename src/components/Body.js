import React from 'react'
import Header from './Header'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';
import "./Body.css";




function Body({spotify}) {
  const[{discover_weekly}, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify}/>

      <div className='flex px-4 items-end'>
        <img src={discover_weekly?.images[0].url} alt="" className='rounded-xl mx-4 shadow-md shadow-gray-400 h-40 w-40'/>
        <div>
          <strong>Playlist</strong>
          <h2 className='text-5xl mb-1 pb-2'>Discover Weekly</h2>
          <p className='text-sm ml-1 my-1'>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='mt-6 ml-6'>
        <div className='flex items-center gap-4'>
          <PlayCircleIcon fontSize='large' className='text-green-500 cursor-pointer hover:transition delay-200 ease-in-out hover:scale-125'/>
          <FavoriteIcon fontSize='small' className='text-green-500 cursor-pointer hover:transition delay-200 ease-in-out hover:scale-125'/>
          <MoreHorizIcon/>
        </div>

          {discover_weekly?.tracks.items.map((item) => (
          <SongRow  track={item.track} />
        ))}

      </div>
    </div>
  )
}

export default Body
