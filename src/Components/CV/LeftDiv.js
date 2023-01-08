import React from "react";
import {AiTwotoneTags} from 'react-icons/ai';
import {GrLocation} from 'react-icons/gr';
import {MdOutlineMarkEmailUnread} from 'react-icons/md';
import {IoIosCall} from 'react-icons/io'
import {BsListStars} from 'react-icons/bs'
import {SiAdobephotoshop} from 'react-icons/si'
import {GiPhotoCamera} from 'react-icons/gi'
import {SiAdobeillustrator} from 'react-icons/si'
import {MdPermMedia} from 'react-icons/md'
import {GrLanguage} from 'react-icons/gr'
function LeftDiv(){
    return(
        <div className="w-[30%] leftSideDiv rounded-lg shadow-xl">
        <div>
        <img  className="w-[534px] h-[355px]" src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=" alt="image" />
        <h2 className="relative top-[-60px] left-[11px] text-3xl text-white font-semibold">Shahul Syed</h2>
        </div>
        <div className="p-5">
            <ul >
                <li className="ml-9 text-2xl"><AiTwotoneTags  className="Listicon" size={25}/> Developer</li>
                <li className="ml-9 text-2xl"><GrLocation  className="Listicon" size={25}/> India</li>
                <li className="ml-9 text-2xl"><MdOutlineMarkEmailUnread  className="Listicon" size={25}/>shahul0100@gamil.com</li>
                <li className="ml-9 text-2xl"><IoIosCall  className="Listicon" size={25}/> 1234567890</li>
            </ul>
        </div>
        <hr></hr>
        <ul >
                <li className="ml-9 text-2xl font-semibold"><BsListStars  className="Listicon" size={25}/> Skills</li>     
        </ul>

        <div className="p-5 mt-[-20px]">
            <ul >
                <li className="ml-9 text-2xl"><SiAdobephotoshop  className="Listicon" size={25}/> Adobe Photoshop</li>

                
                <li className="ml-9 text-2xl"><GiPhotoCamera  className="Listicon" size={25}/> India</li>
                <li className="ml-9 text-2xl"><SiAdobeillustrator  className="Listicon" size={25}/>shahul0100@gamil.com</li>
                <li className="ml-9 text-2xl"><MdPermMedia  className="Listicon" size={25}/> 1234567890</li>

            </ul>
            
        </div>

    <div className="flex flex-col justify-start flex-wrap gap-5 p-5">
    <div>
    <h1 className="text-2xl font-semibold ml-[40px]"><GrLanguage size={35} className="relative top-[36px] left-[-50px]"/> Languages</h1>
    </div>
   
    <span className="ml-9 text-2xl">Adghjkobe Photoshop</span>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full" style={{width: "350px"}}> 75%</div>
  </div>
  

  
    <span className="ml-9 text-2xl">Illustrator</span>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex flex-row justify-start flex-wrap">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full" style={{width: "300px"}}> 56%</div>
  </div>
  

    <span className="ml-9 text-2xl">Photography</span>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full" style={{width: "200px"}}> 45%</div>
  </div>

  </div>

  

  <div className="flex flex-col justify-start flex-wrap gap-5 p-5">
    <div>
    <h1 className="text-2xl font-semibold ml-[40px]"><GrLanguage size={35} className="relative top-[36px] left-[-50px]"/> Languages</h1>
    </div>

    <span className="ml-9 text-2xl">Adobe Photoshop</span>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full" style={{width: "200px"}}> 45%</div>
  </div>

    <span className="ml-9 text-2xl">Illustrator</span>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full" style={{width: "300px"}}> 65%</div>
  </div>

  </div>


</div>
    )
}

export default LeftDiv;