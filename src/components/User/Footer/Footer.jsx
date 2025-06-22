import { CiCreditCard1 } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import SliderItems from "./Slider";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";


function Footer() {
    const [idx , setIdx] = useState(0)
    function handle(index){
        if(index == idx) {
            setIdx(0)
            return ""
        }
        setIdx(index)
    }
    
  const accordinElements = [
    {name : "Traduim" , cat : ["About Us" , "Store Information"]},
    {name : "Costumer Service" ,cat : ["Gift Cards","Loyalty Program","FAQ","Contact Us"]},
    {name : "Online Shopping",  cat : ["Delivery Terms","Return And Exchange","Payment Methods"]},
    {name : "Store Contact"  , cat : ["+994 51 225 96 96","51, 153 Neftchiler Avenue"]}
  ]
  return (
    <footer className='w-full mx-auto flex flex-col gap-5  md:w-[95%] py-2'>
        <SliderItems />
        <div className="bg-[#F7F7F2] lg:py-8 py-8 flex justify-center items-center flex-col">
            <div className=" p-4  max-w-[420px]">
                <div className="py-4 text-center font-['Cormorant_Garamond',_serif]">
                    <h2 className="text-3xl lg:text-[2.65em]">Join our newsletter</h2>
                </div>
                <div className="py-4 text-center">
                    <span>By signing up to Tradium, you’ll be the first to hear about special offers, our new arrivals, new brands and fashion trends.</span>
                </div>
            </div>
            <div className="mt-4 mb-2 p-2 md:flex md:w-[472px] ">
                <input type="text" className="px-5 h-11 border w-full md:w-[90%] bg-white font-semibold border-border-color" placeholder="Enter your email address" />
                <button className="my-4 md:my-0 md:ml-2 h-11 w-full md:w-[50%] rounded-md">
                    <a className="uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center  rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200" href="/">Subcribe</a>
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="border border-border-color px-5 py-4 flex items-center gap-3">
                <CiCreditCard1 className="text-2xl" />
                <span>Safe & Easy Payments</span>
            </div>
            <div className="border border-border-color px-5 py-4 flex items-center gap-3">
                <FaCarSide className="text-2xl" />
                <span>Express delivery</span>
            </div>
            <div className="border border-border-color px-5 py-4 flex items-center gap-3">
                <FaBox className="text-2xl" />
                <span>Quick & easy returns</span>
            </div>
        </div>
        <div className="flex md:flex-row md:justify-between flex-col gap-2">
                {
                    accordinElements.map((item,index) => {
                        return <div key={index} className="mb-4 md:mb-0">
                            <div className="flex justify-between items-center md:cursor-default cursor-pointer">
                            <h4 className="text-lg font-sans uppercase">{item.name}</h4>
                            <span className="md:hidden">
                                <IoIosArrowUp onClick={() => handle(index + 1)} className={`duration-500 ${index + 1 != idx ? "rotate-180" : 'rotate-360'} `}/>
                            </span>
                            </div>
                            <ul className={`mt-2 md:block ${index + 1 == idx ? "" : "hidden"} font-['Montserrat_Alternates',_sans-serif]`}>
                                {
                                    item.cat?.map((elem,i) => <li key={i} className="py-2"><a href="/aboutus">{elem}</a></li>)
                                }
                            </ul>
                        </div>
                    })
                }
                <div className="mb-4 md:mb-0">
                    <div className="flex justify-between items-center md:cursor-default cursor-pointer">
                    <h4 className="text-lg font-sans uppercase">Social Media</h4>
                    <span className="md:hidden"></span>
                    </div>
                    <div className="mt-2 md:block">
                    <div className="flex mt-4 gap-2">
                        <span className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-black hover:bg-black hover:text-white cursor-pointer">
                            <FaFacebookF className="text-2xl"/>
                        </span>
                        <span className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-black hover:bg-black hover:text-white cursor-pointer">
                            <FaInstagram className="text-2xl"/>
                        </span>
                        <span className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-black hover:bg-black hover:text-white cursor-pointer">
                            <FaWhatsapp className="text-2xl"/>
                        </span>
                    </div>
                    </div>
                </div>
        </div>
        <div>
            &copy; Copyright 2024 Tradium.
        </div>
    </footer>
  )
}

export default Footer