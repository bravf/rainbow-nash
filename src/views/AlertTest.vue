<template lang="pug">
div.panel
  h3| Alert
  div.margin-10
    r-alert(type="success")
      | 成功提示的文案
    r-alert(type="info")
      | 消息提示的文案
    r-alert(closeable, type="warning")
      | 警告提示的文案
    r-alert(closeable, type="danger", @close="close")
      p| 错误提示的文案
      p| 错误提示的文案2
      a(href="https://baidu.com") 百度
</template>

<script>
export default {
  methods: {
    close (e) {
      console.log(e)
    }
  }
}
</script>