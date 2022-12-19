import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import PpComponent from './pages/PpComponent'
import styles from '/Users/asifh/OneDrive/Documents/Marketrol/pptos/component/DrawerpolicyComponent.module.css'

const DrawerpolicyComponent = () => {
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
            >{`Privacy Policy`}</Button>
          ))}
    
          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                
              </DrawerHeader>
              <DrawerBody>
                <PpComponent/>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )
}

export default DrawerpolicyComponent