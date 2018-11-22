<style src="./app.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {rContainer, rHeader, rAside, rMain, div, rIcon} = jsx

var App = {
  name: 'RApp',
  props: {
    expandable: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isAsideExpand: true,
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    return rContainer('.r-app',
        rHeader(
          ...this.$slots.header
        ),
        rContainer('.r-app-body',
          rAside({
            s_display: me.isAsideExpand ? 'block' : 'none',
            s_left: me.isAsideExpand
          },
            ...this.$slots.aside
          ),
          rMain(
            div('.r-aside-expand',{
              'c_r-aside-expand-true': me.isAsideExpand,
              'c_r-aside-expand-false': !me.isAsideExpand,
              vif: this.expandable,
              o_click () {
                me.isAsideExpand = !me.isAsideExpand
              }
            },
              rIcon({
                p_type: me.isAsideExpand ? 'chevron-left' : 'chevron-right'
              }),
            ),
            ...this.$slots.main
          )
        )
      )
  }
}

export default App
</script>