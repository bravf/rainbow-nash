<style src="./checkbox.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

var CheckboxGroup = {
  name: 'RCheckboxGroup',
  model: {
    prop: 'checkedValue',
    event: 'input',
  },
  props: {
    checkedValue: [String, Number, Array],
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cls () {
      var cls = ['r-checkbox-group']

      if (this.vertical){
        cls.push('r-checkbox-group-vertical')
      }

      return cls
    },
  },
  render (h) {
    jsx.h = h
    return div('.' + this.cls.join('+'), ...(this.$slots.default || []) )
  }
}

export default CheckboxGroup
</script>