<style src="./container.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

export default {
  name: 'RMain',
  render (h){
    jsx.h = h
    return div('.r-main', ...(this.$slots.default || []) )
  }
}
</script>