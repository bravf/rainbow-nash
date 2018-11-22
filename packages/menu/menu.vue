<style src="./menu.scss" lang="scss"></style>

<script>
import {globalClick} from '../../src/utils/tools'
import {getParent} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {div, ul, li, a, rIcon} = jsx

var Menu = {
  name: 'RMenu',
  props: {
    // 枚举值：vertical(垂直), horizontal(水平)
    mode: {
      type: String,
      default: 'vertical'
    },
    value: [String, Number],
    expand: Boolean,
  },
  computed: {
    cls () {
      var cls = ['r-menu']

      cls.push('r-menu-' + this.mode)
      return cls
    },
  },
  methods: {
  },
  render (h) {
    jsx.h = h
    var me = this

    return ul('.' + this.cls.join('+'), ...this.$slots.default)
  },
}

export default Menu
</script>