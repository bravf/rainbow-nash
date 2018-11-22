<style src="./form.scss" lang="scss"></style>

<script>
import {isObject, isArray, deepClone} from '../../src/utils/tools'
import {getParent, getPropByPath} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {form, div, label} = jsx

var FormItem = {
  name: 'RFormItem',
  props: {
    label: String,
    prop: String,
    rules: Array,
    required: Boolean,
  },
  data () {
    return {
      errorMsg: ''
    }
  },
  computed: {
    cls () {
      var cls = ['r-form-item']

      if (this.required){
        cls.push('r-form-item-required')
      }

      return cls
    },
    form () {
      return getParent(this, 'r-form')
    },
    labelWidth () {
      return this.form.labelWidth
    },
    inline () {
      return this.form.inline
    },
    realRules () {
      if (this.rules){
        return this.rules
      }

      if (this.form.rules){
        if (this.prop in this.form.rules){
          return this.form.rules[this.prop]
        }
      }

      return []
    }
  },
  methods: {
    validate (callback) {
      callback = callback || function (){}
      var ruleCount = this.realRules.length

      // 如果没有设置验证，或者rules没设置
      if (!this.prop || !ruleCount){
        callback(true)
        return
      }

      var isError = false
      var doneCount = 0

      this.realRules.forEach(rule=>{
        var value = getPropByPath(this.form.model, this.prop).get()

        if (rule.loadingMsg){
          this.errorMsg = rule.loadingMsg
        }

        rule.validate(value, (isOk, msg)=>{
          doneCount ++

          // 如果还没结束
          if (!isError){
            // 如果校验失败
            if (!isOk){
              isError = true
              this.errorMsg = msg || rule.msg
              callback(false)
              return
            }

            if (doneCount == ruleCount){
              this.errorMsg = ''
              callback(true)
            }
          }

        })
      })
    },
    resetValidate () {
      this.errorMsg = ''
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    return div('.' + this.cls.join('+'),
      label('.r-form-item-label', {vif: !!this.label, s_width:!this.inline ? this.labelWidth + 'px' : 'auto'}, this.label),
      div('.r-form-item-content', 
        ...(this.$slots.default || []),
        div('.r-form-item-error-tip', this.errorMsg)
      )
    )
  }
}

export default FormItem
</script>