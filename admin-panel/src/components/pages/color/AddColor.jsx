import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
export default function AddColor() {
  
  let imgDefPre='https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png'  

  let [color,setColor] =useState("#000") 

  let [imagePreview,setImagePreview]=useState(imgDefPre)

  
  return (
    <div>
       <form action="">
        
            <h3>Add Colors</h3>
             <ChromePicker
                color={color}
                onChange={setColor}
            />   

            <div className='w-[50px] h-[50px]' style={{background:color.hex}}>
                Hello
            </div>

            <div className='border-1 w-[300px] relative '>
                    <button type='button' onClick={()=>setImagePreview(imgDefPre)} className='absolute right-0'>Delete</button>
                     <input type="file" onChange={(e)=>{
                     
                       setImagePreview(URL.createObjectURL(e.target.files[0]))
                        
                     }} />
                     <img className='w-[250PX] h-[200px]' src={imagePreview} alt="" />
            </div>
           

       </form>
    </div>
  )
}
