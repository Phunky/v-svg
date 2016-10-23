# v-svg
VueJS 2 component for making [SVG sprites](https://icomoon.io/app/) simpler to use.

# Setup
```javascript
import svg from 'vue-svg-directive'
// ...
Vue.use(svg, {
  filepath: '/static/sprites.svg', // Optional filepath to your svg sprite
  prefix: 'icon-',  // Optional prefix for all your sprite names
  class: 'icon', // Optional class that will be applied to the <svg> element (optional)
  size: '32' // Optional default size value
});
```

# Usage
```html
<v-svg sprite="home"></div>
```

The size attribute gives you the ability to change the viewBox value.

```html
<!--// viewBox="0 0 32 32 "//-->
<svg v-svg sprite="home" size="32"></svg>
<!--// viewBox="0 0 32 64 "//-->
<svg v-svg sprite="home" size="32 64"></svg>
<!--// viewBox="5 5 32 64 "//-->
<svg v-svg sprite="home" size="5 5 32 64"></svg>
```
