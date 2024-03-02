import React from 'react'

const YourName = () => {
  return (
    <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
      Your Name
    </label>
    <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
  </div>
  )
}

export default YourName