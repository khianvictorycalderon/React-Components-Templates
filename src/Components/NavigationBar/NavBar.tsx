import { useState, useEffect } from "react";
import style from "./NavBar.module.css"

interface NavBarProps {
    ButtonStyle: {
        ButtonTextColor?: string;
        NavBarBackground?: string;
    };
    Buttons: {
        label: string;
        onClick: () => void;
    }[];
    Logo?: {
        imagePath: string;
        href?: string;
    };
}

export const NavBar = ({ Buttons, ButtonStyle, Logo }: NavBarProps) => {
    
    // Check if it is mobile for mobile responsiveness of the hamburger icon
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false);
    useEffect(() => {
        const checkIfMobile = () => {
          if (window.innerWidth <= 768) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
          window.removeEventListener('resize', checkIfMobile);
        };
    }, []); // Empty dependency array, meaning this effect runs once when the component mounts
    
    return (
        <>
            <div onClick={() => setIsMobileMenuShown(true)} id={style.hamburger}/>
            {(!isMobile || isMobileMenuShown) && (
                <nav className={style.navbar} style={{
                    background: ButtonStyle.NavBarBackground
                }}>
                    {Logo && Logo?.href ? (
                        <a href={Logo.href}>
                            <img className={style.logo} src={Logo.imagePath} />
                        </a>
                        ) : (
                            <img className={style.logo} src={Logo?.imagePath} />
                        )
                    }
                    {isMobile && (
                        <>
                            <div 
                                onClick={() => setIsMobileMenuShown(false)}
                                className={style.close_icon} 
                            />
                            <hr className={style.hr}/>
                        </>
                    )}
                    <div className={style.buttons}>
                        {Buttons.map((item) => (
                            <button
                                className={style.button}
                                key={item.label}
                                onClick={item.onClick}
                                style = {{
                                    color: ButtonStyle.ButtonTextColor
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </nav>
                )
            }
        </>
    );
};
