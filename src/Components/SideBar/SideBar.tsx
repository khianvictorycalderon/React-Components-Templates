import { useEffect, useState } from 'react';
import style from './SideBar.module.css'

interface SideBarProps {
    Logo: string;
    Title: string;
    Style?: {
        Background?: string;
        Textcolor?: string;
    }
    Buttons: {
        Logo?: string;
        Label: string;
        OnClick: () => void;
    }[];
    Footer?: React.ReactNode;
    InitiallyShown?: boolean;
}

export const SideBar = ({Style, Logo, Title, Buttons, Footer, InitiallyShown = true}: SideBarProps) => {
    const [isSideBarShown, setIsSideBarShown] = useState<boolean>(InitiallyShown);
    useEffect(() => {
        if (window.innerWidth > 768) { // Only apply margin on desktop
            document.body.style.transition = "0.3s";
            document.body.style.marginLeft = isSideBarShown ? "20%" : "0%";
        } else if (window.innerWidth <= 768) {
            document.body.style.marginLeft = "0";
        }
    
        return () => {
            if (window.innerWidth > 768) {
                document.body.style.transition = "";
            }
        };
    }, [isSideBarShown]);
    
    return (
        <>
            <div 
                className={`${isSideBarShown ? style.hambhamburger_hidden : style.hamburger_shown} ${style.hamburger}`}
                onClick={() => setIsSideBarShown(true)}
            />
            <div 
                className={`${isSideBarShown ? style.sidebar_shown : style.sidebar_hidden} ${style.sidebar}`}
                style={{
                    ...(Style?.Background ? { backgroundColor: Style.Background } : undefined),
                    ...(Style?.Textcolor ? { color: Style.Textcolor } : undefined)
                }}
                >
                <button 
                    onClick={() => setIsSideBarShown(false)}
                    className={style.close_button}
                    style={{
                        ...(Style?.Textcolor ? { color: Style.Textcolor } : undefined)
                    }}
                    />
                <div className={style.logo_container}>
                    <img className={style.logo} src={Logo} />
                    <h1 className={style.logo_text}>
                        {Title}
                    </h1>
                </div>

                <hr className={style.hr}/>
                {/* Buttons here */}
                <div className={style.buttons_list}>
                    {Buttons.map((item, index) => (
                        <div 
                            key={index} 
                            className={style.sidebar_button}
                            onClick={item.OnClick}
                            >
                            {item.Logo && <img src={item.Logo} className={style.button_logo}/>}
                            <div className={style.center}>{item.Label}</div>
                        </div>
                    ))}
                </div>
                <div className={style.sidebar_footer}>
                    {Footer}
                </div>
            </div>
        </>
    )
}