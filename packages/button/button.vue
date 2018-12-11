<style src="./button.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {button, a, rIcon} = jsx

var Button = {
  name: 'RButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: String,
    long: Boolean,
    htmlType: {
      type: String,
      default: 'button',
    },
    disabled: Boolean,
    loading: Boolean,
    icon: String,

    // icon位置，默认before
    // 枚举: before, after
    iconPos: {
      type: String,
      default: 'before'
    },

    // 模拟 a 链接
    href: String,
    target: {
      type: String,
      default: '_blank',
    },

  },
  computed: {
    cls () {
      var cls = []
      cls.push(`r-btn-${this.type}`)
      
      if (this.disabled || this.loading){
        cls.push('r-btn-disabled')
      }

      if (this.size === 'small'){
        cls.push('r-btn-small')
      }

      if (this.long === true){
        cls.push('r-btn-long')
      }

      return cls
    }
  },
  render (h) {
    jsx.h = h

    var node
    var props = {}

    if (this.href){
      node = a
      props['dp_href'] = this.href
      props['dp_target'] = this.target
    }
    else {
      node = button
      props['dp_type'] = this.htmlType
    }

    if (this.disabled || this.loading){
      props['dp_disabled'] = 'disabled'
    }

    // 文本
    var $txt = this.$slots.default || []

    // 图标
    var icon = this.icon
    if (this.loading){
      icon = 'load-c'
    }

    if (icon){
      var $icon = rIcon('.r-button-icon', {
        p_type: icon,
        'p_auto-rotate': this.loading
      })
    }

    return (
      node(`.r-btn + ${this.cls.join('+')}`, props,
        ...(this.iconPos === 'after' ? [...$txt, $icon] : [$icon, ...$txt])
      )
    )
  }
}

export default Button
</script>