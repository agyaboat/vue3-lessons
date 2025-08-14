import {ref, reactive} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    const x = reactive({count:0, el:'sm'});
    const {count} = x;
    return {count, x}
  },
  template: `
    <div class="hello">
      <h1>{{ msg }}</h1>
      <p>Count: {{ count }}</p>
      <p>X: {{ x }}</p>
      <button @click="count++">{{ count }} ++</button>
    </div>
  `
}
