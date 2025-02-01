import style from './Hero.module.css'

interface HeroProps {
    Background?: string;
    Title: string;
    Description: string;
    ButtonLabel: string;
    ButtonOnClick: () => void;
    Logo: string;
    HasDarkCover?: boolean;
}

export const Hero = ({HasDarkCover=true, Background, Title, Description, ButtonLabel, ButtonOnClick, Logo}: HeroProps) => {
    return (
        <header 
            style={Background ? {backgroundImage: Background} : undefined}
            className={style.hero}
            >
            <div 
                style={HasDarkCover ? {background: "rgba(0, 0, 0, 0.535)"} : undefined}
                className={style.content}>
                <div className={`${style.logo_container} ${style.content_box}`}>
                    <img
                        src={Logo}
                        className={style.logo}
                    />
                </div>
                <div className={style.content_box}>
                    <h1>{Title}</h1>
                    <p>{Description}</p>
                    <button 
                        onClick={ButtonOnClick}
                        className={style.button}
                        >
                        {ButtonLabel}
                    </button>
                </div>
            </div>
        </header>
    )
}