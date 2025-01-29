import { NavBar } from "./Components/NavigationBar/NavBar";

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

    return (
        <>
            {/* Navigation Bar Usage */}
            <NavBar 
                Buttons={ButtonList} 
                ButtonStyle={ButtonStyles}
                Logo={Logo}
            />
        </>
    );
};

export default App;
