<template lang="pug">
div
  div.panel
    h3| dropdown
  
    div.margin-10(style="margin-left: 200px;")
      r-dropdown(
        label="下拉菜单",
        placement="right"
      )
        r-dropdown-item(
          href="http://baidu.com",
          target="_blank"
        )| 百度百度百度百度百度百度百度百度
        r-dropdown-item(
          @click.native="hello"
        )| 360
        r-dropdown-item(
          href="https://www.sogou.com/"
        )| 搜狗
  
  div.panel
    h3|  small,right
  
    div.margin-10
      r-dropdown(
        label="下拉菜单",
        size="small"
      )
        r-dropdown-item(
          href="http://baidu.com",
          target="_blank"
        )| 百度
        r-dropdown-item(
          @click.native="hello"
        )| 360
        r-dropdown-item(
          href="https://www.sogou.com/"
        )| 搜狗
</template>

<script>
export default {
  methods: {
    hello () {
      alert('nihao')
    }
  }
}
</script>
