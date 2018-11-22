<style src="./container.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

export default {
  name: 'RHeader',
  render (h){
    jsx.h = h
    return div('.r-header', ...this.$slots.default)
  }
}
</script>