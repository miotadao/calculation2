import React from 'react'


const Header = (props) => {
  const handleShow = () => {
    props.setIsShow(true);
  }

  const handleClose = () => {
    props.handleClose();
  }

  return (
    <div className='top'>
      <button className={`hunburger ${props.isShow === true ? "hide" : ""}`} onClick={handleShow}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button className={`close-btn ${props.isShow === true ? "" : "hide"}`} onClick={handleClose}>
        ✖
      </button>
    </div>
  )
}

export default Header
