export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  template: `
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
  `
}
