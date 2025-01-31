# React Reusable Components

## Navigation Bar

A reusable `NavBar` component built with TypeScript and React for creating a responsive navigation bar with buttons, logo, and optional customization of styles.

### `NavBarProps`

- `Buttons`: An array of objects representing the buttons in the navbar. Each object must have:
  - `label`: The text displayed on the button.
  - `onClick`: A function triggered when the button is clicked.
- `Style` *(optional)*: An object containing optional custom styles:
  - `ButtonTextColor`: A string representing the color of the button text.
  - `NavBarBackground`: A string representing the background color of the navbar.
- `Logo` *(optional)*: An object representing the logo in the navbar:
  - `imagePath`: A string representing the image URL for the logo.
  - `href` *(optional)*: A string representing the URL that the logo links to.

## Hero Section

A reusable `Hero` component built with TypeScript and React for creating a customizable hero section with a background image or color, title, description, button, and an optional logo.

### `HeroProps`

- `Title`: The main heading text displayed in the hero section.
- `Description`: A short description or tagline below the title.
- `ButtonLabel`: The text displayed inside the call-to-action button.
- `ButtonOnClick`: A function triggered when the button is clicked.
- `Background` *(optional)*: A string representing either a background image URL or a CSS color value.
- `Logo` *(optional)*: A URL string for an optional logo displayed in the hero section.
- `HasDarkCover` *(optional, default: `true`)*: A boolean that determines whether a semi-transparent dark overlay appears over the background.

## TwinList

A reusable `TwinList` component built with TypeScript and React for displaying a structured, alternating list layout. It supports customizable styles, dynamic button actions, and images.

### `TwinListProps`

- **`Style`** *(optional)*: An object for customizing the appearance of the component.
  - **`Background`** *(optional)*: The background color of the entire section.
  - **`ListBackground`** *(optional)*: The background color of individual list items.
  - **`TextColor`** *(optional)*: The color of the text inside the list items.
  - **`ButtonStyle`** *(optional, default: `1`)*: Defines the button style, accepts values from `1` to `5`.

- **`List`**: An array of objects representing the list items. Each object contains:
  - **`Title`**: The title displayed for the list item.
  - **`Description`**: A short description related to the item.
  - **`Image`**: A URL string pointing to the image displayed beside the text.
  - **`ButtonLabel`**: The text displayed on the button.
  - **`ButtonOnClick`**: A callback function triggered when the button is clicked.
  
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

A reusable `Footer` component built with TypeScript and React for creating a customizable footer with support for styling, social media links, and additional information.

### `FooterProps`

- `Title`: The title text displayed in the footer.
- `Description`: Any React node (such as text or elements) to describe the footer.
- `Style` *(optional)*: An object for customizing the appearance of the footer.
  - **`TextColor`** *(optional)*: The color of the text in the footer.
  - **`Background`** *(optional)*: The background color of the footer.
- `Links` *(optional)*: An array of objects representing social media or external links. Each object can contain:
  - **`ImagePath`**: The path to the image for the link (icon or logo).
  - **`Href`**: The URL the link should point to.
  - **`Alt`**: The alt text for the image.
- `MiscLinks` *(optional)*: An array of miscellaneous links such as privacy policy or terms of service. Each object can contain:
  - **`Text`**: The text displayed for the link.
  - **`Href`**: The URL the link should point to.
- `MiscInfo` *(optional)*: Any extra information to display in the footer, such as copyright or contact information.

# Example usage is in the SRC/App.tsx