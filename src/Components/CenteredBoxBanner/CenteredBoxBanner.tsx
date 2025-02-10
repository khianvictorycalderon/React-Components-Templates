import style from './CenteredBoxBanner.module.css'

interface CenteredBoxBannerProps {
    Content: React.ReactNode;
    Style?: {
        BackgroundImage?: string;
        BackgroundColor?: string;
        TextColor?: string;
        BoxBackgroundColor?: string;
    }
}

export const CenteredBoxBanner = ({Content, Style}: CenteredBoxBannerProps) => {
    return (
        <div
            className={style.banner}
            style={{
                ...(Style?.BackgroundColor ? {backgroundColor: Style.BackgroundColor} : undefined),
                ...(Style?.BackgroundImage ? {
                    backgroundImage:`url("${Style.BackgroundImage}")`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                } : undefined),
            }}
            >
            <div 
                className={style.box}
                style={{
                    ...(Style?.TextColor ? {color: Style.TextColor} : undefined),
                    ...(Style?.BoxBackgroundColor ? {backgroundColor: Style.BoxBackgroundColor} : undefined),
                }}
                >
                {Content}
            </div>
        </div>
    )
}