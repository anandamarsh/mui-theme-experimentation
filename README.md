# MUI theme experimentations

This project is to be deployed on CodeSandbox such that we can edit `theme.js` collaboratively and see the changes in realtime

## How to change the theme

1. Locate the file `~/src/theme.js` to your left
2. Edit the _theme tokens_ in the object `clarityTheme`
3. Save the file (you may need to refresh the browser that is displaying the app to see your changes)
4. You can toggle the switch in the bottom right to switch between your theme and MUI's original theme

Note that your changes will get saved autometically in a new branch. Once you are fully satisfied with your theme, you can raise a _pull request_

All possible options for _horizontal themeing_ can be found at [MUI Default theme viewer](https://mui.com/material-ui/customization/default-theme/).

For _vertical theming_, you need to edit `.components` object in `theme.js`. This will be discussed as we pick individual components and eplore the options MUI provides to us
