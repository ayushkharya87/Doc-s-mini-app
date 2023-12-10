import React, { useRef } from 'react'
import Card from './Card'

const Content = () => {

    const ref = useRef();

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eaque.",
            filesize: "2.5 mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eaque.",
            filesize: "2.5 mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eaque.",
            filesize: "2.5 mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        },
    ];

  return (
    <div>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            
            {data.map((item, index) => (
                <Card data={item} key={index} reference={ref} /> 
            ))}
        </div>
    </div>
  )
}

export default Content