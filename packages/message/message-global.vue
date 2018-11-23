<script>
import Message from './message'

var thisVue
var $message

var getMessage = () => {
  if ($message){
    return $message
  }

  var Ctor = thisVue.extend(Message)
  $message = new Ctor

  $message.$mount(document.createElement('div'))
  document.body.appendChild($message.$el)

  return $message
}

var message = (msg, type) => {
  return getMessage().show(msg, type)
}

export default {
  use (Vue) {
    thisVue = Vue
  },
  getMessage,
  message,
}
</script>