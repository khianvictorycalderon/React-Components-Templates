import style from './TwinList.module.css'

interface TwinListProps {
    Style?: { // By default, only 
        Background?: string;
        ListBackground?: string;
        TextColor?: string;
        ButtonStyle?: number; // Only available value is 1 - 5
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
            TextColor, 
            ButtonStyle = 1  // Set default value here
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
                            className={`${style.button} ${style[`button_style_${ButtonStyle}`]}`} // Uses default if none is provided
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