import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.png"
import { FacebookLogo, InstagramLogo, Phone, YoutubeLogo } from "phosphor-react";
import { Button } from "keep-react";
import { ReactNode } from "react";

const Footer = () => {
    return (
        <>
            <footer className="relative z-5 bg-black text-white pt-14 pb-6 lg:pt-20 lg:pb-12 px-8 md:px-24 mt-auto">
                <div>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <Link to="/" className="mb-6 inline-block max-w-[180px]">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="max-w-full"
                                    />
                                </Link>
                                <p className="mb-7 text-gray-400">
                                PolishPro Car Wash delivers premium, eco-friendly car cleaning and detailing for a flawless, polished finish. Your ride shines like new every time!
                                </p>
                                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                                    <Phone size={24} />
                                    <span>&nbsp;+02 (345) 678 99</span>
                                </p>
                            </div>
                        </div>
                        <LinkGroup header="Resources">
                            <NavLink link="/#" label="Car Club" />
                            <NavLink link="/#" label="Our Services" />
                            <NavLink link="/#" label="Car Health Tracker" />
                        </LinkGroup>
                        <LinkGroup header="Company">
                            <NavLink link="/#" label="About PolishPro" />
                            <NavLink link="/#" label="Contact & Support" />
                            <NavLink link="/#" label="Success History" />
                        </LinkGroup>
                        <div className="w-full sm:w-1/2 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <h4 className="mb-6 text-lg font-semibold text-dark dark:text-white">
                                    Follow Us On
                                </h4>
                                <div className="mb-6 flex gap-5 items-center">
                                    <Button shape="circle">
                                        <FacebookLogo size={32} weight="bold" />
                                    </Button>
                                    <Button shape="circle">
                                        <InstagramLogo size={32} weight="bold" />
                                    </Button>
                                    <Button shape="circle">
                                        <YoutubeLogo size={32} weight="bold" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }: { children: ReactNode, header: string }) => {
    return (
        <>
            <div className="w-full sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                    <h4 className="mb-6 text-xl font-semibold">
                        {header}
                    </h4>
                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }: { link: string, label: string }) => {
    return (
        <li>
            <a
                href={link}
                className="inline-block leading-loose text-gray-400 hover:text-white"
            >
                {label}
            </a>
        </li>
    );
};
