import React from 'react'

const Sidebar = (props) => {

  const handleShow = (id, e) => {
    const newNum = id;
    props.setCurrentNun(newNum);
    props.reset(e);
  }
  return (
    <>

      <div className={`slider ${props.isShow === true ? "slider-show" : ""}`}>
        <ul className='page-ul'>
          {props.pages.map((page) => {
            return (
              <li className={`page-li ${props.currentNum === page.id ? "now-display" : ""}`} key={page.id}>
                <button className='page-btn' onClick={(e) => handleShow(page.id, e)}>{page.title}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
