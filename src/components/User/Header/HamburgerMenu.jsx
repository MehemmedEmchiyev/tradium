import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllCategoriesQuery } from '../../../store/tradiumApi'

function HamburgerMenu() {
  const [categories , setCategories] = useState([])
  const [subCategories , setSubCategories] = useState({})
  const {data } = useGetAllCategoriesQuery()
  const { statue } = useSelector(store => store.hamMenuStatue)
  const getSubCategories = (id) => setSubCategories(data.find(item => item.id == id))
  return (
    <div className={`${statue && "block"} px-3 py-5 duration-600 bg-white fixed  w-full h-full ${statue ? 'left-0' : 'left-[-1000px]'} lg:hidden`}>
        <div className='flex items-center justify-end'> 
            <button className="cursor-pointer flex justify-center items-center border border-[#EAEAE6] py-2 px-3 h-12"><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="text-2xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg><span className="text-md pl-2.5">Sign in</span></button>
        </div>
        <nav className="">
            <menu className="">
                <ul className="flex items-center gap-3 overflow-x-auto">
                  {data?.map((item,index) => <li key={index} onClick={() => getSubCategories(item.id)} className="py-1 ml-[2px] text-nowrap mb-1 cursor-pointer rounded-[3px]">{item.name}</li>) }
                </ul>
            </menu> 
            <menu className="pt-1 flex flex-col gap-1">
                {subCategories.Subcategory?.map((item,i) => <li key={i} className="cursor-pointer">{item.name}</li> )}
            </menu>
          </nav>
    </div>
  )
}

export default HamburgerMenu