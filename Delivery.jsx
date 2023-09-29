import React from 'react';
import steele from './nice.jpg';

function Delivery(props) {
    return (
        <>
        <div className="w-full bg-white px-4 py-16">
            <h3 className="text-orange-500 font-bold text-2xl text-center">Quick Delivery App</h3>
            <div className=" w-[1520px] mx-auto flex flex-row justify-center  ">
                <img className=" w-[450px] mx-40 my-4 rounded-3xl" src={steele} style={{width:500,height:500}} alt=" Contact us" />

            <div className=" flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">Get the App</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Limitless Convenience on Demand </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>

            </div>
        </div>
        </div>

        </>
    );
}

export default Delivery;