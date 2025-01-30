import style from './Cards.module.css'

interface CardProps {
    IsDarkTheme?: boolean;
    CardSectionBG?: string;
    Cards: {
        ImagePath?: string;
        Title: string;
        Description: string;
        Onclick: () => void;
    }[];
}

export const Cards = ({IsDarkTheme, Cards, CardSectionBG}: CardProps) => {
    return (
        <>
            <div 
                className={style.cardsection}
                style={CardSectionBG ? {backgroundColor: CardSectionBG} : undefined}
                >
                {Cards.map((item, index) => (
                    <div 
                        className={style.card} 
                        key={item.Title + index}
                        onClick={item.Onclick}
                        style={{
                            ...(item.ImagePath ? {} : { justifyContent: "center" }),
                            ...(IsDarkTheme ? { 
                                    background: "rgba(33, 33, 33, 0.91)" ,
                                    color: "rgba(255, 255, 255, 0.95)",
                                } : { 
                                    background: "rgba(247, 247, 247, 0.97)",
                                    color: "rgba(46, 46, 46, 0.93)",
                                })
                        }}
                        >
                        {item.ImagePath && (
                            <div 
                            className={style.card_image}
                            style={{
                                backgroundImage: `url(${item.ImagePath})`
                            }}/>
                            )
                        }
                        <div className={style.card_title}>
                            <h4>{item.Title}</h4>
                        </div>
                        <hr className={style.card_hr}/>
                        <p className={style.card_desc}>
                            {item.Description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}