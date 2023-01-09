import React from "react";
import {MdWork} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'
function RightDiv() {
  return (
    <>
      <div className="rightSideDiv flex-row justify-start gap-3 flex-wrap h-max rounded-lg shadow-xl">

        <div className="flex flex-row justify-start gap-3 flex-wrap p-[40px]">
        <div>
        <MdWork size={50}/>
        </div>
        <div>
        <h1 className="text-4xl font-bold p-1 "> Work Experience</h1>
        </div>
        </div>

        <div className="flex flex-col justify-start flex-wrap gap-5 p-5 ">
        <div>
        <h1 className="text-3xl font-semibold">Front End Developer / w3schools.com</h1>
        </div>
        <div className="flex flex-row justify-start flex-wrap">
            <SlCalender size={30} className="mt-3"/>
            <h2 className="p-1 m-2 text-2xl">Jan 2015 -</h2>
            <button className="rounded-md bg-green-300 p-1 text-xl h-[37px] w-[113px] mt-2"> Current</button>
        </div>

        <div>
        <p className="text-2xl">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
        </div>
        
        <hr></hr>        
        <div className="flex flex-col justify-start flex-wrap gap-5 p-5 ">
        <div>
        <h1 className="text-3xl font-semibold">Web Developer / something.com</h1>
        </div>
        <div className="flex flex-row justify-start flex-wrap">
            <SlCalender size={30} className="mt-3"/>
            <h2 className="p-1 m-2 text-2xl">Jan 2015 -  Dec 2014</h2>
        </div>
        <div>
        <p className="text-2xl">Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
        </div>
        <hr></hr>
         
        <div className="flex flex-col justify-start flex-wrap gap-5 p-5 ">
        <div>
        <h1 className="text-3xl font-semibold">Front End Developer / w3schools.com</h1>
        </div>
        <div className="flex flex-row justify-start flex-wrap">
            <SlCalender size={30} className="mt-3"/>
            <h2 className="p-1 m-2 text-2xl">Jan 2015 -</h2>
            <button className="rounded-md bg-green-300 p-1 text-xl h-[37px] w-[113px] mt-2"> Current</button>
        </div>
        <div>
        <p className="text-2xl">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
        </div>  



        <div className="flex flex-row justify-start gap-3 flex-wrap p-[40px]">
        <div>
        <MdWork size={50}/>
        </div>
        <div>
        <h1 className="text-4xl font-bold p-1 "> Work Experience</h1>
        </div>
        </div>

        <div className="flex flex-col justify-start flex-wrap gap-5 p-5 ">
        <div>
        <h1 className="text-3xl font-semibold">Front End Developer / w3schools.com</h1>
        </div>
        <div className="flex flex-row justify-start flex-wrap">
            <SlCalender size={30} className="mt-3"/>
            <h2 className="p-1 m-2 text-2xl">Jan 2015 -</h2>
            <button className="rounded-md bg-green-300 p-1 text-xl h-[37px] w-[113px] mt-2"> Current</button>
        </div>

        <div>
        <p className="text-2xl">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
        </div>
        
        <hr></hr>        
        <div className="flex flex-col justify-start flex-wrap gap-5 p-5 ">
        <div>
        <h1 className="text-3xl font-semibold">Web Developer / something.com</h1>
        </div>
        <div className="flex flex-row justify-start flex-wrap">
            <SlCalender size={30} className="mt-3"/>
            <h2 className="p-1 m-2 text-2xl">Jan 2015 -  Dec 2014</h2>
        </div>
        <div>
        <p className="text-2xl">Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
        </div>
        <hr></hr>
         
        <div className="flex flex-col justify-start flex-wrap gap-5 p-5 pb-[36px]">
        <div>
        <h1 className="text-3xl font-semibold">Front End Developer / w3schools.com</h1>
        </div>
        <div className="flex flex-row justify-start flex-wrap">
            <SlCalender size={30} className="mt-3"/>
            <h2 className="p-1 m-2 text-2xl">Jan 2015 -</h2>
            <button className="rounded-md bg-green-300 p-1 text-xl h-[37px] w-[113px] mt-2"> Current</button>
        </div>
        <div>
        <p className="text-2xl">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        </div>
        </div> 

      </div>
      
    </>
  );
}
export default RightDiv;
