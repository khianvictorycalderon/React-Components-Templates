# React Reusable Components

## Navigation Bar
The `NavBar` component is a custom navigation bar that is mobile responsive and supports customization of button styles and logo. 

### `NavBarProps`

- `ButtonStyle`: Customize the button and navbar styles
    - **`ButtonTextColor`** *(optional)*: The text color for the buttons.
    - **`NavBarBackground`** *(optional)*: The background color for the navigation bar.

- `Buttons`: A list of buttons to display in the navbar.
    - **`label`**: The text to display inside the button.
    - **`onClick`**: A callback function to be invoked when the button is clicked.

- `Logo`: An optional logo displayed on the navbar.
    - **`imagePath`**: The path to the logo image.
    - **`href`** *(optional)*: If provided, wraps the logo in an anchor tag linking to the specified URL.
  
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