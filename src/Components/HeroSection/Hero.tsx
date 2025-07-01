import style from './Hero.module.css'

interface HeroProps {
    Title: string;
    Description: string;
    ButtonLabel: string;
    ButtonOnClick: () => void;
    Logo: string;
    RoundedLogo?: boolean
    HasDarkCover?: boolean;
    Style?: {
        BackgroundImage?: string;
        ButtonBackground?: string;
        ButtonTextColor?: string;
        FixedBackgroundPosition: boolean;
    }
}

export const Hero = ({RoundedLogo=false, HasDarkCover=true, Style, Title, Description, ButtonLabel, ButtonOnClick, Logo}: HeroProps) => {
    return (
        <header 
            style={{
                ...(Style?.BackgroundImage ? {backgroundImage: `url('${Style.BackgroundImage}')`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover" } : undefined),
                ...(Style?.FixedBackgroundPosition ? {backgroundAttachment: "fixed"} : {backgroundAttachment: "initial"})
            }}
            className={style.hero}
            >
            <div 
                style={{
                    ...(HasDarkCover ? {background: "rgba(0, 0, 0, 0.535)", height: "100vh"} : undefined),
                }}
                className={style.content}>
                <div className={`${style.logo_container} ${style.content_box}`}>
                    <img
                        src={Logo}
                        className={style.logo}
                        style={RoundedLogo ? {
                            borderRadius: "50%"
                        } : undefined}
                    />
                </div>
                <div className={style.content_box}>
                    <h1>{Title}</h1>
                    <p>{Description}</p>
                    <button 
                        onClick={ButtonOnClick}
                        className={style.button}
                        style={{
                            ...(Style?.ButtonBackground ? {background: Style.ButtonBackground} : undefined),
                            ...(Style?.ButtonTextColor ? {color: Style.ButtonTextColor} : undefined),
                        }}
                        >
                        {ButtonLabel}
                    </button>
                </div>
            </div>
        </header>
    )
}