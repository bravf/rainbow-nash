<template lang="pug">
div.panel
  h3| tree
  div.margin-10(style="width:200px;")
    r-tree(
      :data="data",
      :multiple="true",
      :show-checkbox="true",
      @select-change="selectChange",
      @check-change="checkChange",
      ref="myTree"
    )
</template>

<script>
var data = [
  {
    title: 'parent 1',
    children: [{
        title: 'parent 1-0',
        children: [{
            title: 'leaf你好哈哈好的你好哈哈哈哈哈',
            __checked: true,
            __expand: true,
            __selected: true,
        }, {
            title: 'leaf',
            __checked: true
        }]
    }, {
        title: 'parent 1-1',
        children: [{
            title: '<span style="color: red">leaf</span>',
        }]
    }]
  }
]
export default {
  data () {
    return {
      data: data
    }
  },

  methods: {
    selectChange (nodes) {
      console.table(nodes)
    },
    checkChange (nodes){
      console.table(nodes)
    }
  }
}
</script>
