<script>
var TabPane = {
  name: 'RTabPane',
  props: {
    name: [String, Number],
    label: String,
    icon: String,
    disabled: String,
  },
  mounted () {
    this.$parent._getPaneConfs()
  },
  beforeDestroy () {
    this.$parent._getPaneConfs()
  },
  updated () {
    this.$parent._getPaneConfs()
  },
  render () {
  }
}

export default TabPane
</script>