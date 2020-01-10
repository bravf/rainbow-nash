<style src="./radio.scss" lang="scss"></style>

<script>
import {getParent} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {label, rIcon, span} = jsx

var Radio = {
  name: 'RRadio',
  model: {
    prop: 'checkedValue',
    event: 'input',
  },
  props: {
    checkedValue: [String, Number, Boolean],
    value: {
      type: [String, Number, Boolean],
      default: true,
    },
    label: [String, Number],
    disabled: Boolean,
  },
  computed: {
    cls () {
      var cls = ['r-radio']

      if (this.checked){
        cls.push('r-radio-checked')
      }
      
      if (this.disabled){
        cls.push('r-radio-disabled')
      }

      return cls
    },
    isGroupParent () {
      return this.$parent.$options._componentTag === 'r-radio-group'
    },
    checked () {
      if (this.isGroupParent){
        return this.$parent.checkedValue === this.value
      }
      else {
        return (this.checkedValue === this.value) || (this.checkedValue === true)
      }
    },
    formItem () {
      return getParent(this, 'r-form-item')
    }
  },
  render (h) {
    var me = this
    jsx.h = h

    var content = []

    if (this.label){
      content = [this.label]
    }

    if (this.$slots.default){
      content = this.$slots.default
    }

    return (
      label('.' + this.cls.join('+'), {
        o_click () {
          if (me.disabled){
            return
          }
          if (me.isGroupParent){
            me.$parent.$emit('input', me.value)
          }
          else {
            me.$emit('input', me.value)
          }

          if (me.formItem){
            me.formItem.validate()
          }
        }
      },
        rIcon('.r-radio-icon', {
          p_type: this.checked ? 'android-radio-button-on' : 'android-radio-button-off'
        }),
        span('.r-radio-content', {vif: !!content.length}, ...content)
      )
    )
  }
}

export default Radio
</script>