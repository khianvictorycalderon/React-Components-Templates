# React Reusable Components

## Navigation Bar

A reusable `NavBar` component built with TypeScript and React for creating a responsive navigation bar with buttons, logo, and optional customization of styles.

### `NavBarProps`

- `Buttons`: An array of objects representing the buttons in the navbar. Each object must have:
  - `label`: The text displayed on the button.
  - `onClick`: A function triggered when the button is clicked.
- `Style` *(optional)*: An object containing optional custom styles:
  - `ButtonTextColor`: A string# TwinList Component

A reusable `TwinList` component built with TypeScript and React for displaying a list of items, each containing a title, description, image, and button. This component is highly customizable via props to control its appearance and behavior.

## `TwinListProps`

### `Style` *(optional)*

An optional object to customize the styles of the component. The following keys are available:

- `Background`: A string representing the background color of the entire section.
- `ListBackground`: A string representing the background color of each individual list item.
- `TextColor`: A string representing the text color of the list items.
- `ButtonBackground`: A string representing the background color of the buttons.
- `ButtonTextColor`: A string representing the text color of the buttons.

### `List`

An array of objects representing the list items. Each object must contain:

- `Title`: A string representing the title of the list item.
- `Description`: A string representing the description of the list item.
- `Image`: A string representing the URL of the image to be displayed.
- `ButtonLabel`: A string representing the label of the button.
- `ButtonOnClick`: A function to be triggered when the button is clicked.
  
## Cards Component

A reusable `Cards` component built with TypeScript and React for displaying a customizable set of cards with images, titles, descriptions, and click functionality.

### `CardProps`

- `Cards`: An array of card objects, each containing:
  - `ImagePath` *(optional)*: A string URL for an optional background image on the card.
  - `Title`: The main heading text displayed on the card.
  - `Description`: A short description displayed below the title.
  - `Onclick`: A function triggered when the card is clicked.

- `Style` *(optional)*: An object containing customizable styling options:
  - `SectionBackground`: A string representing either a background image URL or a CSS color value for the entire card section.
  - `CardsBackground`: A string representing the background color of individual cards.
  - `CardsTextColor`: A string representing the text color used in the cards.

## PhotoGrid

A reusable `PhotoGrid` component built with TypeScript and React for displaying a grid of images with optional background styling and click handlers.

### `PhotoGridProps`

- **`Background`** *(optional)*: A string defining the background color or image of the grid.
- **`Images`**: An array of objects representing the images in the grid. Each object contains:
  - **`Image`**: A URL string pointing to the image source.
  - **`Alt`**: The alternative text for the image.
  - **`Onclick`**: A callback function triggered when the image is clicked.

## Banner

A reusable `Banner` component built with TypeScript and React, designed to display a customizable banner with an image background, title, and description.

### `BannerProps`

- **`BackgroundImage`**: A string representing the URL of the background image for the banner.
- **`Title`**: A string representing the title text that will be displayed on the banner.
- **`Description`**: A `React.ReactNode` representing the description content that will be displayed beneath the title. This can be text, JSX elements, or other React components.

## Footer

A reusable `Footer` component built with TypeScript and React for creating a customizable footer with a title, description, logo, optional social media links, additional links, and custom styling.

### `FooterProps`

- `Title`: A string representing the title of the footer.
- `Description`: A React node that can contain any valid JSX content for the footer description.
- `Logo`: A string representing the URL of the footer logo image.
- `Style` *(optional)*: An object containing optional custom styles:
  - `TextColor`: A string representing the color of the text.
  - `Background`: A string representing the background color of the footer.
- `Links` *(optional)*: An array of objects representing social media links. Each object must have:
  - `ImagePath`: A string representing the URL of the social media image.
  - `Href`: A string representing the URL of the social media link.
  - `Alt`: A string representing the alt text for the image.
- `MiscLinks` *(optional)*: An array of objects representing miscellaneous links. Each object must have:
  - `Text`: A string representing the text of the link.
  - `Href`: A string representing the URL of the link.
- `MiscInfo` *(optional)*: A React node that can contain additional miscellaneous information in the footer.

# Example usage is in the SRC/App.tsx