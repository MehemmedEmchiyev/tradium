function Depatments() {
    const depatments = [
        {name: 'Kids' , img : 'depar1.jpg'},
        {name: 'Jewellery' , img : 'depar2.jpg'},
        {name: 'Beauty' , img : 'depar3.jpg'},
        {name: 'Home' , img : 'depar4.jpg'}
    ]
    const path = '/images/'


    return (
    <div className='py-5'>
        <div className='flex items-center'>
            <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
            <div className="w-full whitespace-nowrap font-extralight text-center px-4 text-[2em] font-['Cormorant_Garamond',_serif]">
                Choose a department
            </div>
            <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
        </div>
        <div className='py-3 grid grid-cols-1 gap-5 md:grid-cols-2'>
            {
                depatments.map((item,index) => {
                    return <div key={index} className="cursor-pointer relative group overflow-hidden duration-500">
                        <img className="w-full h-full group-hover:scale-[1.1] duration-500" src={path + item.img} alt="" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]"></div>
                        <h2 className=" absolute text-white z-10 top-[50%] transform translate-[-50%] left-[50%] text-3xl font-semibold">{item.name}</h2>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Depatments