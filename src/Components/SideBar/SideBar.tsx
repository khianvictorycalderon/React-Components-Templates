import { useState } from 'react';
import style from './SideBar.module.css'

interface SideBarProps {
    children: React.ReactNode;
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

export const SideBar = ({children, Style, Logo, Title, Buttons, Footer, InitiallyShown = true}: SideBarProps) => {
    const [isSideBarShown, setIsSideBarShown] = useState<boolean>(InitiallyShown);
    return (
        <>
            <div 
                className={`${isSideBarShown ? style.hambhamburger_hidden : style.hamburger_shown} ${style.hamburger}`}
                onClick={() => setIsSideBarShown(true)}
            />
            <div className={style.everything}>
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
                                <span>{item.Label}</span>
                            </div>
                        ))}
                    </div>
                    <div className={style.sidebar_footer}>
                        {Footer}
                    </div>
                </div>
                <div 
                    className={`${isSideBarShown ? style.content_shrinked : style.content_expanded} ${style.content}`}
                    >
                    {children}
                </div>
            </div>
        </>
    )
}