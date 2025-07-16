import { NavBar } from "./Components/NavigationBar/NavBar";
import { Cards } from "./Components/Cards/Cards";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/HeroSection/Hero";
import { TwinList } from "./Components/TwinList/TwinList";
import { PhotoGrid } from "./Components/PhotoGrid/PhotoGrid";
import { Banner } from "./Components/Banner/Banner";
import { SideBar } from "./Components/SideBar/SideBar";
import { TextGrid } from "./Components/TextGrid/TextGrid";
import { TextSection } from "./Components/TextSection/TextSection";
import { CenteredBoxBanner } from "./Components/CenteredBoxBanner/CenteredBoxBanner";
import { FormInput } from "./Components/FormInput/FormInput";
import { useEffect, useState } from "react";
import { PortableChatBot } from "./Components/PortableChatBot/PortableChatBot";
import { ImageTextPair } from "./Components/ImageTextPair/ImageTextPair";
import { useOnScrollAt } from "./Utilities/DetectScroll";
import Carousel, { CarouselFull } from "./Components/Carousel/Carousel";
import Collapsible from "./Components/Collapsible/Collapsible";
import FlexText from "./Components/FlexText/FlexText";
import VideoBackground from "./Components/VideoBackground/VideoBackground";

const App = () => {

    const Logo = {
        ImagePath: "image/Khian_Icon_Logo.png",
        Href: "https://khian.netlify.app/"
    }
    const ButtonList = [
        {
            Label: "Home",
            OnClick: () => alert("Navigating to Home"),
        },
        {
            Label: "About",
            OnClick: () => alert("Navigating to About"),
        },
        {
            Label: "Contact",
            OnClick: () => alert("Navigating to Contact"),
        },
        {
            Label: "Services",
            OnClick: () => alert("Navigating to Services"),
        },
        {
            Label: "FAQ",
            OnClick: () => alert("Navigating to FAQ"),
        },
        {
            Label: "Blog",
            OnClick: () => alert("Navigating to Blog"),
        }
    ];    
    // ------------------------------------------------

    // Cards Data
    const CardData = [
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 1",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 1")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 2",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 2")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 3",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 3")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 4",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 4")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 5",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 5")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 6",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 6")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 7",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 7")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 8",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 8")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 9",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 9")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 10",
            Description: "Sample Description",
            OnClick: () => alert("You clicked article 10")
        }
    ];    
    // ------------------------------------------------
    
    // Footer Data
    const FooterStyle = {
        // Optional: For customizing styles
        // TextColor: "red",
        // Background: "green"
    }
    const FooterSocialLinks = [
        {
            ImagePath: "image/github.png",
            Href: "https://github.com/khianvictorycalderon",
            Alt: "GitHub"
        },
        {
            ImagePath: "image/upwork.png",
            Href: "https://www.upwork.com/freelancers/~013a9c6d4543925f1e",
            Alt: "Upwork"
        },
        {
            ImagePath: "image/tiktok.png",
            Href: "https://www.tiktok.com/@khian.vc",
            Alt: "TikTok"
        },
    ];
    const FooterMiscLinks = [
        {
            Text: "Blogs",
            Href: "#"
        },
        {
            Text: "Features",
            Href: "#"
        },
        {
            Text: "Articles",
            Href: "#"
        },
        {
            Text: "News",
            Href: "#"
        },
        {
            Text: "Tutorials",
            Href: "#"
        },
        {
            Text: "Privacy Policy",
            Href: "#"
        },
        {
            Text: "Terms and Conditions",
            Href: "#"
        },
    ];
    const MiscInfo = (<>
        <p>All rights reserved 2025.</p>
    </>);
    // ------------------------------------------------

    // Twin List Data
    const TwinListData = [
        {
            Title: "Sample Title",
            Description: "Sample Description",
            Image: "image/sample_bg1.jpg",
            ButtonLabel: "A Button",
            ButtonOnClick: () => alert("You clicked the button")
        },
        {
            Title: "Sample Title",
            Description: "Sample Description",
            Image: "image/sample_bg2.jpg",
            ButtonLabel: "A Button",
            ButtonOnClick: () => alert("You clicked the button")
        },
        {
            Title: "Sample Title",
            Description: "Sample Description",
            Image: "image/space.jpg",
            ButtonLabel: "A Button",
            ButtonOnClick: () => alert("You clicked the button")
        },
    ];
    const TwinListStyle={
        Background:"rgb(0, 76, 83)",
        ListBackground: "rgb(245, 245, 245)",
        TextColor: "rgb(46, 46, 46)",
        ButtonBackground: "rgb(104, 30, 160)",
        ButtonTextColor: "rgb(255, 248, 248)",
        ReverseOrder: false, // false by default
        HasShadow: true // true by default
    }

    // ------------------------------------------------

    // Photo Grid Data
    const PhotoGridImages = [
        {
            Image: "image/github.png",
            Alt: "GitHub Logo",
            OnClick: () => alert("Clicked")
        },
        {
            Image: "image/tiktok.png",
            Alt: "Tiktok Logo",
            OnClick: () => alert("Clicked")
        },
        {
            Image: "image/mysql.png",
            Alt: "MySQL Logo",
            OnClick: () => alert("Clicked")
        },
        {
            Image: "image/php.png",
            Alt: "PHP Logo",
            OnClick: () => alert("Clicked")
        },
    ]

    // ------------------------------------------------

    // SideBar Buttons
    const SideBarButtons = [
        {
            Logo: "image/Khian_Icon_Logo.png",
            Label: "Home",
            OnClick:() => alert("You clicked Button 1")
        },
        {
            Logo: "image/tkinter.png",
            Label: "Services",
            OnClick:() => alert("You clicked Button 2")
        },
        {
            Logo: "image/tiktok.png",
            Label: "Privacy Policy",
            OnClick:() => alert("You clicked Button 3")
        },
        {
            Logo: "image/Khian_Icon_Logo.png",
            Label: "Terms & Condition",
            OnClick:() => alert("You clicked Button 1")
        },
        {
            Logo: "image/tkinter.png",
            Label: "Button 2",
            OnClick:() => alert("You clicked Button 2")
        },
        {
            Logo: "image/tiktok.png",
            Label: "Button 3",
            OnClick:() => alert("You clicked Button 3")
        },
        {
            Logo: "image/Khian_Icon_Logo.png",
            Label: "Button 1",
            OnClick:() => alert("You clicked Button 1")
        },
        {
            Logo: "image/tkinter.png",
            Label: "Button 2",
            OnClick:() => alert("You clicked Button 2")
        },
        {
            Logo: "image/tiktok.png",
            Label: "Button 3",
            OnClick:() => alert("You clicked Button 3")
        },
        {
            Logo: "image/Khian_Icon_Logo.png",
            Label: "Button 1",
            OnClick:() => alert("You clicked Button 1")
        },
        {
            Logo: "image/tkinter.png",
            Label: "Button 2",
            OnClick:() => alert("You clicked Button 2")
        },
        {
            Logo: "image/tiktok.png",
            Label: "Button 3",
            OnClick:() => alert("You clicked Button 3")
        },
        {
            Logo: "image/Khian_Icon_Logo.png",
            Label: "Button 1",
            OnClick:() => alert("You clicked Button 1")
        },
        {
            Logo: "image/tkinter.png",
            Label: "Button 2",
            OnClick:() => alert("You clicked Button 2")
        },
        {
            Logo: "image/tiktok.png",
            Label: "Button 3",
            OnClick:() => alert("You clicked Button 3")
        },
    ]

    // ------------------------------------------------
    
    // TextGrid Data
    const TextGridData = [
        {
            Label: "Front-End Developer",
            OnClick: () => alert("You've clicked me")
        },
        {
            Label: "Next-JS Developer",
            OnClick: () => alert("You've clicked me")
        },
        {
            Label: "PHP Developer",
            OnClick: () => alert("You've clicked me")
        },
        {
            Label: "MySQL Developer",
            OnClick: () => alert("You've clicked me")
        },
        {
            Label: "Back-End Developer",
            OnClick: () => alert("You've clicked me")
        },
        {
            Label: "Front-End Designer",
            OnClick: () => alert("You've clicked me")
        },
        {
            Label: "Firebase Developer",
            OnClick: () => alert("You've clicked me")
        },
    ]
    
    // ------------------------------------------------

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [birthdate, setBirthdate] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [country, setCountry] = useState<string>("");
    const [feedback, setFeedback] = useState<{type: "error" | "warning" | "success", message: string} | null>();

    const FormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Error: Required fields check
    if (!username || !email || !birthdate || !gender || !country || hobbies.length === 0) {
        setFeedback({
            type: "error",
            message: "Please fill in all required fields."
        });
        return;
    }

    // Error: Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setFeedback({
            type: "error",
            message: "Invalid email format."
        });
        return;
    }

    // Warning: Age is 0 or unrealistic
    if (age <= 0 || age > 120) {
        setFeedback({
            type: "warning",
            message: "Please enter a realistic age."
        });
        return;
    }

    // Success: All validations passed
    setFeedback({
        type: "success",
        message: "Form submitted successfully!"
    });

    alert(`
            Username: ${username}
            Email: ${email}
            Age: ${age}
            Birthdate: ${birthdate}
            Gender: ${gender}
            Country: ${country}
            Hobbies: 
            ${hobbies.join(", ")}`
        );
    };


    // Dictionary List:
    const PartialMatchDictionaryWithCommand = {
        "close,this,window=:=Sure, closing in a few seconds...": () => setTimeout(() => window.close(), 1000),
        "alert,me=:=Okay, the alert message will be shown shortly...": () => setTimeout(() => alert("This is a sample alert message"), 1000),
        "open|visit|go to,khian,website=:=Opening...<or>Opening Khian's website...<or>Sure, please wait...": () => setTimeout(() => window.open("https://khian.netlify.app/", "_blank"), 1000),
        "khian^open,his,website=:=Sure, openning his website...": () => setTimeout(() => window.open("https://khian.netlify.app/", "_blank"), 1000),
    }
    const FullMatchDictionary = `
        what are you=:=
            I am a chat bot ready to assist you.
        <and>how are you=:=
            I am fine thank you for asking.
            <or>Fine, thanks for asking.
    `;
    const PartialMatchDictionary = `
        which|what,model,you^i,not,use,model^sure|ceratin|really=:=
            Yes, I am chatbot trained from scratch and also can manually be trained by anyone.<or>
            Yeah, I am a chatbot trained from scratch. I have the capability to respond immediately.
        <and>is,there,i,can,help|assist^yes|yeah|yep=:=
            Okay then, what else can I assist you?<or>
            Sure, let me know about that.
        <and>who,khian=:=
            Khian is a person.
        <and>a,bot^what,kind=:=
            A kind enough to you.
        <and>which|what,model,you=:=
            I do not use any kind of <b>model</b> as I am trained from scratch.<or>
            I do not use any <u>AI model</u> as I am manually trained from scratch.
        <and>what,your,name=:=
            My name is KVBot, ready to assist you.<or>
            I'm KVBot.
        <and>hello|hi=:=
            Hi there, how are you?<or>
            Hello there too, how can I help you?
        <and>what,are,you/define,yourself=:=
            I am KVBot, a chatbot willing to assist you to anything you need.
        <and>very,long,message=:=
            Sure, here is a very long message. JSAIFSAIOFJSAIFJDSOJGADSODSJFOSDJFOADSJFOADSJFOADSJFADSFOADJFPADSJFAPSDFOKADJSFPOAJSD FMPVOADJSFPADSFJ KVADSPFKVJADSFPVAS DKFVPASDKFJVASD PFVJASPDFVKASDPFVJASDPOFJASDVPF
        <and>ok,then=:=
            Glad to help, is there anything I can assist you?<or>
            Appreciate it, is there anything I can help you?
    `;
    const UnknownFallBack = `
        Sorry but I cannot understand you, this is a very long response design to test the stop generation.,.
        Apologies but I don't understand you, this is a very long response design to test the stop generation.,.
        My bad, I don't know what you are saying, this is a very long response design to test the stop generation
    `;

    // Recording user and bot conversation ------------------------------------------------
    const [enteredUserInput, setEnteredUserInput] = useState<string>("");;
    const [botLatestResponse, setBotLatestResponse] = useState<string>("");

    useEffect(() => {
        console.log(`User: ${enteredUserInput}`);
        console.log(`Bot: ${botLatestResponse}`);

    },[enteredUserInput]);

    // Navbar changing color
    const [navBarBG, setNavBarBG] = useState<string>("rgb(0, 0, 0)");
    useOnScrollAt(
    "hero-section-sample",
    () => {
        // Only changes on desktop screens
        if (window.innerWidth >= 1024) {
            setNavBarBG("rgba(0, 0, 0, 0)");
        } else {
            setNavBarBG("rgb(36, 36, 36)"); // This ensures that the background is consistent
        }
    },
    () => setNavBarBG("rgb(36, 36, 36)")
    );


    return (
        <>
            {/* Portable Chat Bot Usage */}
            <PortableChatBot
                Title="Ask our AI assistant"
                Dictionary={{
                    FullMatch: FullMatchDictionary,
                    PartialMatch: PartialMatchDictionary,
                    Unknown: UnknownFallBack,
                    PartialMatchWithCommand: PartialMatchDictionaryWithCommand
                }}
                IconStyle={{
                    ShadowColor: "black"
                }}
                DefaultMessage="How can I help you?"
                Style={{
                    BackgroundColor: "rgb(76, 97, 102)",
                    TextColor: "rgb(229, 229, 229)",
                    ButtonBackgroundColor: "rgb(0, 114, 170)",
                    ButtonTextColor: "rgb(24rgb(17, 154, 29)",
                    InputBackgroundColor: "rgb(240, 240, 240)",
                    InputTextColor: "rgb(0, 0, 0)",
                    BotMessageBackgroundColor: "rgb(43, 106, 148)",
                    BotMessageTextColor: "rgb(241, 235, 235)",
                    UserMessageBackgroundColor: "rgb(228, 228, 228)",
                    UserMessageTextColor: "rgb(0, 0, 0)",
                    MessageBoxBackground: "rgb(53, 67, 71)"
                }}
                Data={{
                    UserInput: setEnteredUserInput,
                    BotResponse: setBotLatestResponse
                }}
            />

            {/* SideBar Usage */}
            <SideBar
            Logo="image/Khian_Icon_Logo.png"
            Title="Sample Title "
            Style={{
                Background: "rgb(21, 21, 21)", // Optional, if you want to customize the background
                Textcolor: "rgb(236, 236, 236)"
            }}
            Buttons={SideBarButtons}
            Footer={
                <>
                    <h4>Website Title</h4>
                    <hr/>
                    <p>All rights reserved <a href=""></a>.</p>
                </>
            }
            InitiallyShown={true} // By default, it is true that it is initially shown
            />

            {/* Navigation Bar Usage */}
            <NavBar 
                Buttons={ButtonList} 
                Style={{
                    NavBarBackground: navBarBG
                }}
                Logo={Logo}
                Type="transparent"
            />

            {/* Hero Section Usage */}
            <div id="hero-section-sample">
                <Hero
                    Title="Sample Website"
                    Description="Sample Description"
                    ButtonLabel="CTA Button"
                    ButtonOnClick={() => alert("You clicked the CTA")}
                    Logo="image/Khian_Icon_Logo.png"
                    Style={{
                        BackgroundImage:"image/space.jpg",
                        ButtonBackground: "rgb(25, 60, 216)",
                        ButtonTextColor: "rgb(255, 255, 255)",
                        FixedBackgroundPosition: true,
                        RoundedButton: true
                    }}
                    // RoundedLogo={true} // Optional for rounded logo, by default it is false
                    // HasDarkCover={false} // Optional for Background if it is solid color
                />
            </div>

            {/* Collapsible */}
            <Collapsible 
                Title="Collapsible"
                Style={{
                    TextColor: "rgb(212, 212, 212)",
                    BackgroundColor: "rgb(31, 31, 31)",
                    Rounded: true,
                    FontTitleSize: "16pt"
                }}
                >
                This is a hidden content<br/>
                This is a hidden content<br/>
                This is a hidden content<br/>
                This is a hidden content<br/>
                This is a hidden content<br/>
                This is a hidden content<br/>
                This is a hidden content<br/>
                This is a hidden content<br/>
            </Collapsible>

            {/* Carousel Usage */}
            <Carousel
                Images={[
                    {
                        Title: "Generals",
                        Description: "This is a sample description for generals",
                        ImgPath: "image/generals.jpg",
                        Alt: "Generals Image"
                    },
                    {
                        Title: "Yuri's Revenge",
                        Description: "This is a sample description for yuri's revenge",
                        ImgPath: "image/yuri.jpg",
                        Alt: "Yuri's Image"
                    },
                    {
                        Title: "Minecraft",
                        Description: "This is a sample description for minecraft",
                        ImgPath: "image/minecraft.jpg",
                        Alt: "Minecraft's Image"
                    },
                    {
                        Title: "GTA San Andreas",
                        Description: "This is a sample description for GTA San Andreas",
                        ImgPath: "image/gta_sa.jpg",
                        Alt: "GTA SA's Image"
                    },
                ]}
                Style={{
                    HRColor: "rgb(255, 255, 255)",
                    TextColor: "rgb(255, 255, 255)",
                    Background: "rgb(45, 45, 45)"
                }}
            />

            <Carousel
                Images={[
                    {
                        Title: "Generals",
                        Description: "This is a sample description for generals",
                        ImgPath: "image/generals.jpg",
                        Alt: "Generals Image"
                    },
                    {
                        Title: "Yuri's Revenge",
                        Description: "This is a sample description for yuri's revenge",
                        ImgPath: "image/yuri.jpg",
                        Alt: "Yuri's Image"
                    },
                    {
                        Title: "Minecraft",
                        Description: "This is a sample description for minecraft",
                        ImgPath: "image/minecraft.jpg",
                        Alt: "Minecraft's Image"
                    },
                    {
                        Title: "GTA San Andreas",
                        Description: "This is a sample description for GTA San Andreas",
                        ImgPath: "image/gta_sa.jpg",
                        Alt: "GTA SA's Image"
                    },
                ]}
                Style={{
                    HRColor: "rgb(255, 255, 255)",
                    TextColor: "rgb(255, 255, 255)",
                    Background: "rgb(40, 40, 40)"
                }}
                ReversedOrder
            />

            <CarouselFull
                Images={[
                    {
                        Title: "Generals",
                        Description: "This is a sample description for generals",
                        ImgPath: "image/generals.jpg",
                        Alt: "Generals Image"
                    },
                    {
                        Title: "Yuri's Revenge",
                        Description: "This is a sample description for yuri's revenge",
                        ImgPath: "image/yuri.jpg",
                        Alt: "Yuri's Image"
                    },
                    {
                        Title: "Minecraft",
                        Description: "This is a sample description for minecraft",
                        ImgPath: "image/minecraft.jpg",
                        Alt: "Minecraft's Image"
                    },
                    {
                        Title: "GTA San Andreas",
                        Description: "This is a sample description for GTA San Andreas",
                        ImgPath: "image/gta_sa.jpg",
                        Alt: "GTA SA's Image"
                    },
                ]}
            />

            {/* Twin List Usage */}
            <TwinList
                List={TwinListData}
                Style={TwinListStyle}
                Layout={{
                    FullSize: false, // false by default
                    HasButton: true // true by default
                }}
            />

            {/* Cards Usage */}
            <Cards 
                Cards={CardData}
                Style={{
                    SectionBackground: "rgb(59, 59, 59)",
                    CardsBackground: "rgb(37, 37, 37)",
                    CardsTextColor: "rgb(255, 255, 255)",
                }}
            />

            {/* Centered Boc Banner Usage */}
            <CenteredBoxBanner
                Content={
                    <>
                        {/* Form Input Usage */}
                        <FormInput
                            Input={[
                                {
                                    Label: "Username",
                                    ID: "username",
                                    Pattern: "[a-zA-z]+",
                                    Value: username,
                                    OnChange: (e) => setUsername(e.target.value)
                                },
                                {
                                    Label: "Email",
                                    ID: "email",
                                    Value: email,
                                    OnChange: (e) => setEmail(e.target.value)
                                },
                                {
                                    Label: "Age",
                                    ID: "age",
                                    Type: "number",
                                    Value: age,
                                    OnChange: (e) => setAge(Number(e.target.value))
                                },
                                {
                                    Label: "Birthday",
                                    ID: "bday",
                                    Type: "date",
                                    Value: birthdate,
                                    IsRequired: true,
                                    OnChange: (e) => setBirthdate(e.target.value)
                                },
                                {
                                    Label: "Gender",
                                    ID: "gender",
                                    Type: "radio",
                                    Name: "gender",
                                    Value: gender,
                                    OnChange: (e) => setGender(e.target.value),
                                    Options: [
                                        { label: "Male", value: "male" },
                                        { label: "Female", value: "female" },
                                    ],
                                    IsRequired: true,
                                },
                                {
                                    Label: "Country",
                                    ID: "country",
                                    Type: "select",
                                    Value: country,
                                    OnChange: (e) => setCountry(e.target.value),
                                    Options: [
                                        { label: "USA", value: "usa" },
                                        { label: "Canada", value: "canada" },
                                        { label: "UK", value: "uk" },
                                    ],
                                },
                                {
                                    Label: "Hobbies",
                                    ID: "hobbies",
                                    Type: "checkbox",
                                    Value: hobbies, // Ensure this is an array of strings
                                    OnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                                        const target = e.target as HTMLInputElement;
                                        setHobbies((prev) =>
                                            target.checked ? [...prev, target.value] : prev.filter((h) => h !== target.value)
                                        );
                                    },
                                    Options: [
                                        { label: "Reading", value: "reading" },
                                        { label: "Gaming", value: "gaming" },
                                        { label: "Cooking", value: "cooking" },
                                    ],
                                    IsRequired: false,
                                },                                                                      
                            ]}
                            FeedbackMessage={feedback}
                            OnSubmit={(e) => FormSubmitted(e)}
                            SubmitLabel="Custom Submit Message"
                            Style={{
                                Rows: 2,
                                TextColor: "rgb(0, 0, 0)",
                                BackgroundColor: "rgba(255, 255, 255, 0)",
                                InputTextColor: "rgb(36, 36, 36)",
                                InputBackgroundColor: "rgb(254, 254, 254)",
                                ButtonTextColor: "black",
                                ButtonButtonBackground: "yellow"
                            }}
                        />
                    </>
                }
                Style={{
                    BackgroundImage: "image/everest.jpg",
                    TextColor: "rgb(255, 255, 255)",
                    BoxBackgroundColor: "rgba(255, 255, 255, 0.86)"
                }}
            />

            {/* PhotoGrid Usage */}
            <PhotoGrid
                Title="Photo Grid"
                Background="rgb(33, 33, 33)"
                Images={PhotoGridImages}
                Style={{
                    TextColor: "white"
                }}
            />

            {/* TextGrid Usage */}
            <TextGrid
                Title="Text Grid"
                Text={TextGridData}
                Style={{
                    Background: "rgb(45, 45, 45)",
                    TextBackground: "rgba(30, 30, 30, 0)",
                    TextColor: "rgb(255, 255, 255)",
                    TextBorderColor: "rgb(243, 243, 243)"
                }}
            />

            {/* ImageTextPair Usage */}
            <ImageTextPair
                Title="Image Text Pair"
                Rows={2}
                Style={{
                    BackgroundColor: "rgb(85, 85, 85)",
                    TextColor: "white"
                }}
                List={[
                    {
                        Image:"image/space.jpg",
                        ImageHref: "https://khian.netlify.app",
                        TargetHref: "_self",
                        RoundedImage: false,
                        Title:"Sample Title fasdoif asdiof jadosif japiodiaodps iojp jasiodfjaosdjfpo",
                        Description: (
                            <>
                                ajfioasjfisajfoisdjfioadsjfpo
                            </>
                        )
                    },
                    {
                        Image:"image/space.jpg",
                        RoundedImage: false,
                        Title:"Sample Title fasdoif asdiof jadosif japiodiaodps iojp jasiodfjaosdjfpo",
                        Description: (
                            <>
                                <a href="https://khian.netlify.app/">This is a sample link text</a>
                            </>
                        )
                    },
                    {
                        Image:"image/tiktok.pngs",
                        Alt: "Tiktok Logo",
                        RoundedImage: false,
                        Title:"Sample Title",
                        Description: (
                            <>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                            </>
                        )
                    },
                    {
                        Image:"image/space.jpg",
                        RoundedImage: true,
                        Title:"Sample Title fasdoif asdiof jadosif japiodiaodps iojp jasiodfjaosdjfpo",
                        Description: (
                            <>
                                ajfioasjfisajfoisdjfioadsjfpo
                            </>
                        )
                    },
                    {
                        Image:"image/tiktok.png",
                        RoundedImage: false,
                        Title:"Sample Title",
                        Description: (
                            <>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                            </>
                        )
                    },
                    {
                        Image:"image/space.jpg",
                        RoundedImage: false,
                        Title:"Sample Title fasdoif asdiof jadosif japiodiaodps iojp jasiodfjaosdjfpo",
                        Description: (
                            <>
                                ajfioasjfisajfoisdjfioadsjfpo
                            </>
                        )
                    },
                    {
                        Image:"image/tiktok.png",
                        RoundedImage: false,
                        Title:"Sample Title",
                        Description: (
                            <>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                                samdgkl<br/>
                            </>
                        )
                    },
                ]}
            />

            {/* TextSection Usage */}
            <TextSection
                Title="Text Section"
                Content={<p>Hello World</p>}
                Style={{
                    Background: "rgb(34, 34, 34)",
                    TextColor: "rgb(249, 249, 249)"
                }}
            />

            {/* FlexText Usage */}
            <FlexText 
                Title="Flex Text"
                TextData={
                    [
                        [<>Row 1<br/> Column 1</>, "Row 1 Column 2"],
                        ["Row 2 Column 1", "Row 2 Column 2", "Row 2 Column 3"],
                        ["Row 3 Column 1"],
                        ["Row 4 Column 1", "Row 4 Column 2"],
                    ]
                }
                Style={{
                    TextColor: "black",
                    Background: "white"
                }}
            />

            {/* Banner Usage (Multiple Banner for Multiple Images) */}
            <Banner
                Title="Banner 1"
                Description={
                    <>
                        <p>This is a Description</p>
                        <button onClick={() => alert("You clicked me")} className="btn btn-primary">Click Me</button>
                    </>
                }
                BackgroundImage="image/space.jpg"
            />
            <Banner
                Title="Banner 2"
                Description={
                    <>
                        <p>This is a Description</p>
                        <button onClick={() => alert("You clicked me")} className="btn btn-primary">Click Me</button>
                    </>
                }
                BackgroundImage="image/sample_bg1.jpg"
            />

            {/* Video Background */}
            <VideoBackground 
                BGColor="black"
                VideoPath="https://c10.patreonusercontent.com/4/patreon-media/p/post/118056467/f5d8df73313641518cfc48a58975301b/eyJhIjoxLCJwIjoxfQ%3D%3D/1.mp4?token-hash=-KbTkakEk3ehFCYCT0dxdaZT9ONm8JX1TmUy-YutGyI%3D&token-time=1752796800"
                OverlayVisibility={0.7} // 0.5 by default, 0 for no overlay, 1 for full dark overlay
                >
                <h1>This is content</h1>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
            </VideoBackground>

            {/* Footer should Always be Last*/}
            <Footer 
                Title={
                    <h4>
                        Website Created by <a href="">Khian</a>
                    </h4>
                }
                Description={<p>Want to help me? 
                    <a 
                        href="https://khianvictorycalderon.github.io/donation/donate.html"
                        className="btn mx-2 btn-primary"
                        >
                        Donate to Khian
                    </a>
                </p>}
                Logo="image/Khian_Icon_Logo.png"
                Links={FooterSocialLinks}
                MiscLinks={FooterMiscLinks}
                MiscInfo={MiscInfo}
                Style={FooterStyle}
            />
        </>
    );
};

export default App;
