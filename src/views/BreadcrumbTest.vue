<template lang="pug">
r-breadcrumb(separator="/")
  r-breadcrumb-item(:href="baidu", target="_blank") 百度
  r-breadcrumb-item(href="http://cnblogs.com", target="_blank") cnblogs
  r-breadcrumb-item| 文本
</template>

<script>
export default {
  data () {
    return {
      baidu: 'http://baidu.com'
    }
  }
}
</script>
