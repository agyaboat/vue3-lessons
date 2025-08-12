import HelloWorld from "./HelloWorld.js"
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  data(){
    const x = ref(0);
    const a = {x:10};
    const b = reactive(a);
    const c = reactive(a);
    return {
        x,
        a,
        b,
        c
    }
  },
  components: {
    HelloWorld
  },
  template: `
    <div style="" :id="x">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <button @click="x++">{{ x }}</button>
      <button @click="b.x++">{{ b }}</button>
      <div>Yet C value is {{ c }}</div>
      <div> {{ b===c }}</div>
      <div> {{ a }}</div>
      </div>
  `
}