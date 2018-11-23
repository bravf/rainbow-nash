<script>

var {div, a, rIcon, rModal, rButton, p, span} = jsx

var thisVue
var $alert
var $confirm

var Alert = {
  data () {
    return {
      title: '',
      content: '',
      onOk: ()=>{},
      value: false
    }
  },
  methods: {
    show (content, title, onOk) {
      this.content = content
      this.title = title || document.title

      if (onOk){
        this.onOk = onOk
      }

      this.value = true
    },
    hide () {
      this.value = false
    },
    okClick () {
      this.onOk()
      this.value = false
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    return rModal({
      vmodel: [this, 'value'],
      a_title: this.title,
      a_width: 300,
      'c_r-alert-global': true
    },
      p(this.content),
      div({slot:'footer'},
        rButton({
          no_click () {
            me.okClick()
          }
        }, '确定')
      )
    )
  }
}

var Confirm = {
  data () {
    return {
      title: '',
      content: '',
      onOk: ()=>{},
      onCancel: ()=>{},
      value: false
    }
  },
  methods: {
    show (options) {
      this.content = options.content
      this.title = options.title || document.title
      
      if (options.onOk){
        this.onOk = options.onOk
      }

      if (options.onCancel){
        this.onCancel = options.onCancel
      }

      this.value = true
    },
    hide () {
      this.value = false
    },
    okClick () {
      this.onOk()
      this.value = false
    },
    cancelClick () {
      this.onCancel()
      this.value = false
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    return rModal({
      vmodel: [this, 'value'],
      a_title: this.title,
      a_width: 300,
      'c_r-confirm-global': true
    },
      p(this.content),
      div({slot:'footer'},
        rButton({
          no_click () {
            me.cancelClick()
          }
        }, '取消'),
        span(' '),
        rButton({
          p_type: 'primary',
          no_click () {
            me.okClick()
          }
        }, '确定')
      )
    )
  }
}

var getAlert = () => {
  if ($alert){
    return $alert
  }

  var Ctor = thisVue.extend(Alert)
  $alert = new Ctor

  $alert.$mount(document.createElement('div'))
  document.body.appendChild($alert.$el)

  return $alert
}

var getConfirm = () => {
  if ($confirm){
    return $confirm
  }

  var Ctor = thisVue.extend(Confirm)
  $confirm = new Ctor

  $confirm.$mount(document.createElement('div'))
  document.body.appendChild($confirm.$el)

  return $confirm
}

export default {
  use (Vue) {
    thisVue = Vue
  },
  alert (content, title, onOk) {
    getAlert().show(content, title, onOk)
  },
  confirm (options = {}) {
    getConfirm().show(options)
  },
}
</script>