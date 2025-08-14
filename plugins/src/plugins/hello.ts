import {App} from 'vue';
export default {
    install(app: App){
        app.config.globalProperties.$hello = (name: string) => `Hello, ${name}`
    }
}