import React from 'react'

function SidebarOption({title,Icon}) {
  return (
    <div className='flex gap-4 items-center text-gray-400 cursor-pointer h-10 mt-1 transition  delay-150 hover:text-gray-200 ease-in-out h font-semibold'>

        {Icon && <Icon className = "sidebar__icon"/>} 
      {Icon ? <h4>{title}</h4> : <p className='mt-2 ml-5 text-sm'>{title}</p>}
    </div>
  )
}

export default SidebarOption