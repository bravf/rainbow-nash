<style src="./modal.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, a, rIcon, rModal, rButton, p, span} = jsx

// modal的zindex从1000开始递增
var zindex = 1000

var Modal = {
  name: 'RModal',
  props: {
    value: Boolean,
    title: String,
    width: {
      type: [String, Number],
      default: 520
    },
  },
  data () {
    return {
      zindex: zindex
    }
  },
  computed: {
    cls () {
      var cls = []
      cls.push('r-modal')

      return cls
    },
  },
  watch: {
    value () {
      if (this.value){
        zindex ++
        this.zindex = zindex
      }
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    return div('.r-modal-wrapper + r-modal-mask', {
      s_display: this.value ? 'block' : 'none',
      's_z-index': this.zindex,
    },
      // modal
      div('.r-modal', {s_width: this.width + 'px'},
        // close
        a('.r-modal-close',
          rIcon({
            p_type: 'ios-close-empty',
            no_click () {
              me.$emit('input', false)
            }
          })
        ),
        // header
        div('.r-modal-header',
          div('.r-modal-header-inner', this.title)
        ),
        // body
        div('.r-modal-body', ...(this.$slots.default || [])),
        // footer
        div('.r-modal-footer', {
              vif: !!this.$slots.footer
            }, 
            ...(this.$slots.footer || [])
        )
      )
    )
  },

  mounted () {
    window.addEventListener('keydown', e=>{
      if (e.key === 'Escape'){
        this.$emit('input', false)
      }
    }, false)
  }
}

export default Modal
</script>