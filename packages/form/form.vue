<style src="./form.scss" lang="scss"></style>

<script>
import {isObject, isArray, deepClone, isVueNodeType} from '../../src/utils/tools'
import {getParent, getPropByPath} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {form, div, label} = jsx

var Form = {
  name: 'RForm',
  props: {
    labelWidth: {
      type: [Number, String],
      default: 80
    },
    inline: Boolean,
    model: Object,
    rules: Object,
  },
  data () {
    return {
      oldModel: {}
    }
  },
  created () {
    this.oldModel = deepClone(this.model)
  },

  computed: {
    cls () {
      var cls = ['r-form']

      cls.push('r-form-label-right')

      if (this.inline){
        cls.push('r-form-inline')
      }

      return cls
    }
  },
  methods: {
    _getItems () {
      var items = []
      this._getItemsLoop(this, items)

      return items
    },
    _getItemsLoop (vueEl, items) {
      if (vueEl.$children){
        vueEl.$children.forEach(child=>{
          
          if (isVueNodeType(child, 'r-form-item')){
            if (child.prop){
              items.push(child)
            }
          }

          // 不处理嵌套 form
          if (!isVueNodeType(child, 'r-form')){
            this._getItemsLoop(child, items)
          }
        })
      }
    },

    validate (callback) {
      var items = this._getItems()
      
      var isError = false
      var itemCount = items.length
      var doneCount = 0

      if (!items.length){
        callback(true)
        return
      }

      items.forEach(item=>{
        item.validate(isOk=>{
          doneCount ++

          // 如果还没结束
          if (!isError){
            // 如果校验失败
            if (!isOk){
              isError = true
              callback(false, item)
              return
            }

            if (doneCount == itemCount){
              callback(true)
            }
          }

        })
      })
    },

    _resetObject (obj, oldObj) {
      for (var prop in obj){
        var val = obj[prop]
        var oldVal = oldObj[prop]

        if (isObject(val)){
          this._resetObject(val, oldVal)
        }
        else {
          obj[prop] = deepClone(oldVal)
        }
      }
    },

    resetValidate () {
      this._getItems().forEach(item=>{
        item.errorMsg = ''
      })
    },

    resetModel () {
      this._resetObject(this.model, this.oldModel)
    },

    reset () {
      this.resetModel()
      setTimeout(_=>{
        this.resetValidate()
      })
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    return form('.' + this.cls.join('+'), ...(this.$slots.default || []) )
  },
}

export default Form
</script>