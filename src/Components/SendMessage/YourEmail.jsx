import React from 'react'

const YourEmail = () => {
  return (
    <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Your Email
        </label>
        <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
      </div>
  )
}

export default YourEmail