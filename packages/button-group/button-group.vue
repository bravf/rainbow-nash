<style src="./button-group.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

var ButtonGroup = {
  name: 'RButtonGroup',
  props: {
    size: String,
    align: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    cls () {
      var cls = ['r-btn-group', 'r-btn-group-align-' + this.align]
      
      if (this.size === 'small'){
        cls.push('r-btn-group-small')
      }
      
      return cls
    }
  },
  render (h) {
    jsx.h = h
    return div('.' + this.cls.join('+'), ...(this.$slots.default || []) )
  }
}

export default ButtonGroup
</script>