import { ref, onMounted, onUnmounted } from 'vue'
export function useMouse() {
  const xCord = ref(0)
  const yCord = ref(0)

  function update(event){
    xCord.value = event.pageX
    yCord.value = event.pageY
  }

  onMounted(()=>window.addEventListener('mousemove', update))
  onUnmounted(()=>window.removeEventListener('mousemove', update))
  return { xCord, yCord }
}
