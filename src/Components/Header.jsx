import React from 'react'
import './Header.css'
import Button from './Button'

const Header = () => {
  return (
    <header className='main_Header'>
      <section className='sub_Header'>
        <article className='left_Header'>
            <h1>Anthony</h1>
        </article>
        <div className='middle_Header'>
            <div className='middle_Buttons'>
              <Button name="Home" className="home"/>
               <Button name="Stores" className="store"/>
            </div>
            <div className='middle_Input'>
                <input type="text" placeholder='Search for food items' className='food' />
               <Button name="Search" className="search"/>
            </div>
        </div>
        <div className='right_Header'>
            <Button name="Register" className="register"/>
            <Button name="Login" className="login"/>
        </div>
      </section>
    </header>
  )
}

export default Header
