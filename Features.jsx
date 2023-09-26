import React, {useState} from 'react';
import One from './1.jpg'
import Two from './2.jpg'
import Three from './3.jpg'
import {BsChevronBarRight, BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
function Features(props) {
    const sliders =[
        {url: One},
        {url: Two},
        {url: Three}
    ]
    const [currentIndex,setCurrentIndex] = useState(0)
    const preSlider=()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide?sliders.length-1:currentIndex-1
        setCurrentIndex(newIndex)
    }
    const nextSlider=()=>{
        const isFirstSlide = currentIndex === sliders.length-1
        const newIndex = isFirstSlide?0:currentIndex+1
        setCurrentIndex(newIndex)
    }
    const movetoSlide =(nextSlide)=>{
        setCurrentIndex(nextSlide)
    }
    return (
        <>
        <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            style={{backgroundImage:`url(${sliders[currentIndex].url})`}}>

            </div>
            <div className=" hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
               <BsChevronCompactLeft onClick={preSlider}/>
            </div>
            <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlider}/>
            </div>
            <div className="flex top-4 justify-center py-2">
                {
                    sliders.map((item,index)=>(<div key={index} onClick={()=>movetoSlide(index)} className={'text-2xl cursor-pointer'}>
                        <RxDotFilled/>
                    </div> ))
                }
            </div>
        </div>
        </>
    );
}

export default Features;