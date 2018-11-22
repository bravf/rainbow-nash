<style src="./grid.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

var Col = {
  name: 'RCol',
  props: {
    span: [Number, String],
    offset: [Number, String],
  },
  computed: {
    cls () {
      var cls = []
      if (!isNaN(this.span) && this.span > 0 && this.span <= 24) {
        cls.push(`r-col-span-${this.span}`)
      }

      if (!isNaN(this.offset) && this.offset > 0 && this.offset <= 24) {
        cls.push(`r-col-offset-${this.offset}`)
      }

      return cls
    },
    style () {
      var style = {}
      if (this.$parent.$options._componentTag === 'r-row') {
        var gutter = this.$parent.gutter
        if (gutter > 0) {
          gutter = gutter / 2
          style.s_paddingLeft = style.s_paddingRight = `${gutter}px`
        }
      }
      return style
    }
  },
  render (h) {
    jsx.h = h
    return (
      div(`.r-col + ${this.cls.join('+')}`, this.style, ...(this.$slots.default || []) )
    )
  }
}

export default Col
</script>