<style src="./loading.scss" lang="scss"></style>

<script>
import jsx from  '../../src/utils/jsx'

var {div} = jsx

var Loading = {
  name: 'RLoading',
  render (h) {
    jsx.h = h
    return div('.r-table-loading', div(), div(), div(), div(), div())
  }
}

export default Loading
</script>