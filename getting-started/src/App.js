import HelloWorld from "./HelloWorld.js"
import { useMouse } from "./Mouse.js";
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  data(){
    const x = ref(0);
    const a = {x:10};
    const b = reactive(a);
    const c = reactive(a);
    const { xCord, yCord } = useMouse();
    
    return {
        x,
        a,
        b,
        c,
        xCord,
        yCord,
    }
  },
   methods: {
    say(y){
      alert(y)
    }
  },
  components: {
    HelloWorld
  },
  template: `
    <div @scroll="say('yes')" style="max-height:100px; overflow-y:auto; border:1px solid red" :id="x">
      <HelloWorld @click.ctrl="say('HelloWorld clicked')" msg="Welcome to Your Vue.js App"/>
      <button @click="x++">{{ x }}</button>
      <button @click="b.x++">{{ b }}</button>
      <div>Yet C value is {{ c }}</div>
      <div> {{ b===c }}</div>
      <div> {{ a }}</div>
      ({{ xCord }}, {{yCord}})
    </div>
  `
}