<style src="./select.scss" lang="scss"></style>

<script>
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