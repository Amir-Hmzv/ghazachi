import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,

  } from '@chakra-ui/react'
  
  import React from 'react'
  import { FaBars } from 'react-icons/fa';
  import {AiOutlineSearch } from 'react-icons/ai';
import SmallMenu from './SmallMenu';
import DropDownSide from './DropDownSide'

const handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    console.log('enter press here! ')
  }
}

  function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  
    return (
      <>
        <FaBars className=' text-[#FF2B00] cursor-pointer' size={25}   onClick={onOpen}>
          Open
        </FaBars>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
         
        >
          <DrawerOverlay />
          <DrawerContent bgGradient='linear(to-l, #efefef, #F6E4D9)'>
            <DrawerCloseButton  _focus={{outline:'none'}} _hover={{background:'none'}} _active={{background:'none'}} />
            <br />
            <DrawerHeader align='center' color='#e25b40'>جستو جو کنید</DrawerHeader>
  
            <DrawerBody >
             <div className='flex relative mb-20'>
             <input onKeyPress={handleKeyPress} type="text" className=' w-full p-1 rounded-md focus:outline-none'/>
              <span  className='bg-white rounded-md  absolute left-1 top-1'><AiOutlineSearch size={25}/></span>
             </div>
              <ul className=' space-y-3'>
                <li  className=' cursor-pointer font-bold hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] '>صفحه اصلی</li>
              
                {/* <SmallMenu fobold={1}/> */}
                <li><DropDownSide/></li>
                <li  className=' cursor-pointer font-bold hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] '>تماس با ما</li>
                <li className=' cursor-pointer font-bold hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] '>درباره ما</li>
              </ul>
             
            </DrawerBody>
            <DrawerFooter>

              
            </DrawerFooter>
      

          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export default SideBar