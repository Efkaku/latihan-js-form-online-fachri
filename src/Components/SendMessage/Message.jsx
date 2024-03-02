import React from 'react'

const Message = () => {
  return (
  <div className="mb-4">
    <label htmlFor="message" className="block text-sm font-medium text-gray-600">
        Message
    </label>
    <textarea id="message" name="message" rows={4} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={""}/>
  </div>
  )
}

export default Message