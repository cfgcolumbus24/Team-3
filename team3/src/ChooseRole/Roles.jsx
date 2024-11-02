import React from 'react'

const Roles = () => {
  return (
    <div className='flex flex-col items-center h-full justify-center'>
      <button className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 mt-4'>Teacher</button>
      <button className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 mt-4'>Proprietor</button>
    </div>
  )
}

export default Roles
