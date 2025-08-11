import HelloWorld from "./HelloWorld.js"
import {ref} from 'vue'
export default {
  name: 'App',
  data(){
    const x = ref(0);
    return {
        x
    }
  },
  components: {
    HelloWorld
  },
  template: `
    <div style="background:red">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <button @click="x++">{{ x }}</button>
    </div>
  `
}