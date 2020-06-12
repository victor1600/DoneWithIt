# Stylesheet API

It's the recommended way to work our styles

We use `stylesheet.create` for 2 reasons:

- validate each property used here, so we dont mispell a property
- optimizations

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

# Individual elements

## Flex

```javascript
flex: 1;
```

The view is flexible and will extend vertically and horizontally to fill the space.
