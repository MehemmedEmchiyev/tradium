

function Hero() {
    const path = '/images/'

  return (
    <div className='relative w-full md:h-[80vh] overflow-hidden group h-[60vh] '> 
        <img src={path + "heroimg.jpg"} className=' object-cover w-full md:object-left-top md:w-full h-full transform  transition-transform duration-500 group-hover:scale-110' alt="" />
        <div className='w-full px-4 absolute top-[75%] flex items-center justify-center flex-col left-[50%] transform translate-[-50%]  z-30'>
            <h2 className='text-3xl md:text-5xl mb-4  text-white font-["Cormorant_Garamond",_serif] '>New Now</h2>
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-3'>
                <button  className={`btn relative cursor-pointer  hover:text-black duration-500 text-white w-full md:w-[250px] border-2 border-white py-4 px-6`}>
                    Women
                </button>
                <button  className={`btn relative cursor-pointer  hover:text-black duration-500 text-white w-full md:w-[250px] border-2 border-white py-4 px-6`}>
                    Men
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero