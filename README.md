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

### Example Usage

```tsx
import React from 'react';
import { NavBar } from './NavBar';

const handleButtonClick = () => {
  alert('Button clicked!');
};

const App = () => {
  return (
    <div>
      <NavBar
        ButtonStyle={{
          ButtonTextColor: 'white', // Optional: Custom text color for buttons
          NavBarBackground: 'blue', // Optional: Custom navbar background color
        }}
        Buttons={[
          { label: 'Home', onClick: handleButtonClick },
          { label: 'About', onClick: handleButtonClick },
          { label: 'Contact', onClick: handleButtonClick }
        ]}
        Logo={{
          imagePath: '/path/to/logo.png', // Path to logo image
          href: 'https://example.com', // Optional: Logo link
        }}
      />
    </div>
  );
}

export default App;
  
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

### Example Usage

```tsx
import React from 'react';
import { Cards } from './Cards';

const cardData = [
  {
    ImagePath: 'path/to/image.jpg', // Optional image path
    Title: 'Card Title 1',
    Description: 'Description of the card.',
    Onclick: () => alert('Card 1 clicked'),
  },
  {
    Title: 'Card Title 2',
    Description: 'Description of the card.',
    Onclick: () => alert('Card 2 clicked'),
  },
];

const App = () => {
  return (
    <div>
      <Cards
        IsDarkTheme={true} // Optional, defaults to false
        CardSectionBG="lightgray" // Optional, for setting custom background color
        Cards={cardData} // Array of card data
      />
    </div>
  );
}

export default App;