import React from 'react'

export const Footer = () => {
  let copyrightDate = new Date()
  return (
    <footer className="footer-container">
      Copyright ReverendHeat {copyrightDate.getFullYear()}
    </footer>
  )
}
