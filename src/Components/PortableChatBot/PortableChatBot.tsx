import { useEffect, useState, useRef } from 'react';
import style from './PortableChatBot.module.css'
import { Respond } from './Response';

interface PortableChatBotProps {
    Logo: string;
    IconStyle?: {
        ShadowColor?: string;
    }
    DefaultMessage?: string;
    Style?: {
        BackgroundColor?: string;
        TextColor?: string;
        ButtonBackgroundColor?: string;
        ButtonTextColor?: string;
        InputBackgroundColor?: string;
        InputTextColor?: string;
        UserMessageBackgroundColor?: string;
        UserMessageTextColor?: string;
        BotMessageBackgroundColor?: string;
        BotMessageTextColor?: string;
    }
    Dictionary: {
        FullMatch: string;
        PartialMatch: string;
        Unknown: string;
    }
}

export const PortableChatBot: React.FC<PortableChatBotProps> = ({Logo, IconStyle, Style, DefaultMessage, Dictionary}) => {
    
    const [isChatBoxVisible, setIsChatBoxVisible] = useState<boolean>(false);
    const [isGeneratingResponse, setIsGeneratingResponse] = useState<boolean>(false);
    const [conversation, setConversation] = useState<string[]>([]);
    const [hasBotResponded, setHasBotResponded] = useState<boolean>(false);
    const responseInterval = useRef<number | null>(null);

    // For input box
    const [inputBox, setInputBox] = useState<string>("");
    const handleInputBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputBox(e.target.value);
    }

    const generateBotResponse = (message: string) => {
        setIsGeneratingResponse(true);
        let response = "";
        let index = 0;
    
        responseInterval.current = window.setInterval(() => {
            if (index < message.length) {
                response += message[index];
                setConversation((prev) => [...prev.slice(0, -1), response]); // Update last message
                index++;
            } else {
                clearInterval(responseInterval.current!);
                responseInterval.current = null;
                setIsGeneratingResponse(false);
            }
        }, 1); // Adjust speed as needed
    };

    const stopGenerating = () => {
        if (responseInterval.current !== null) {
            clearInterval(responseInterval.current);
            responseInterval.current = null;
            setIsGeneratingResponse(false);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isGeneratingResponse || !inputBox.trim()) return; // Ignore empty inputs

        // Update conversation with user message
        setConversation((prev) => [...prev, inputBox]);

        // Clear input field
        setInputBox('');

        // Append an empty string to prepare for animation
        setConversation((prev) => [...prev, '']);

        // Simulate bot response
        generateBotResponse(Respond(inputBox, Dictionary.FullMatch, Dictionary.PartialMatch, Dictionary.Unknown));
    };

     // When chat box is opened, generate default message and bot response (once)
     useEffect(() => {
        if (isChatBoxVisible && !hasBotResponded) {
            setHasBotResponded(true); // Mark that the bot has responded
            generateBotResponse(`${DefaultMessage}`)
        }
    }, [isChatBoxVisible]);
    
    // Scroll during message generation
    const messageBoxRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (messageBoxRef.current) {
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    }, [conversation]);

    // Scroll when image was clicked
    useEffect(() => {
        if (messageBoxRef.current) {
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    }, [isChatBoxVisible]);

    return (
        <>
            {isChatBoxVisible ? (
                <>
                    <div 
                        className={style.chat_box}
                        style={{
                            ...(Style?.BackgroundColor ? {backgroundColor: Style.BackgroundColor} : undefined),
                            ...(Style?.TextColor ? {color: Style.TextColor} : undefined),
                        }}
                        >
                        <div 
                            className={style.chat_box_close_button} 
                            onClick={() => setIsChatBoxVisible(false)}
                        >✕</div>
                        <div className={style.chat_box_content}>
                            <div className={style.message_box} ref={messageBoxRef}>
                                {conversation.map((item, index) => (
                                    index % 2 === 0 ? (
                                    <div 
                                        key={index}
                                        className={style.msg_bot}
                                        style={{
                                        ...(Style?.BotMessageBackgroundColor ? { backgroundColor: Style.BotMessageBackgroundColor } : {}),
                                        ...(Style?.BotMessageTextColor ? { color: Style.BotMessageTextColor } : {}),
                                        }}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: item}}/>
                                    </div>
                                    ) : (
                                    <div 
                                        key={index}
                                        className={style.msg_user}
                                        style={{
                                        ...(Style?.UserMessageBackgroundColor ? { backgroundColor: Style.UserMessageBackgroundColor } : {}),
                                        ...(Style?.UserMessageTextColor ? { color: Style.UserMessageTextColor } : {}),
                                        }}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: item}}/>
                                    </div>
                                    )
                                ))}
                            </div>
                            <form 
                                className={style.form_box}
                                onSubmit={handleSubmit}
                                >
                                <input 
                                    className={style.input_box}
                                    type="text"
                                    style={{
                                        ...(Style?.InputBackgroundColor ? {backgroundColor: Style.InputBackgroundColor} : undefined),
                                        ...(Style?.InputTextColor ? {color: Style.InputTextColor} : undefined),
                                    }}
                                    value={inputBox}
                                    onChange={handleInputBox}
                                />
                                <input
                                    className={style.send_button}
                                    style={{
                                        ...(Style?.ButtonBackgroundColor ? {backgroundColor: Style.ButtonBackgroundColor} : undefined),
                                        ...(Style?.ButtonTextColor ? {color: Style.ButtonTextColor} : undefined),
                                    }}
                                    type="submit"
                                    value=">"
                                />
                            </form>
                            <br/>
                            {isGeneratingResponse && (
                                <div className={style.center}>
                                    <button 
                                        className={style.stop_generate_button}
                                        onClick={stopGenerating}
                                        >
                                        Stop Generating...
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <img 
                        src={Logo} 
                        alt="Bot Logo"
                        className={style.bot_icon}
                        style={{
                            ...(IconStyle?.ShadowColor ? {filter: `drop-shadow(0px 0px 3px ${IconStyle.ShadowColor})`} : undefined)
                        }}
                        onClick={() => setIsChatBoxVisible(true)}
                    />
                </>
            )}
        </>
    )
}
