import React from 'react'
import "./footer.css"




const Footer = () => {
    const Year = new Date();
    const currentyear = Year.getFullYear()
    console.log(currentyear,"currentyear")

  return (
    <div>
    <footer className='footer'>AshishBera Copyright@${currentyear}</footer>
      
    </div>
  )
}

export default Footer
