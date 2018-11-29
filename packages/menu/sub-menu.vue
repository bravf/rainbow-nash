<style src="./menu.scss" lang="scss"></style>

<script>
import {globalClick} from '../../src/utils/tools'
import {getParent} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {div, ul, li, rIcon} = jsx

var SubMenu = {
  name: 'RSubMenu',
  props: {
    name: [String, Number]
  },
  data () {
    return {
      isExpand: null,
      menuValue: ''
    }
  },
  created () {
    this.isExpand = this.menu.expand
  },
  computed: {
    menu () {
      return getParent(this, 'r-menu')
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    var isActive = this.menu.value.indexOf(this.name) === 0

    // 如果是垂直模式
    if (this.menu.mode === 'vertical'){
      // 如果被选中
      if (isActive){
        // 如果记录的menu value和当前menu value不同，则强制展开，并同步value
        if (this.menuValue !== this.menu.value){
          this.isExpand = true
        }
      }
      this.menuValue = this.menu.value
    }

    return li('.r-sub-menu', {
      // 如果是水平模式，则增加样式
      'c_r-menu-item-active': (this.menu.mode === 'horizontal') && isActive
    },
      // title
      div('.r-sub-menu-title', {
        ref: 'title',
        o_click () {
          if (me.isExpand !== true){
            me.isExpand = true
          }
          else {
            me.isExpand = false
          }
        }
      }, 
        ...(this.$slots.title || []),
        rIcon({
          p_type: this.isExpand ? 'ios-arrow-up' : 'ios-arrow-down'
        })
      ),
      // dropdown
      div('.r-sub-menu-dropdown', {
        s_display: this.isExpand ? 'block' : 'none',
        o_click () {
          // 如果水平，则点击隐藏
          if (me.menu.mode === 'horizontal'){
            me.isExpand = false
          }
        }
      },
        ul(...(this.$slots.default || []) )
      )
    )
  },
  mounted () {
    // 如果水平，则点击隐藏
    if (this.menu.mode === 'horizontal'){
      globalClick(this.$el, ()=>{
        this.isExpand = false
      })
    }
  }
}

export default SubMenu
</script>