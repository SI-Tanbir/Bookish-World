
import React from 'react'
import coverimg from '../../assets/bookcover.png'

const Cover = () => {
  return (
    <div className=' bg-gray-300 flex max-w-[1140px] m-auto mt-10 rounded-md'>


    <div className='w-2/3 m-4  '>
    <h3 className=' text-4xl mt-[30%] font-extrabold'>Books to freshen up your bookshelf</h3>
    <button className='btn mt-4 bg-green-600 text-white'>View The List</button>

    </div>

    <div>

        <img src={coverimg} alt="" />
    </div>

        



    </div>
  )
}

export default Cover