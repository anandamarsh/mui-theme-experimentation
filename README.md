#### To edit themes, you need to have a [Github](https://github.com/) account. You must use this account to sign-in to your code-sandbox

### Horizontal theming

1. Locate the folder `~/src/theme`. It lists all `json` files you can edit
2. Edit the _theme tokens_ in a certain `json` file, for instance, in `palette.json`
3. Save the file (you may need to refresh the browser that is displaying the app to see your changes)
4. You can toggle the switch in the bottom right to switch between your theme and MUI's original theme

Note that your changes will get saved autometically in a new branch. Once you are fully satisfied with your theme, you can raise a _pull request_.

### Vertical theming

Much like _horizontal theming_, except that you may need to create `json` files for each component. The name of these files are defined in MUI Docs, so you may need to ask a MUI Developer to create a `json` file for you with the corrct name.

As an example, to customise a button, we need a file called `MUIButton.json`. All configurable properties are documented at [CSS Classes for Button API](https://mui.com/material-ui/api/button/) under the column `Rule name` (make sure that you select _Table view_ while you are viewing this list). As you create new new `json`s, you need to add them to `~/src/theme/vertical/index.js`
