## CSS Linter
This fork uses the `stylelint` module and the Airbnb CSS style configuration.

First, install the scss_lint gem 
`gem install scss_lint -v 0.49.0`

Next, install the vscode scss_lint extension
https://marketplace.visualstudio.com/items?itemName=adamwalzer.scss-lint

Next, 
`Code > Preferences > Settings` and add

```
    "scssLint.errorBackgroundColor": "rgba(200, 0, 0, .8)",
    "scssLint.warningBackgroundColor": "rgba(200, 120, 0, .8)",
    "scssLint.languages": [
      "scss",
		  "css"
    ]
```

to `User Settings`

