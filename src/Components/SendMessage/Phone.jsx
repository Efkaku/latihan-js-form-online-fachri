import React from 'react'

const Phone = () => {
  return (
    <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone
        </label>
        <input type="tel" id="phone" name="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
      </div>
  )
}

export default Phone