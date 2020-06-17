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

# ViewImageScreen

## Structure

1. We create a view that will be a container
2. Place inside two views that will later be buttons
3. We place an image and set resizeMode to contain so it doesn takes the whole scren.
4. We add icons inside of views created in step 2

## Style

For container:

- flex:1 so container uses whole screen

For close and deleteIcon:

- We give a fixed width and height
- **absolute position** so we can move them aroun withou affecting global layout

For image:

- We allow it to grow giving it "100%"

# ListingDetailsScreen

## Style

In main container we want set flex direction to row, because we want to laid the image and title and subtitle horizontally.

We set the imag borderRadius to be half of its weight and height, so it becomes a circle. And add a marging Right so there is space between image and text.

-We add a container for text next to image, so we cant set flex direction column

# MessagesScreen

## Structure

- We use flatlist and pass in our ListItem component.
- We wrap everything up sinde `SafeAreaView`, so in Ios, doesnt interfer with the upper part.

## Functionality

We use `ItemSeparatorComponent` in **FlatList** to separate each element.
We then creat a view that will serve as separator for each one. We then **extract that to a reusable component**

> Notice that when we pass in the component to **ListItemSeparator** prop in FlatList, **we dont use <>**

## Styles

- We use padding in our wrapper safeAreaView if we are on Android to avoid covering upper part of the screen.
  There are 2 ways to achieve this
