<style src="./checkbox.scss" lang="scss"></style>

<script>
import {isArray, inArray} from '../../src/utils/tools'
import {getParent} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {label, rIcon, span ,div} = jsx

var Checkbox = {
  name: 'RCheckbox',
  model: {
    prop: 'checkedValue',
    event: 'input',
  },
  props: {
    checkedValue: [String, Number, Boolean, Array],
    value: {
      type: [String, Number, Boolean],
      default: true,
    },
    label: [String, Number],
    indeterminate: Boolean,
    disabled: Boolean,
  },
  computed: {
    cls () {
      var cls = ['r-checkbox']

      if (this.checked){
        cls.push('r-checkbox-checked')
      }
      else {
        // if (this.indeterminate){
        //   cls.push('r-checkbox-indeterminate')
        // }
      }
      
      if (this.disabled){
        cls.push('r-checkbox-disabled')
      }

      return cls
    },
    isGroupParent () {
      return this.$parent.$options._componentTag === 'r-checkbox-group'
    },
    realCheckedValue () {
      var checkedValue = this.checkedValue
      
      if (this.isGroupParent){
        checkedValue = this.$parent.checkedValue
      }

      return checkedValue
    },
    checked () {
      if (isArray(this.realCheckedValue)){
        return inArray(this.value, this.realCheckedValue)
      }
      else {
        return (this.value === this.realCheckedValue) || (this.realCheckedValue === true)
      }
    },
    formItem () {
      return getParent(this, 'r-form-item')
    },
  },
  methods: {
    _setCheckedValue () {
      var checkedValue

      if (isArray(this.realCheckedValue)){
        checkedValue = this.realCheckedValue

        if (this.checked){
          var idx = checkedValue.indexOf(this.value)
          checkedValue.splice(idx, 1)
        }
        else {
          checkedValue.push(this.value)
        }
      }
      else {
        if (this.checked){
          checkedValue = ''
        }
        else {
          checkedValue = this.value
        }
      }

      if (this.isGroupParent){
        this.$parent.$emit('input', checkedValue)
      }
      else {
        this.$emit('input', checkedValue)
      }
    },
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
          me._setCheckedValue()
          
          if (me.formItem){
            me.formItem.validate()
          }
        }
      },
        rIcon('.r-checkbox-icon', {
          p_type: this.checked ? 'android-checkbox-outline' : 'android-checkbox-outline-blank'
        }),
        span('.r-checkbox-content', {vif: !!content.length}, ...content)
      )
    )
  }
}

export default Checkbox
</script>