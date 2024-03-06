#### To edit themes, you need to have a [Github](https://github.com/) account, and you must be added as a contruibutor to [MUI Theme Experimentation](https://github.com/anandamarsh/mui-theme-experimentation) repository. You must use this account to sign-in to your code-sandbox.

### Horizontal theming

1. Locate the folder `~/src/theme`. It lists all `js` files you can edit (mae of the file will tell you the section of the theme is talks about)
2. Edit the _theme tokens_ in a certain `js` file against the `json` called `configuration`
3. Save the file (you may need to refresh the browser that is displaying the app to see your changes)
4. You can toggle the switch in the bottom right to switch between your theme and MUI's original theme

Note that your changes will get saved autometically in a new branch. Once you are fully satisfied with your theme, you can raise a _pull request_.

### Vertical theming

Much like _horizontal theming_, except that you may need to create `js` files for each component. The name of these files are defined in MUI Docs, so you may need to ask a MUI Developer to create a `js` file for you with the corrct name.

As an example, to customise a button, we need a file called `MUIButton.js`. All configurable properties are documented at [CSS Classes for Button API](https://mui.com/material-ui/api/button/) under the column `Rule name` (make sure that you select _Table view_ while you are viewing this list). As you create new new `js`s, you need to add them to `~/src/theme/vertical/index.js`


### Design tokens

_Design Tokens_ are values that can be defined in one place and resued in multiple theme files. For example, `border8` can used as a token for specifying a `border` with `radius = 8px`. All _Design Tokens_ are listen in `~/src/DesignTokens.js` files. The statement `import DesignTokens from "../DesignTokens"` on every theme file makes these _Design Tokens_ available to that theme file for reuse. 
