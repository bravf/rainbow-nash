<style src="./dropdown.scss" lang="scss"></style>

<script>
import {globalClick} from '../../src/utils/tools'
import jsx from '../../src/utils/jsx'

var {a, rIcon, div, ul, li} = jsx

var DropdownItem = {
  name: 'RDropdownItem',
  props: {
    href: String,
    target: String,
  },
  render (h) {
    jsx.h = h
    var me = this

    return (
      li('.r-dropdown-item', {
        o_click () {
          me.$parent.isExpand = false
        }
      },
        a({
          a_href: this.href,
          a_target: this.target ? this.target : null
        }, ...this.$slots.default)
      )
    )
  }
}

export default DropdownItem
</script>
