import { useEffect, useState, useRef } from 'react';
import style from './PortableChatBot.module.css'
import { Respond } from './Response';

interface PortableChatBotProps {
    Logo: string;
    Title: string;
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
        MessageBoxBackground?: string;
        UserMessageBackgroundColor?: string;
        UserMessageTextColor?: string;
        BotMessageBackgroundColor?: string;
        BotMessageTextColor?: string;
    }
    Dictionary: {
        PartialMatchWithCommand?: Record<string, any>;
        FullMatch: string;
        PartialMatch: string;
        Unknown: string;
    }
}

export const PortableChatBot: React.FC<PortableChatBotProps> = ({Logo, IconStyle, Style, DefaultMessage, Dictionary, Title}) => {
    
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
    
        const responseInterval = setInterval(() => {
            if (index < message.length) {
                response += message[index];
                setConversation((prev) => [...prev.slice(0, -1), response]); // Update the last message with the bot's response
                index++;
            } else {
                clearInterval(responseInterval);
                setIsGeneratingResponse(false); // Stop generating after completion
            }
        }, 1); // Adjust speed for typing effect
    };

    const stopGenerating = () => {
        if (responseInterval.current !== null) {
            clearInterval(responseInterval.current);
            responseInterval.current = null;
            setIsGeneratingResponse(false);
        }
    };

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page reload

        if (isGeneratingResponse || inputBox.trim() === "") {
            return; // Ignore empty inputs or when response is being generated
        }

        // Step 1: Append user message to conversation
        setConversation((prev) => [...prev, inputBox]);

        // Clear input field
        setInputBox("");

        // Step 2: Add an empty string for the bot's response placeholder
        setConversation((prev) => [...prev, ""]);

        // Step 3: Generate bot response using the user input and conversation history
        const botResponse = Respond(
            [...conversation, inputBox], // Include the latest user message in conversation history
            Dictionary.PartialMatchWithCommand || {},
            Dictionary.FullMatch,
            Dictionary.PartialMatch,
            Dictionary.Unknown
        );

        // Step 4: Call the function to generate the bot's response with typing effect
        generateBotResponse(botResponse);
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
                        <div className={style.center}><b>{Title}</b></div>
                        <div className={style.chat_box_content}>
                            <div 
                                className={style.message_box} 
                                ref={messageBoxRef}
                                style={{
                                    ...(Style?.MessageBoxBackground ? {background: Style.MessageBoxBackground} : undefined)
                                }}
                                >
                                {conversation.map((item, index) => (
                                    index % 2 === 0 ? (
                                    <div 
                                        className={style.mgb_bot_wrapper}
                                        key={index}
                                        >
                                        <div className={style.msg_bot_logo_wrapper}>
                                            <img className={style.msg_bot_logo} src={Logo} />
                                        </div>
                                        <div 
                                            className={style.msg_bot}
                                            style={{
                                            ...(Style?.BotMessageBackgroundColor ? { backgroundColor: Style.BotMessageBackgroundColor } : {}),
                                            ...(Style?.BotMessageTextColor ? { color: Style.BotMessageTextColor } : {}),
                                            }}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: item}}/>
                                        </div>
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
