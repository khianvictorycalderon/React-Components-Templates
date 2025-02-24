import style from './PhotoGrid.module.css'

interface PhotoGridProps {
    Background?: string;
    Images: {
        Image: string;
        Alt: string;
        OnClick: () => void;
    }[];
}

export const PhotoGrid = ({Background, Images}: PhotoGridProps) => {
    return (
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
    )
}