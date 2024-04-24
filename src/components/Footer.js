import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className=' flex justify-evenly items-center fixed w-full bottom-0 h-20 bg-zinc-700 py-5 px-5'>
      <div className='w-1/3 flex item-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQH1LsXdvicDbbcO4iPSbuZ8zPSFqpy-TXDlBRxUyEIA&s" alt="" className='h-16 w-16  object-contain rounded-full'/>
        <div className='text-white'>
          <h4 className='m-1'>Tum Mile</h4>
          <p className='text-xs m-1'>Artist Name</p>
        </div>

      </div>
      <div className=' flex justify-evenly items-center w-2/5 text-white '>
        <ShuffleIcon className=' text-green-500 cursor-pointer hover:transition delay-200 ease-in-out hover:scale-125'/>
        <SkipPreviousRoundedIcon className=' cursor-pointer hover:transition delay-200 ease-in-out hover:scale-125'/>
        <PlayCircleFilledWhiteRoundedIcon sx={{ fontSize: 45 }} className=' cursor-pointer hover:transition delay-150 ease-in-out hover:scale-125' />
        <SkipNextRoundedIcon className=' cursor-pointer hover:transition delay-200 ease-in-out hover:scale-125'/>
        <RepeatIcon className=' text-green-500 cursor-pointer hover:transition delay-200 ease-in-out hover:scale-125'/>
      </div>
      <div className='w-1/3 text-white flex items-center justify-between' >
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon sx={{ fontSize: 30 }}/>
          </Grid>
          <Grid item>
            <VolumeDownIcon sx={{ fontSize: 30 }} className=' cursor-pointer hover:transition delay-200 ease-in-out hover:scale-125'/>
          </Grid>
          <Grid item xs>
            <Slider color='secondary' size='small'/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
