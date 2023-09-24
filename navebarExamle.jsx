import React from 'react';
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsFillCartFill} from "react-icons/bs";

function NavebarExamle(props) {
    return (
        <>
        <h1 className="text-center text-success">Nave Bar Example</h1>

                <div className="mx-w-[1520px] mx-auto flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <div className="cursor-pointer">

                        <AiOutlineMenu size={25}/></div>

                    <h1 className={"text-2xl sm:text-3xl lg:text-4xl px-2"}>Yam <span>Eats</span></h1>
                        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
                            <p className={"bg-orange-700 text-white rounded-full p-2 text-bold"}>Free</p>
                            <p className={"p-2 text-bold"}>Delivery</p>
                        </div>
                </div>
                <div className="bg-gray-200 rounded-full flex items-center px-2 2-[200px] sm:w-[400px] gl:w-[500px]">
                    <AiOutlineSearch size={25}/>
                    <input type="text" className={"bg-transparent p-2 w-full focus:outline-none"} placeholder={'Search Meals'}/>
                </div>
                    <button className={"bg-orange-700 text-white hidden md:flex item-center p-3 rounded-full"}>
                        <BsFillCartFill size={20}/>Cart</button>
                </div>

        </>
    );
}

export default NavebarExamle;