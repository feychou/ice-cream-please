# Install and Run

Synchronous app to see basic Redux in action

```
npm i
npm start
```


## Challenge

In this step you'll make it possible for your ice cream to have a wider range of expressions! The emojis to pick the moods are already displayed below the color menu, but the selection does not work yet.

### Steps

1. In the folder `features`, create a `moodsSlice.js` file modelled upon the color slice.
2. Move the moods data from the component to the slice to create the initial state.
3. Create actions to handle the `isSelected` flag correctly.
4. Connect your selectors to both components that need them so that the ice cream expression will reflect your mood selection. Remember to add a tick next to the selected menu item.
