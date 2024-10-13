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
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { logout, useCurrentToken } from '../../redux/features/auth/authSlice'

type TMenuItem = {
    path: string,
    name: string
}

export default function NavbarComponent() {
    const dispatch = useAppDispatch();
    const token = useAppSelector(useCurrentToken);

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
                    {token ? (
                        <NavbarItem active className='ml-4 bg-error-600 hover:bg-error-700' onClick={() => dispatch(logout())}>
                            Logout
                        </NavbarItem>
                    ) : (
                        <Link to="/login">
                            <NavbarItem active className='ml-4'>Login</NavbarItem>
                        </Link>
                    )}
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    {menu}
                    {token ? (
                        <NavbarItem active className='ml-4 bg-error-600 hover:bg-error-700' onClick={() => dispatch(logout())}>
                            Logout
                        </NavbarItem>
                    ) : (
                        <Link to="/login">
                            <NavbarItem active className='ml-4'>Login</NavbarItem>
                        </Link>
                    )}
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
