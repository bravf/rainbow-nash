<style src="./menu.scss" lang="scss"></style>

<script>
import {getParent} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {div, ul, li, a, rIcon} = jsx


var MenuItem = {
  name: 'RMenuItem',
  props: {
    name: [String, Number],
    href: String,
    target: String,
  },
  computed: {
    menu () {
      return getParent(this, 'r-menu')
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    return li('.r-menu-item', {
      'c_r-menu-item-active': this.name === this.menu.value,
      o_click () {
        me.menu.$emit('input', me.name)
      }
    },
      a({
        a_href: this.href,
        a_target: this.target
      }, ...(this.$slots.default || []) )
    )
  }
}

export default MenuItem
</script>