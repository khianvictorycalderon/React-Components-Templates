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
