<template lang="pug">
r-app
  div(slot="header")
    div| header
  div(slot="aside")
    div
      r-menu(
        mode="vertical",
        v-model="activeMenu"
      )
        r-menu-item(name="1")
          r-icon(type="ios-paper")
          | 内容管理

        r-menu-item(name="2")
          r-icon(type="ios-people")
          | 用户管理
        
        r-sub-menu(name="3")
          template(slot="title")
            r-icon(type="stats-bars")
            | 统计分析
          
          r-menu-group(title="使用")
            r-menu-item(
              name="3-1",
              href="http://baidu.com",
              target="_blank"
            )
              | 新增和启动
            r-menu-item(name="3-2")| 活跃分期
            r-menu-item(name="3-3")| 时段分析

          r-menu-group(title="留存")
            r-menu-item(name="3-4")| 用户留存
            r-menu-item(name="3-5")| 流失用户

        r-menu-item(
          name="4", 
          href="http://baidu.com"
        )
          r-icon(type="settings")
          |综合设置
      
        r-sub-menu(name="5")
          template(slot="title")
            r-icon(type="stats-bars")
            | 统计分析
          
          r-menu-group(title="使用")
            r-menu-item(
              name="5-1",
              href="http://baidu.com",
              target="_blank"
            )
              | 新增和启动
            r-menu-item(name="5-2")| 活跃分期
            r-menu-item(name="5-3")| 时段分析

          r-menu-group(title="留存")
            r-menu-item(name="5-4")| 用户留存
            r-menu-item(name="5-5")| 流失用户
  div(slot="main")
    div| main
</template>

<script>
export default {
  data () {
    return {
      activeMenu: '3-2'
    }
  }
}
</script>
