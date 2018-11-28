<script>
var TableColumn = {
  name: 'RTableColumn',
  props: {
    title: {
      type: String,
      default: '#',
    },
    field: String,
    // index, checkbox, radio, expand
    type: String,
    width: [Number, String],
    align: {
      type: String,
      default: 'left',
    },
    sortable: Boolean,
    ellipsis: Boolean,
  },
  computed: {
    cls () {
      var cls = []
      return cls
    }
  },
  mounted () {
    this.$parent._getColumnConfs()
  },
  beforeDestroy () {
    this.$parent._getColumnConfs()
  },
  watch: {
    title () {
      this.$parent._getColumnConfs()
    },
  },
  render () {

  }
}

export default TableColumn
</script>