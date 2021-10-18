import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMenu } from 'd2-admin/use/menu.js'
import { getMenuId } from 'd2-admin/utils/menu.js'
import { renderMenus } from './render.jsx'

export function defineMenuComponent ({
  store,
  props = {}
} = {}) {
  return defineComponent({
    setup () {
      const route = useRoute()
  
      const menu = useMenu()
      const { navigateByMenu } = menu
  
      const menuStore = store()
      const { menus } = storeToRefs(menuStore)
      const { getMenuById, getMenuByUrl } = menuStore
  
      function onSelect (id) {
        navigateByMenu(getMenuById(id))
      }
  
      const defaultActive = computed(() => getMenuId(getMenuByUrl(route.fullPath)))
  
      return {
        menus,
        onSelect,
        defaultActive
      }
    },
    render () {
      const {
        menus,
        onSelect,
        defaultActive
      } = this
      return renderMenus(menus, {
        onSelect,
        defaultActive,
        ...props
      })
    }
  })
}
