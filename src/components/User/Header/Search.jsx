import React, {  useState } from 'react'
import logo from '../../../../public/images/logo.png'
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchStatue } from '../../../store/searchSlice';
import { useGetAllCategoriesQuery, useGetSearchedProductsQuery } from '../../../store/tradiumApi';
function Search() {
    const [idx, setIdx] = useState(0)
    const dispatch = useDispatch()
    const { searchStatue } = useSelector(store => store.searchStatue)
    const [value, setValue] = useState('')
    const [selectedCat, setSelectedCat] = useState(0)
    const { data: categories } = useGetAllCategoriesQuery()
    const { data: products } = useGetSearchedProductsQuery(value, { skip: !value })
    const render = (index, id) => {
        setIdx(index)
        setSelectedCat(id)
    }
    const handleClose = () => {
        dispatch(changeSearchStatue())
        setValue('')
    }
    return (
        <div className={`shadow-2xl px-5 flex-col z-500  gap-3 items-center justify-center w-full py-5 bg-white left-0 flex duration-300 fixed ${searchStatue ? 'top-0' : "top-[-500px]"}`}>
            <div className='w-full flex items-start justify-between'>
                <div></div>
                <img src={logo} className='w-[150px] h-[40px] object-contain' alt="" />
                <div>
                    <IoMdClose onClick={handleClose} className='cursor-pointer text-2xl' />
                </div>
            </div>
            <div className='h-11 w-full md:w-160 border-1 border-[#E5E7EB] p-5 flex justify-between items-center'>
                <input className='outline-0 border-0 w-full' type='text' value={value} onChange={e => setValue(e.target.value)} placeholder="Search..." />
                <IoIosSearch className='text-2xl' />
            </div>
            <div className='w-full md:w-160 '>
                <menu className='flex items-center  overflow-auto '>
                    <li onClick={() => render(0, 0)} className={`py-1 px-2 ml-[2px] text-nowrap mb-1 cursor-pointer rounded-[3px] ${idx == 0 && "bg-[#e4e4e4]"}`}>All</li>
                    {categories?.map((item, index) => <li key={index} onClick={() => render(index + 1, item.id)} className={`py-1 px-2 ml-[2px] text-nowrap mb-1 cursor-pointer rounded-[3px] hover:bg-[#e4e4e4] ${idx == index + 1 && 'bg-[#e4e4e4]'}`}>{item.name}</li>)}
                </menu>
            </div>
            {
                value &&
                <div className='w-full md:w-160 max-h-100 overflow-auto bg-white flex gap-3 justify-start px-2 flex-col'>
                    {
                        products?.filter(item => selectedCat ? selectedCat == item.categoryId : item).map((item, index) => (
                            <div key={index} className='flex gap-3 items-center'>
                                <img className='w-12 h-16 object-cover' src={item.images[0]} alt="" />
                                <p className='w-full'>{item.name}</p>
                                <p>{item.price}$</p>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default Search