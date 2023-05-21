import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa' 
import {FaMedium} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/anuradha-basnayake-117881212" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/cloby7" target='_blank'><FaGithub /></a>
        <a href="https://medium.com/@anudelay99" target='_blank'><FaMedium /></a>

    </div>
  )
}

export default HeaderSocials