# getting-started

This template should help get you started developing with Vue 3 in Vite.


## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development
```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

# Personal Changes

I tested how it will work under the hood, so I made some adjustments:

## index.html
I added script importmap, to map vue to [node_modules/vue/dist/vue.esm-browser.js](./node_modules/vue/dist/vue.esm-browser.js)
```
```html
<script type="importmap">
{
  "imports": {
    "vue": "/node_modules/vue/dist/vue.esm-browser.js"
  }
}
</script>
```
This way, when the main.js file imports vue and createApp, it will use the ESM build of Vue that is compatible with browsers.

## App.js
I created and used [App.js](./src/App.js) instead of App.vue. Thus, in the main.js file, I import App from './App.js' instead of App.vue. This is because I wanted to see how it works without the Vue SFC (Single File Component) structure.

```javascript
import { createApp } from 'vue';
import App from './App.js';

createApp(App).mount('#app');
```

### HelloWorld.js
In testing how sfc is imported, I created [HelloWorld.js](./src/HelloWorld.js) file, which contained sample Options Api syntax
and I imported it in App.js, passing props, and it worked as expected.
