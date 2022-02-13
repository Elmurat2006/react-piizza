import React from 'react'
import img404 from '../../assets/img/e404.png'

import {Link} from 'react-router-dom'
const Error404 = () => {
  return (
      <>
    <img src={img404} alt=""  width="900px" style={{"display": "flex", "textAlign": "center", "justifyContent": "center","margin":"0 auto"}}/>
    <p style={{"margin": "0 auto","fontSize":"24px","textAlign": "center","fontWeight": "bold","marginTop":"30px"}}>Oh sorry, page not available</p>
    <Link to='/' style={{"display": "block","textAlign": "center", "fontWeight": "bold", "fontSize": "24px","marginTop":"30px"}}>Back to home page</Link>

      </>


  )
}

export default Error404