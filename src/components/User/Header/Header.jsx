import { Link } from "react-router"
import logo from '../../../../public/images/logo.png'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbBriefcase2 } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import HamburgerMenu from "./HamburgerMenu";
import { changeStatue } from "../../../store/hamMenuSlice";
import Search from "./Search";
import { changeSearchStatue } from "../../../store/searchSlice";
import { Box, Skeleton } from "@mui/material";
import { setOpen } from "../../../store/basketSlice";
import Basket from "./Basket";
import { useGetAllCategoriesQuery } from "../../../store/tradiumApi";

function Header() {
  const dispatch = useDispatch()
  const { statue } = useSelector(store => store.hamMenuStatue)
  const { data , isLoading } = useGetAllCategoriesQuery()
  const [menuStatue, setMenuStatue] = useState(false)
  const [subCategories, setSubCategories] = useState(1)
  const images = [
    'https://tradium.ibradev.me/img/women-clothing.jpg',
    'https://tradium.ibradev.me/img/men-clothing.jpg',
    'https://tradium.ibradev.me/img/boys-clothing.jpg',
    'https://tradium.ibradev.me/img/necklaces.jpg',
    'https://tradium.ibradev.me/img/fragrance.jpg',
    'https://tradium.ibradev.me/img/2-235-bedroom.jpg'
  ]
  const handleOpen = () => dispatch(setOpen());
  const getSubCategories = (id) => setSubCategories(data.find(item => item.id == id))
  return (
    <header className="w-full mx-auto px-0 lg:px-15 py-5 sticky z-30 lg:z-40 right-0 left-0 top-0 bg-white ]">
      <Search />
      <section className="flex items-center justify-between">
        <nav className="hidden lg:block w-1/3">
          <menu className="w-max" onMouseEnter={() => { !isLoading && setMenuStatue(true) }} onMouseLeave={() => { !isLoading && setMenuStatue(false) }}>
            <ul className="flex items-center">
              {
                !isLoading ?
                  data?.map((item, index) => <li key={index} onMouseEnter={() => getSubCategories(item.id)} className="py-1 px-2 ml-[2px] text-nowrap mb-1 cursor-pointer rounded-[3px] hover:bg-[#e4e4e4]">{item.name}</li>)
                  :
                  <Box sx={{ width: 300, display: "flex", gap: '12px' }}>
                    <Skeleton sx={{ width: '100%' }} />
                    <Skeleton sx={{ width: '100%' }} />
                    <Skeleton sx={{ width: '100%' }} />
                  </Box>
              }
            </ul>
            {
              menuStatue &&
              <div className="shadow-2xl absolute w-full py-10 px-15 bg-white left-0 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold cursor-pointer">View All</h3>
                  <menu className="pt-1 flex flex-col gap-1">
                    {
                      subCategories.Subcategory?.map((item, i) => <li key={i} className="hover:underline cursor-pointer">{item.name}</li>)
                    }
                  </menu>
                </div>
                <div className="h-full">
                  <img src={images[subCategories.id - 1]} alt="" />
                </div>
              </div>
            }
          </menu>
        </nav>
        <div className="flex lg:hidden cursor-pointer items-center gap-3 text-2xl w-1/3">
          {!statue ? <FaBars onClick={() => dispatch(changeStatue())} /> : <IoMdClose onClick={() => dispatch(changeStatue())} />}
          <IoIosSearch onClick={() => dispatch(changeSearchStatue())} className="text-black" />
        </div>
        <div className="w-1/3 h-[40px] flex items-center justify-center">
          <Link to='/'>
            <img src={logo} className="w-[150px] h-full object-contain" alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-3 w-1/3 justify-end">
          <CiUser className="hidden lg:inline text-2xl cursor-pointer" />
          <CiHeart className="text-2xl cursor-pointer" />
          <TbBriefcase2 onClick={handleOpen} className="text-2xl cursor-pointer" />
          <Basket />
        </div>
      </section>
      <HamburgerMenu />
      <section className="hidden lg:flex items-center justify-end mt-2">
        <div className="flex items-center h-11 w-60 pl-5 pr-2 text-[#9CA3AF] border-1 border-[#E5E7EB]">
          <input type="text" onClick={() => dispatch(changeSearchStatue())} className="border-0 outline-0" placeholder="Search..." />
          <IoIosSearch className="text-black" />
        </div>
      </section>

    </header>
  )
}

export default Header