import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Tos1Component from './pages/Tos1Component'

const Drawerpolicy1Component = () => {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['full']

    return (
        <>
          {sizes.map((size) => (
            <Button
              onClick={() => handleClick(size)}
              key={size}
              m={4}
            >{`Terms of Use`}</Button>
          ))}
    
          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                
              </DrawerHeader>
              <DrawerBody>
                <Tos1Component/>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )
}

export default Drawerpolicy1Component
