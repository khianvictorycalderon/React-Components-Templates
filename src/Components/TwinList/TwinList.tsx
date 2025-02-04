import style from './TwinList.module.css'

interface TwinListProps {
    Style?: { // By default, only 
        Background?: string;
        ListBackground?: string;
        TextColor?: string;
        ButtonBackground?: string;
        ButtonTextColor?: string;
    }
    List: {
        Title: string;
        Description: string;
        Image: string;
        ButtonLabel: string;
        ButtonOnClick: () => void;
    }[];
}

export const TwinList = ({ 
        List, 
        Style: { 
            Background, 
            ListBackground, 
            ButtonBackground,
            ButtonTextColor,
            TextColor,
        } = {} 
    }: TwinListProps) => {
    return (
        <section 
            className={style.twin_list_section}
            style={Background ? { background: Background } : undefined}
        >
            {List.map((item, index) => (
                <div 
                    className={`${style.single_list} ${index % 2 == 0 ? style.reverse_order : ''}`} 
                    style={{
                        ...(ListBackground ? { background: ListBackground } : undefined),
                        ...(TextColor ? { color: TextColor } : undefined)
                    }}
                    key={index}
                >
                    <div>
                        <img src={item.Image} className={style.side_image} />
                    </div>
                    <div className={style.content}>
                        <h1>{item.Title}</h1>
                        <p>{item.Description}</p>
                        <button
                            className={`${style.button}`}
                            style={{
                                ...(ButtonBackground ? {background: ButtonBackground} : undefined),
                                ...(ButtonTextColor ? {color: ButtonTextColor} : undefined)
                            }}
                            onClick={item.ButtonOnClick}
                        >
                            {item.ButtonLabel}
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};