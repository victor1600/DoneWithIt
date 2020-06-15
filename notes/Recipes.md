## [style] Centering elementss

```javascript
alignItems: "center",
justifyContent: "center"
```

## [structure] Creating colored subsections

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React native</Text>
      <TouchableNativeFeedback onPress={() => console.log("image touched")}>
        <View
          style={{
            width: 200,
            height: 70,
            backgroundColor: "dodgerblue",
          }}
        ></View>
      </TouchableNativeFeedback>
    </View>
  );
}
```

## Creating custom alerts and getting user input

### Alert API

> Useful for custom alerts, will get triggered by onPress event!

#### alert: simular to an informativo modal in web programing

Displaying a message in modal.

Takes in:

- Title
- Message
- Array of objects of buttons, each button can have:
  - onPress
  - style
  - text

> We know which button was clicked using: **onPress** event

```javascript
<Button
  title="Click me"
  color="orange"
  onPress={() =>
    Alert.alert("My title", "My Message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ])
  }
/>
```

#### prompt: getting user input (Works just for IOS)

Asking a question and getting and answer.

Takes in:

- title
- message
- callback of buttons

In this example:

- We pass in an arrow function
  - Argument text: text that user enters

## [Style] Applying two styles to element

> Object in the right overrides properties of the object on the left

```javascript
import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, styles.background]}>
      <Button
        title="Click me"
        color="orange"
        onPress={() => console.log("hi")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "orange",
  },
});
```

## Allowing a component to expand along an axis

We use resizeMode to contain

```javascript
{
  width: "100%";
}
```

## Fitting in a big image

```javascript
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ViewImageScreen = () => {
  return (
    <Image
      resizeMode="contain"
      style={styles.image}
      source={require("../assets/chair.jpg")}
    />
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
```
