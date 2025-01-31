import style from './Banner.module.css'

interface BannerProps {
    BackgroundImage: string;
    Title: string;
    Description: React.ReactNode;
}

export const Banner = ({BackgroundImage, Title, Description}: BannerProps) => {
    return (
        <div 
            className={style.banner}
            style={{
                background: `url('${BackgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
            >
            <div className={style.content}>
                <h1>{Title}</h1>
                <p>{Description}</p>
            </div>
        </div>
    )
}