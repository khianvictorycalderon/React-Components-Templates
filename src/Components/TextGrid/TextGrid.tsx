import style from './TextGrid.module.css'

interface TextGridProps {
    Style?: {
        Background?: string;
        TextBackground?: string;
        TextColor?: string;
        TextBorderColor?: string;
    };
    Text: {
        Label: string;
        OnClick: () => void;
    }[];
}

export const TextGrid = ({Text, Style}: TextGridProps) => {
    return (
        <div 
            style={
                Style?.Background ? {background: Style.Background} : undefined
            }
            className={style.text_grid}
            >
            {Text.map((item, index) => (
                <div
                    title={item.Label}
                    className={style.label}
                    onClick={item.OnClick}
                    key={index}
                    style={{
                        ...(Style?.TextBackground ? {background: Style.TextBackground} : undefined),
                        ...(Style?.TextColor ? {color: Style.TextColor} : undefined),
                        ...(Style?.TextBorderColor ? {borderColor: Style.TextBorderColor} : undefined),
                    }}
                    >
                        {item.Label}
                </div>
            ))}
        </div>
    )
}