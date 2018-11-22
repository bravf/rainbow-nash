<template lang="pug">
div
  div.panel
    h3| timeline
  
    div.margin-10
      r-timeline(pending)
        r-timeline-item(color="green")
          r-icon(type="trophy", slot="dot")
          p| 发布1.0版本
          p| asdfadfadfadfas
          p| asdfadfadfadfas
          p| asdfadfadfadfas
          p| asdfadfadfadfas

        r-timeline-item()| 发布2.0版本
        r-timeline-item()| 发布3.0版本
        r-timeline-item(color="red")
          a(href="#")| 查看更多

  div.panel
    h3| timeline - horizontal
    div.margin-10
      r-timeline(pending, mode="horizontal")
        r-timeline-item(color="green")
          r-icon(type="trophy", slot="dot")
          p| 发布1.0版本
          p| asdfadfadfadfas
          p| asdfadfadfadfas
          p| asdfadfadfadfas
          p| asdfadfadfadfas

        r-timeline-item()| 发布2.0版本
        r-timeline-item()| 发布3.0版本
        r-timeline-item(color="red")
          a(href="#")| 查看更多
</template>
