import React from 'react'

function Button(props){
    const {children, style, onClick} = props
  return(
   
    <button style={style ? style : {background :'black' , color:'white'}} onClick={onClick}>{children}</button>
)
}

export default Button;