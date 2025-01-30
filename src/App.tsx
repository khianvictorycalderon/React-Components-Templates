import { NavBar } from "./Components/NavigationBar/NavBar";
import { Cards } from "./Components/Cards/Cards";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/HeroSection/Hero";

const App = () => {

    // Navigation Bar Data
    const ButtonStyles = {
        // Optional Fields for customization
        // ButtonTextColor:"#FFFFFF",
        // NavBarBackground: "green"
    }
    const Logo = {
        imagePath: "image/Khian_Icon_Logo.png",
        href: "https://khian.netlify.app/"
    }
    const ButtonList = [
        {
            label: "Home",
            onClick: () => alert("Navigating to Home"),
        },
        {
            label: "About",
            onClick: () => alert("Navigating to About"),
        },
        {
            label: "Contact",
            onClick: () => alert("Navigating to Contact"),
        },
        {
            label: "Services",
            onClick: () => alert("Navigating to Services"),
        },
        {
            label: "FAQ",
            onClick: () => alert("Navigating to FAQ"),
        },
        {
            label: "Blog",
            onClick: () => alert("Navigating to Blog"),
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

    return (
        <>
            {/* Navigation Bar Usage */}
            <NavBar 
                Buttons={ButtonList} 
                ButtonStyle={ButtonStyles}
                Logo={Logo}
            />

            {/* Hero Section Usage */}
            <Hero
                Background="url('image/space.jpg')"
                Title="Sample Website"
                Description="Sample Description"
                ButtonLabel="CTA Button"
                ButtonOnClick={() => alert("You clicked the CTA")}
                // HasDarkCover={false} // Optional for Background if it is solid color
                // Logo="image/Khian_Icon_Logo.png"
            />

            {/* Cards Usage */}
            <Cards 
                // IsDarkTheme={true} // Optional if you want your cards to have dark theme
                CardSectionBG="rgb(229, 229, 229)"
                Cards={CardData}
            />

            {/* Footer should Always be Last*/}
            <Footer 
                Title="Website Created by Khian"
                Description={<p>Want to help me? 
                    <a 
                        href="https://khianvictorycalderon.github.io/donation/donate.html"
                        className="btn mx-2 btn-primary"
                        >
                        Donate to Khian
                    </a>
                </p>}
                Links={FooterSocialLinks}
                MiscLinks={FooterMiscLinks}
                MiscInfo={MiscInfo}
                Style={FooterStyle}
            />
        </>
    );
};

export default App;
