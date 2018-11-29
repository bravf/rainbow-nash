<style src="./dropdown.scss" lang="scss"></style>

<script>
import {globalClick} from '../../src/utils/tools'
import jsx from '../../src/utils/jsx'

var {a, rIcon, div, ul} = jsx

var Dropdown = {
  name: 'RDropdown',
  props: {
    label: String,
    size: String,
    // left or right
    placement: {
      type: String,
      default: 'left',
    },
  },
  data () {
    return {
      isExpand: false
    }
  },
  methods: {
  },
  render (h) {
    jsx.h = h
    var me = this
    
    return (
      div('.r-dropdown', {'c_r-dropdown-small': this.size === 'small'},
        // btn
        a('.r-dropdown-btn', {
          o_click () {
            if (me.isExpand !== true){
              me.isExpand = true
            }
            else {
              me.isExpand = false
            }
          }
        },
          this.label,
          rIcon({p_type: this.isExpand ? 'arrow-up-b' : 'arrow-down-b'})
        ),
        // list
        div(`.r-dropdown-list + r-dropdown-list-${this.placement}`, {s_display: this.isExpand ? 'block' : 'none'},
          ul(...(this.$slots.default || []) )
        )
      )
    )
  },
  mounted () {
    globalClick(this.$el, ()=>{
      this.isExpand = false
    })
  }
}

export default Dropdown
</script>
