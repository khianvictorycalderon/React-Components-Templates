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

const App = () => {

    // Navigation Bar Data
    const ButtonStyles = {
        // Optional Fields for customization
        // ButtonTextColor:"#FFFFFF",
        // NavBarBackground: "green"
    }
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
            Onclick: () => alert("You clicked article 1")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 2",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 2")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 3",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 3")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 4",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 4")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 5",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 5")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 6",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 6")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 7",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 7")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 8",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 8")
        },
        {
            ImagePath: "image/sample_bg2.jpg",
            Title: "Article 9",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 9")
        },
        {
            ImagePath: "image/sample_bg1.jpg",
            Title: "Article 10",
            Description: "Sample Description",
            Onclick: () => alert("You clicked article 10")
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
        ReverseOrder: false // false by default
    }

    // ------------------------------------------------

    // Photo Grid Data
    const PhotoGridImages = [
        {
            Image: "image/github.png",
            Alt: "GitHub Logo",
            Onclick: () => alert("Clicked")
        },
        {
            Image: "image/tiktok.png",
            Alt: "Tiktok Logo",
            Onclick: () => alert("Clicked")
        },
        {
            Image: "image/mysql.png",
            Alt: "MySQL Logo",
            Onclick: () => alert("Clicked")
        },
        {
            Image: "image/php.png",
            Alt: "PHP Logo",
            Onclick: () => alert("Clicked")
        },
    ]

    // ------------------------------------------------

    // SideBar Buttons
    const SideBarButtons = [
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

    return (
        <>
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
                Style={ButtonStyles}
                Logo={Logo}
            />

            {/* Hero Section Usage */}
            <Hero
                Title="Sample Website"
                Description="Sample Description"
                ButtonLabel="CTA Button"
                ButtonOnClick={() => alert("You clicked the CTA")}
                Logo="image/Khian_Icon_Logo.png"
                Style={{
                    BackgroundImage:"image/space.jpg",
                    ButtonBackground: "rgb(25, 60, 216)",
                    ButtonTextColor: "rgb(255, 255, 255)"
                }}
                // RoundedLogo={true} // Optional for rounded logo, by default it is false
                // HasDarkCover={false} // Optional for Background if it is solid color
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

            {/* PhotoGrid Usage */}
            <PhotoGrid
                Background="rgb(33, 33, 33)"
                Images={PhotoGridImages}
            />

            {/* TextGrid Usage */}
            <TextGrid
                Text={TextGridData}
                Style={{
                    Background: "rgb(45, 45, 45)",
                    TextBackground: "rgba(30, 30, 30, 0)",
                    TextColor: "rgb(255, 255, 255)",
                    TextBorderColor: "rgb(243, 243, 243)"
                }}
            />
            {/* TextSection Usage */}
            <TextSection
                Title="Sample Title"
                Content={<p>Hello World</p>}
                Style={{
                    Background: "rgb(34, 34, 34)",
                    TextColor: "rgb(249, 249, 249)"
                }}
            />

            {/* Banner Usage (Multiple Banner for Multiple Images) */}
            <Banner
                Title="Sample Title"
                Description={
                    <>
                        <p>This is a Description</p>
                        <button onClick={() => alert("You clicked me")} className="btn btn-primary">Click Me</button>
                    </>
                }
                BackgroundImage="image/space.jpg"
            />
            <Banner
                Title="Sample Title"
                Description={
                    <>
                        <p>This is a Description</p>
                        <button onClick={() => alert("You clicked me")} className="btn btn-primary">Click Me</button>
                    </>
                }
                BackgroundImage="image/sample_bg1.jpg"
            />

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
