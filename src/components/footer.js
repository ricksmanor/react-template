import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-100">
          <p>&copy; {new Date().getFullYear()} Lorem ipsum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer