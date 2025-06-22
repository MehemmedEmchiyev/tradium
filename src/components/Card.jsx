import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setModal } from "../store/quickViewSlice";
import QuickView from "./QuickView";

function Card({item,slider}) {
    const [changeImage,setChangeImage] = useState(0)
    const dispatch = useDispatch()
  return (
    <div>
        <div className='relative cursor-pointer w-[150px] md:w-[250px] overflow-hidden'>
            <div className='absolute top-0 flex items-center justify-between w-full left-0'>
                <span className='text-white font-bold px-2 relative z-30 rounded bg-[#B5314A]'>{item.discount}%</span>
                <FaRegHeart className='text-2xl font-bold'/>
            </div>
            <div className="relative overflow-hidden">
                <img onMouseEnter={() => setChangeImage(1)} onMouseLeave={() => setChangeImage(0)} className='rounded-t-lg w-full object-cover ' src={item.images[changeImage]} alt="" />
                {!slider && <button onClick={()=>dispatch(setModal())} onMouseEnter={() => setChangeImage(1)} onMouseLeave={() => setChangeImage(0)} className={`${changeImage == 1 ? "bottom-0" : "bottom-[-50px]"} cursor-pointer duration-500 text-white absolute h-max bg-[rgba(93,93,93,0.7)] py-2 w-full `}>
                    Quick View
                </button>}
            </div>
            
            <h2 className='font-bold text-md mb-3'>{item.Brands.name}</h2>
            <p className='text-sm text-[#777]'>
                {item.name}
            </p>
            <p className="py-2.5">{item.price} $</p>
        </div>
    </div>
  )
}

export default Card