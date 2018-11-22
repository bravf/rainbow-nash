<style src="./radio.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {label, rIcon, div, span} = jsx

var RadioGroup = {
  name: 'RRadioGroup',
  model: {
    prop: 'checkedValue',
    event: 'input',
  },
  props: {
    checkedValue: [String, Number],
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cls () {
      var cls = ['r-radio-group']

      if (this.vertical){
        cls.push('r-radio-group-vertical')
      }

      return cls
    },
  },
  render (h) {
    jsx.h = h
    return div('.' + this.cls.join('+'), ...(this.$slots.default || []) )
  }
}

export default RadioGroup
</script>