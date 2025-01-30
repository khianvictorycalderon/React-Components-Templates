import { NavBar } from "./Components/NavigationBar/NavBar";
import { Cards } from "./Components/Cards/Cards";

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

    return (
        <>
            {/* Navigation Bar Usage */}
            <NavBar 
                Buttons={ButtonList} 
                ButtonStyle={ButtonStyles}
                Logo={Logo}
            />

            {/* Cards Usage */}
            <Cards 
                // IsDarkTheme={true} // Optional if you want your cards to have dark theme
                CardSectionBG="rgb(229, 229, 229)"
                Cards={CardData}
            />
        </>
    );
};

export default App;
