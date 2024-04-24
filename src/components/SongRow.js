import React from 'react'

function SongRow({track}) {
  return (
    <div className='text-white ml-5 p-5 flex items-center rounded-3xl transition delay-100 ease-in-out cursor-pointer hover:bg-black hover:opacity-80 '>
      <img src={track.album.images[0].url} alt="" className='h-20 w-20 mr-4 rounded-3xl'/>
      <div >
        <h1 className='text-lg text-gray-300'>{track.name}</h1>
        <p className='text-sm mt-1 text-gray-300'>{track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}</p>
      </div>
    </div>
  )
}

export default SongRow;

