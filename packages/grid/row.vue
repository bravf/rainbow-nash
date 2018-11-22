<style src="./grid.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

var Row = {
  name: 'RRow',
  props: {
    gutter: [Number, String],
    alignItems: String,
    justifyContent: String,
  },
  computed: {
    style (){
      var style = {}
      if (this.alignItems) {
        style.s_alignItems = this.alignItems
      }

      if (this.justifyContent) {
        style.s_justifyContent = this.justifyContent
      }

      return style
    }
  },
  render (h) {
    jsx.h = h
    return (
      div('.r-row + r-row-flex', this.style, ...(this.$slots.default || []) )
    )
  }
}

export default Row
</script>