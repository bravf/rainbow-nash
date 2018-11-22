<style src="./breadcrumb.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, span, a} = jsx

var Breadcrumb = {
  name: 'RBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  render (h) {
    jsx.h = h
    
    var nodes = []
    this.$slots.default.forEach(node => {
      if (node.componentOptions && node.componentOptions.tag === 'r-breadcrumb-item'){
        if (nodes.length){
          nodes.push(
            span('.r-breadcrumb-separator', this.separator)
          )
        }
        nodes.push(node)
      }
    })

    return div('.r-breadcrumb', ...nodes)
  }
}

export default Breadcrumb
</script>