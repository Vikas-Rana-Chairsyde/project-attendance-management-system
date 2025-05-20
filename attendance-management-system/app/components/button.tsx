// button.tsx
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  variant?: string;   // optional
  primary?: boolean;  // optional, for your Primary story
}

const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;







// import React from 'react'

// function Button(props: { children: any; style: any; onClick: any; }){
//     const {children, style, onClick} = props
//   return(
   
//     <button style={style ? style : {background :'black' , color:'white'}} onClick={onClick}>{children}</button>
// )
// }

// export default Button;