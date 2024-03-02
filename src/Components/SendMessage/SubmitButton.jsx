import React from 'react'

const SubmitButton = () => {
  return (
    <div className="flex items-center justify-between">
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
    </div>
  )
}

export default SubmitButton