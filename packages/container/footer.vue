<style src="./container.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

export default {
  name: 'RFooter',
  render (h){
    jsx.h = h
    return div('.r-footer', ...(this.$slots.default || []) )
  }
}
</script>