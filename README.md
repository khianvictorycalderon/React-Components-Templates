# React Reusable Components

## Navigation Bar

A reusable `NavBar` component built with TypeScript and React for creating a customizable navigation bar with support for mobile responsiveness and dynamic buttons.

### `NavBarProps`

- `ButtonStyle`: An object for customizing the appearance of the buttons and navbar.
  - **`ButtonTextColor`** *(optional)*: The color of the text on the buttons.
  - **`NavBarBackground`** *(optional)*: The background color of the navbar.
- `Buttons`: An array of objects representing the buttons in the navbar. Each object contains:
  - **`label`**: The text displayed on the button.
  - **`onClick`**: A callback function triggered when the button is clicked.
- `Logo` *(optional)*: An object for displaying a logo in the navbar.
  - **`imagePath`**: The path to the logo image.
  - **`href`** *(optional)*: The URL to navigate to when the logo is clicked.
  
## Cards

A reusable `Cards` component built with TypeScript and React for displaying a list of cards with optional customizations.

### `CardProps`

- `IsDarkTheme` *(optional)*: A boolean to set the theme to dark. Defaults to `false`.
- `CardSectionBG` *(optional)*: A custom background color for the card section.
- `Cards`: An array of objects representing each card. Each object can have:
    - **`ImagePath`** *(optional)*: The path to an image for the card.
    - **`Title`**: The title text for the card.
    - **`Description`**: The description text for the card.
    - **`Onclick`**: A callback function triggered when the card is clicked.


# Example usage is in the SRC/App.tsx