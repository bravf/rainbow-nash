<style src="./alert.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, rIcon} = jsx

var Alert = {
  name: 'RAlert',
  props: {
    type: {
      type: String,
      // info, success, warning, danger
      default: 'info',
    },
    closeable: Boolean,
  },
  data () {
    return {
      isShow: true
    }
  },
  render (h) {
    jsx.h = h

    var me = this
    var iconList = {
      info: 'information-circled',
      success: 'checkmark-circled',
      warning: 'android-alert',
      danger: 'close-circled',
    }
    
    return (
      div(`.r-alert + r-alert-${this.type}`, {vif:this.isShow},
        rIcon({p_type:iconList[this.type]}),
        div('.r-alert-msg', ...(this.$slots.default || []) ),
        rIcon({
          vif:this.closeable, 
          p_type:'ios-close-empty',
          no_click (e) {
            me.isShow = false
            me.$emit('close', e)
          }
        })
      )
    )
  }
}

export default Alert
</script>