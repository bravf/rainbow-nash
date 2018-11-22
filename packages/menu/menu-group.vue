<style src="./menu.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, ul, li} = jsx

var MenuGroup = {
  name: 'RMenuGroup',
  props: {
    title: String
  },
  render (h) {
    jsx.h = h
    var me = this

    return li('.r-menu-group',
      div('.r-menu-group-title', this.title),
      ul(...(this.$slots.default || []) )
    )
  }
}

export default MenuGroup

</script>