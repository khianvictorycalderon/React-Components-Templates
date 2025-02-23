import { HTMLAttributeAnchorTarget } from 'react';
import style from './ImageTextPair.module.css'

interface ImageTextPairProps {
    List: {
        Image: string;
        RoundedImage?: boolean;
        Alt?: string;
        ImageHref?: string;
        TargetHref?: HTMLAttributeAnchorTarget; // _blank by default
        Title: string;
        Description: React.ReactNode;
    }[];
    Rows: 1 | 2;
    Style?:{
        BackgroundColor?: string;
        TextColor?: string;
    }
}

export const ImageTextPair: React.FC<ImageTextPairProps> = ({List, Rows, Style}) => {
    return (
        <div 
            className={style.content}
            style={{
                ...(Style?.BackgroundColor ? {backgroundColor: Style.BackgroundColor} : undefined),
                ...(Style?.TextColor ? {color: Style.TextColor} : undefined),
            }}  
            >
            {List?.map((item, index) => (
                <div 
                    className={style.item}
                    style={{
                        ...(Rows == 2 ? {width: "42%"} : undefined),
                        ...(Rows == 1 ? {paddingLeft: "2%"} : undefined),
                    }}
                    key={index}
                    >
                    {item.ImageHref ? (
                        <a 
                            href={item.ImageHref}
                            target={item.TargetHref || "_blank"}
                            className={style.item_img_wrapper}
                            >
                            <img 
                            src={item.Image}
                            alt={item.Alt || ""}
                            title={item.Alt || ""}
                            className={`${style.item_img} ${style.item_img_hover}`} 
                            style={{
                                ...(item.RoundedImage ? {borderRadius: "50%"} : undefined)
                            }}
                            />
                        </a>
                    ) : (
                        <div className={style.item_img_wrapper}>
                            <img 
                            src={item.Image} 
                            className={style.item_img} 
                            alt={item.Alt || ""}
                            title={item.Alt || ""}
                            style={{
                                ...(item.RoundedImage ? {borderRadius: "50%"} : undefined)
                            }}
                            />
                        </div>
                    )}
                    <div className={style.item_content}>
                        <h4>{item.Title}</h4>
                        <span>{item.Description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}