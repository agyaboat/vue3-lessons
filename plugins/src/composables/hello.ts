import {getCurrentInstance} from 'vue'
export function useHello (name: string) {
    const currentInstance = getCurrentInstance();
    return currentInstance?.appContext.config.globalProperties.$hello(name);
}