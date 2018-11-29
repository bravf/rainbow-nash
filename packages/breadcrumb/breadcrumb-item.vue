<style src="./breadcrumb.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {span, a} = jsx

var BreadcrumbItem = {
  name: 'RBreadcrumbItem',
  props: {
    href: String,
    target: String,
  },
  render (h) {
    jsx.h = h
    return this.href ?
      a('.r-breadcrumb-item-a', {
        a_href: this.href, 
        a_target: this.target,
      }, ...(this.$slots.default || []) ) 
      :
      span('.r-breadcrumb-item-span', ...(this.$slots.default || []) )
  }
}

export default BreadcrumbItem
</script>