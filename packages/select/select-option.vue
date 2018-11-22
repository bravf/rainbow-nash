<style src="./select.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, rTag, rIcon, ul ,li, rSelectOption, input} = jsx

var SelectOption = {
  name: 'RSelectOption',
  props: {
    value: [String, Number],
    label: String,
    disabled: Boolean,
  },
  mounted () {
    this.$parent._getLabelValue()
  },
  beforeDestroy () {
    this.$parent._getLabelValue()
  },
  render () {
  }
}

export default SelectOption
</script>