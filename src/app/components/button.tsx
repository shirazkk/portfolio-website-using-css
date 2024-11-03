"use client"

interface Props {
    text: string;
    bgColor?: string; 
    color?: string;
    border?:string
  }
  
  export default function Button(prop: Props) {
    let customStyle = {};
  
    
    if (prop.bgColor) {
      customStyle = { backgroundColor: prop.bgColor,color:prop.color ,border:prop.border};
    } 
    

  
    return (
      <button style={customStyle} className="btn">
        {prop.text}
      </button>
    );
  }
  