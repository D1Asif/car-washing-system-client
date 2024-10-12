import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'
import Logo from "../../assets/logo-black.png"
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <Navbar className='flex justify-center'>
            <NavbarContainer className='px-8 md:px-24 max-w-[3000px]'>
                <NavbarBrand>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className='h-8 p-1' />
                    </Link>
                </NavbarBrand>
                <NavbarList>
                    <NavbarItem>Figma</NavbarItem>
                    <NavbarItem>Documentation</NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem active>Get Started</NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem>Figma</NavbarItem>
                    <NavbarItem>Documentation</NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem active>Get Started</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
