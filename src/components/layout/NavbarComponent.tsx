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

type TMenuItem = {
    path: string,
    name: string
}



export default function NavbarComponent() {
    const menuItems: TMenuItem[] = [
        {
            path: "/services",
            name: "Services"
        },
        {
            path: "/dashboard",
            name: "Dashboard"
        }
    ]

    const menu = menuItems.map((item: TMenuItem) => (
        <NavbarItem key={item.name}>
            <Link to={item.path}>{item.name}</Link>
        </NavbarItem>
    ))

    return (
        <Navbar className='flex justify-center'>
            <NavbarContainer className='px-8 md:px-24 max-w-[3000px]'>
                <NavbarBrand>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className='h-8 p-1' />
                    </Link>
                </NavbarBrand>
                <NavbarList>
                    {menu}
                    <Link to="/login">
                        <NavbarItem active className='ml-4'>Login</NavbarItem>
                    </Link>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    {menu}
                    <Link to="/login">
                        <NavbarItem active className='ml-4'>Login</NavbarItem>
                    </Link>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
