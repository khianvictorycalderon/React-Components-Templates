import { NavBar } from "./Components/NavigationBar/NavBar";

const App = () => {
    const buttonStyle = {
        // Optional Fields for customization
        // ButtonTextColor:"#FFFFFF",
        // NavBarBackground: "green"
    }
    const Logo = {
        imagePath: "https://avatars.githubusercontent.com/u/65080565?v=4",
        href: "https://khian.netlify.app/"
    }
    const buttons = [
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
            <NavBar 
                Buttons={buttons} 
                ButtonStyle={buttonStyle}
                Logo={Logo}
            />
        </>
    );
};

export default App;
