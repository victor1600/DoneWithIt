# AppButton

It's a pure CSS view with touchableOpacity, in order to make it act like a button.

## Structure

1. Create AppButton Component
2. Create a TouchableOpacity component
3. Place Text inside it

## Functionality

In `touchableOpacity` style property, we want to override `backGround color` so it the button can have color depending on what's set on the parent. So we use an array of styles, so the second overrides the first. The color will be set based on `color` prop that will sent from above.

## Styles

1. Create style for button
2. We give a `"100%"` width so it stretches dinamically
3. `padding:15` to make it taller
4. Justify and align so its centered
5. Create style for text
6. Assign styles to component

# AppText

This is a text-based component that renders two different fonts depending on platform on which is running

## Structure

## Functionality

> We take advantage of {children} prop, which is a special prop that allows to pass children elements directly into component's output.

- We set an array of styles inside style tag, so we can **override from outside** our styles defined here.

## Style

- Different fontSize based on current platform

# Card

We send title, subtitle and image prop from app.js

## Structure

## Functionality

- **Temporary solution: Sending required along with image URI**: We cant just pass in the image url as a prop and read it with require, because we cant load it dynamically, instead, we send the path along with require to card.

- We send in custom style to our custom component AppText, to override defaults. But we have to make changes over there as well.

## Style

- The image is too big and does fit the screen
- We create a container for text.
- Apply padding so the space with text in card increases

- We have overflow of the image inside container, thats why the rounder corners aren showing up, to solve this, we have to set in card container: `overflow:"hidden"`

# Icon

## Structure

We pass in name, size, the backgroundColor and iconColor, so caller decides how it should render.

- View is the circle
- Icon inside

## Functionality

## Style

Icon will be half the size of the circle. We set the style defined in the prop.

- We want to put the icon in the middle of the circle, so we align everything inside the container view

# ListItem

Very similar to card component. Its purpouse its to create an image with titlte and subtitle to the the side.

![listItem](images/listItem.png)

## Structure

- Wrap everything between Swipeable
- Wrap up everything inside Touchable Highlight
- View, that will serve as container for wrapping elements and align them rowise.
- Image
- 2 AppText: Title and subtitle
- **View**: This view wraps text, its purpouse its to ignore row alignment in general container and align title and subtitle in columns.

## Functionality

- TouchableHighlight wont work without onPress `definition`
  - We can change the color show up when clicked with `underlayColor` prop.
- Receives dynamically the title, subtitle and image it has to render from parent

However, we dont have the logic for handling our selections because this component should be reusable.

> What should happen when an user taps the item, should be decided by the consumer of the reusable.

### Handling swipes

Install: `expo install react-native-gesture-handler`

use renderRigthAction or renderLeftAction.
We will pass in a function to the component so is reusable.

## Styles

- In container, we give it flexDirection of row, so image appaars side to side with text.

- Image has fixed size, and borderRadius set to its half, so its rounded. Also, it has margin so it stays separed from side text.

- Specifiy size for text

# ListItemDeleteAction

Used along with Swipes animation.

## Structure

- TouchableWithoutFeedback
- A single view
- Icon for deleting

## Functionality

- We wrap everything up inside TouchableWithoutFeedback, which will trigger a function to delete. with **onPress** But the delete function will get passed from above

## Styles

- The color and size of the view.
- We align and justify to center so trash can appears at center of red box

# ListItemSeparator

Extracted with the purpouse is to separate from element from another.

## Structure

- view

## Style

- We create a ``line` setting height to 1 and with to fill the screen with "100%".

- flex:1, so component takes entire screen when pulling

# Screen

Extracted with the purpouse of avoiding content to be placed to close to th border top of the screen on phones.

## Structure

- SafeAreaView works just on Ios.

## Functionality

- We use `{children}`, so we can pass in another component and that will get placed inside our styled safeAreaView

```javascript
import React, { Children } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
```

## Style

The purpouse is to help Android stop showing content on the top, so we use
We use the library **expo constants**

1. install `npm i expo-constants`
2. Import it

```javascript
import Constants from "expo-constants";
```

> The Constants component holds information about the platform and serves as an alternative to using `Platform`.

we could've achieved the same thing with plaform writting:

1. Using Plaform
   Import StatusBar and Platform from react-native

```javascript
screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
```
