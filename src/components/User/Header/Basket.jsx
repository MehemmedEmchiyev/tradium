import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../../store/basketSlice';
import { PiBagSimpleLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const style = {
  position: 'absolute',
  width: 350,
  height : "100%" ,
  outline : 0,
  bgcolor: 'background.paper',
//   p: 4,
};

export default function Basket() {
  const dispatch = useDispatch()
  const {open} = useSelector(store => store.basketStatus)
  const handleClose = () => dispatch(setOpen())

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className={` duration-500 ${open ? 'right-0' : 'right-[-500px]'}`}>
          <Typography id="keep-mounted-modal-title" className='p-4 flex items-center justify-between' variant="h6" component="h2">
            <span className='font-["Cormorant_Garamond",_serif] text-xl leading-6'>Shopping bag</span>
            <button onClick={handleClose} className='cursor-pointer'><IoMdClose /></button>
          </Typography>
          <div className='w-full h-[1px] bg-[#E5E7EB]'></div>
          <div  sx={{ mt: 2 }}>
            <div className='flex items-center flex-col justify-center  p-4'>
                <PiBagSimpleLight className='text-9xl' />
                <span className='font-["Cormorant_Garamond",_serif] text-2xl'>Your cart is empty</span>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
