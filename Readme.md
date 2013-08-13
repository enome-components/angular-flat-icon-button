
# angular-flat-icon-button

  Flat styled icon button directive

## Installation

  Install with [component(1)](http://component.io):

    $ component install enome-components/angular-flat-icon-button

## API

```html
<flat-icon-button background='"#f36dbd"' icon-color='"orange"' shadow-color='"orange"' text-color='"white"' icon='"off"' click='click()' text='"This is a really long text"'></flat-icon-button>
```

- icon: [Fontawesome icon name without the prefix](http://fortawesome.github.io/Font-Awesome/cheatsheet/)
- text: string (default: empty string)
- background:   hex/color-name (default: silver)
- icon-color:   hex/color-name (default: darken(background, 15))
- shadow-color: hex/color-name (default: lighten(background, 35))
- text-color:   hex/color-name (default: darken(background, 25))
- click: handler that fires on click

All properties are scoped with `{ prop: '=' }`.

## License

  MIT
