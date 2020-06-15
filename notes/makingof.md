# Welcome Screen

## Structure

We use ImageBackground component so it fits the whole screen. This will be the container for all of our child components.

1. At the top, create ImageBackground component
2. We create two containers, one for logo and its text and another for appButtons.
3. We use image component, these will get resized in style

## Style

For background:

- We set flex 1 so it fills the whole screen,
- Center it with justifyContent and alignItems

For buttonsContainer:

- We set padding so they are separated one from another
- We set with to "100%" so our buttons dont get shrunk.

For logo:

- We set a fixed size to resize the big image logo.

For logoContainer: This will place text and logo at top center.

- **Position absolute**, so it doesnt goes to bottom.

For tagline: These are the styles for text below the image.

- Font size: to increase font
- FontWeight: To make font thicker
- PaddingVertical, so its no so close to the logo image.

## Functionality

## Styling

- Create a view and put AppButton in it, apply padding to that view,
- We also apply width: '100%' so it doesnt shinks our button

# AppButton

## Structure

1. Create AppButton Component
2. Create a TouchableOpacity component
3. Place Text inside it

## Styling

1. Create style for button
2. We give a `"100%"` width so it stretches dinamically
3. `padding:15` to make it taller
4. Justify and align so its centered
5. Create style for text
6. Assign styles to component

## Functionality

In `touchableOpacity` style property, we want to override backGround color so it the button can have color depending on what's set on the parent. So we use an array of styles, so the second overrides the first. The color will be set based on `color` prop that will sent from above.

1. Text title will be set as a prop
2. Button color will be set as a prop, by default is primary
3. onPress will be a functionality decided by parent

# ViewImageScreen

## Structure

1. We create a view that will be a container
2. Place inside two views that will later be buttons
3. We place an image and set resizeMode to contain so it doesn takes the whole scren.

## Style

For container:

- flex:1 so container uses whole screen

For close and deleteIcon:

- We give a fixed width and height
- **absolute position** so we can move them aroun withou affecting global layout

For image:

- We allow it to grow giving it "100%"
