import style from './PhotoGrid.module.css'

interface PhotoGridProps {
    Title: string;
    Background?: string;
    Images: {
        Image: string;
        Alt: string;
        OnClick: () => void;
    }[];
    Style?: {
        TextColor?: string;
    }
}

export const PhotoGrid = ({Title, Background, Images, Style}: PhotoGridProps) => {
    return (
        <div
            style={
                Background ? {background: Background} : undefined
            }
            >
            <span className={style.title_header} style={{color: Style?.TextColor || "grey"}}><b>{Title}</b></span>
            <div 
                className={style.photo_grid}
                style={
                    Background ? {background: Background} : undefined
                }
            >
                {Images.map((item, index) => (
                    <div 
                        key={index}
                        className={style.photo_container}
                        >
                        <img 
                            alt={item.Alt}
                            title={item.Alt}
                            className={style.photo}
                            onClick={item.OnClick}
                            src={item.Image} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}