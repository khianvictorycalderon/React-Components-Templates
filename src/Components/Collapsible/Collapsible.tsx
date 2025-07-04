import { useState } from 'react';
import style from './Collapsible.module.css'

interface CollapsibleProps {
    children: React.ReactNode;
    Title: string;
    Style?: {
        TextColor?: string;
        BackgroundColor?: string;
        HRColor?: string;
    }
}

export default function Collapsible({ children, Title, Style }: CollapsibleProps) {
    
    const [isContentShown, setIsContentShown] = useState<boolean>(false);
    
    return (
        <div className={style.collapsible_box} style={{backgroundColor: Style?.BackgroundColor || "rgb(236, 236, 236)"}}>
            <div className={style.title_box}>
                <h1 style={{color: Style?.TextColor || "black"}}>{Title}</h1>
                <button className={style.toggle_button} style={{color: Style?.TextColor || "black", cursor: "pointer"}} onClick={() => setIsContentShown(!isContentShown)}>{isContentShown ? "▲" : "▼"}</button>
            </div>
            <hr style={{borderColor: Style?.HRColor || "black"}}/>
            <div style={{color: Style?.TextColor || "black"}}>
                {isContentShown && children}
            </div>
        </div>
    )
}