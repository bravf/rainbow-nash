<style src="./container.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

export default {
  name: 'RAside',
  render (h){
    jsx.h = h
    return div('.r-aside', ...(this.$slots.default || []) )
  }
}
</script>