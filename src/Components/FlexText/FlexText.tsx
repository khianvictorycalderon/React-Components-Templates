import style from './FlexText.module.css'

interface TextDataProps {
  Title: string;
  TextData: React.ReactNode[][];
  Style?: {
    TextColor?: string;
    Background?: string; // Could be color or background image
  }
}

export default function FlexText({ Title, TextData, Style }: TextDataProps) {
    const containerStyle: React.CSSProperties = {
        '--bg': Style?.Background || 'transparent',
        '--text-color': Style?.TextColor || 'inherit',
    } as React.CSSProperties;

    return (
        <div className={style.container} style={containerStyle}>
            <span className={style.title}>{Title}</span>
            {TextData.map((row, rowIndex) => (
                <div key={rowIndex} className={style.row}>
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={style.cell}>
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
