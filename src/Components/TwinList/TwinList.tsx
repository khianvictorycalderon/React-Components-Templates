import style from './TwinList.module.css'

interface TwinListProps {
    Style?: {
        Background?: string;
        ListBackground?: string;
        TextColor?: string;
        ButtonBackground?: string;
        ButtonTextColor?: string;
        ReverseOrder?: boolean;
        HasShadow?: boolean;
    }
    List: {
        Title: string;
        Description: string;
        Image: string;
        ButtonLabel?: string;
        ButtonOnClick?: () => void;
    }[];
    Layout?: {
        FullSize?: boolean;
        HasButton?: boolean
    }
}

export const TwinList = ({
    List,
    Style: {
        Background,
        ListBackground,
        ButtonBackground,
        ButtonTextColor,
        TextColor,
        ReverseOrder = false,
        HasShadow = true
    } = {},
    Layout: {
        FullSize = false,
        HasButton = true
    } = {}
}: TwinListProps) => {
    return (
        <section
            className={FullSize ? style.twin_list_section_full_size : style.twin_list_section}
            style={Background ? { background: Background } : undefined}
        >
            {List.map((item, index) => (
                <div
                    className={`
                        ${FullSize ? style.single_list_full_size : style.single_list}
                        ${(index % 2 === 0) !== ReverseOrder ? style.reverse_order : ''}
                        ${HasShadow && style.box_shadow}
                    `}
                    style={{
                        ...(ListBackground ? { background: ListBackground } : undefined),
                        ...(TextColor ? { color: TextColor } : undefined)
                    }}
                    key={index}
                >
                    <div
                        className={FullSize ? style.side_image_full_size : style.side_image}
                        style={{ backgroundImage: `url(${item.Image})` }}
                    />
                    <div className={style.content}>
                        <h1>{item.Title}</h1>
                        <p>{item.Description}</p>
                        {HasButton && (
                            <button
                                className={style.button}
                                style={{
                                    ...(ButtonBackground ? { background: ButtonBackground } : undefined),
                                    ...(ButtonTextColor ? { color: ButtonTextColor } : undefined)
                                }}
                                onClick={item.ButtonOnClick}
                            >
                                {item.ButtonLabel}
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};
