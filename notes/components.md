# Components

## Text

> We have to wrap all text inside this tags

### Props

#### numberOfLines

Will truncate text at one line

```javascript
<Text numberOfLines={1}>
```

#### onPress

We can call a function when the text is clicked:

##### Inline

```javascript
onPress={() => console.log("text clicked")}
```

##### External function

```javascript
export default function App() {
  const handlePress = () => console.log("Text Pressed");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React native
      </Text>
    </View>
  );
}
```

## Image

We can use local or remote images

### Props

#### source

##### Local images

- We use the require function
- We put the path of the image

> Use web images whenever you can

```javascript
<Image source={require("./assets/splash.png")} />
```

##### Remote images

- We pass in an object inside source
  - The object should have an uri property with the https
  - Specify dimensions: width, height
    > Just for network images, we have to manually specify its dimension

```javascript
<Image
  source={{
    width: 200,
    height: 300,
    uri: "https://picsum.photos/200/300",
  }}
/>
```

#### blurRadius

```javascript
blurRadius={1}
```

#### loadingIndicatorSource

Is similar to source, the image will be displayed as the images is downloaded

#### fadeDuration

> Just for android

```javascript
fadeDuration={1000}
```

#### resizeMode

We use it if the dimensions of the image is diferent from the ones specified

## Touchables

> We can make ANYTHING touchable

We can use several components for this.

### types

#### TouchableWithoutFeedback

#### TouchableOpacity

The opacity of the element gets reduced so we can see the background

#### TouchableHighlight

Its used just like touchableOpacity and touchable without feedback

#### TouchableNativeFeedback

> Just for Android
> Wont work for images, we have to put views

### Props

#### onPress

```javascript
<TouchableWithoutFeedback onPress={() => console.log("image touched")}>
  <Image
    blurRadius={1}
    fadeDuration={1000}
    source={{
      width: 200,
      height: 300,
      uri: "https://picsum.photos/200/300",
    }}
  />
</TouchableWithoutFeedback>
```

#### onLongPress

Allow the user to tap and hold the component

## Buttons

### Props

- color: seting the background color for the button
- title

#### onPress

For invoking functions

### Example

```javascript
<Button
  title="Click me"
  color="orange"
  onPress={() => console.log("Button tapped")}
/>
```

## Alert

### Alert function

- We can send it inside an onPress button

```javascript
<Button
  title="Click me"
  color="orange"
  onPress={() => alert(" Button pressed")}
/>
```

> For custom alerts and user input, check recipes section!
