<template lang="pug">
div.panel
  h3| Tag
  div.margin-10
    r-tag()
      | 标签1
    r-tag()
      | 标签2
    r-tag(name="标签3", closeable, @close="tagClose")
      | 标签3
  
  div.margin-10
    r-tag(closeable, type="primary") 标签一
    r-tag(closeable, type="success") 标签二
    r-tag(closeable, type="info") 标签三
    r-tag(closeable, type="warning") 标签四
    r-tag(closeable, type="danger") 标签五
  
  h3| Tag small
  div.margin-10
    r-tag(size="small")
      | 标签1
    r-tag(size="small")
      | 标签2
    r-tag(size="small", name="标签3", closeable, @close="tagClose")
      | 标签3
</template>

<script>
export default {
  data () {
      return {}
    },
    methods: {
      tagClose (e, name) {
        console.log(e, name)
      }
    } 
}
</script>
