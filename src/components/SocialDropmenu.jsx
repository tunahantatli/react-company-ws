import React from 'react'
import {Menu, MenuHandler, MenuList, MenuItem, Button} from "@material-tailwind/react"

export default function SocialDropmenu() {
  return (
    <Menu>
        <MenuHandler>
            <Button className='bg-transparent text-black shadow-none hover:text-white'>Follow Us</Button>
        </MenuHandler>
        <MenuList>
            <MenuList>
                <MenuItem>Facebook</MenuItem>
                <MenuItem>Instagram</MenuItem>
                <MenuItem>BlueSky</MenuItem>
                <MenuItem>Pinterest</MenuItem>
                <MenuItem>X</MenuItem>
            </MenuList>
        </MenuList>
    </Menu>
  )
}
