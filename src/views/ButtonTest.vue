<template lang="pug">
  div
    div.margin-10
      r-button-group
        r-button(type="primary")| 原始按钮
        r-button(type="default")| 默认按钮
        r-button(type="success")| 成功按钮
        r-button(type="danger")| 失败按钮
        r-button(type="warning")| 警告按钮
        r-button(:disabled="true")| 禁用按钮
        r-button(icon="plus-round", href="https://baidu.com")| 这是一个链接按钮
    
    div.margin-10
      r-button()| 默认按钮
      r-button(size="small")| 小型按钮
    
    div.margin-10
      r-button(:long="true")| block按钮
    
    div.margin-10
      r-button(html-type="submit")| submit按钮
      r-button(html-type="reset")| reset按钮
    
    div.margin-10
      r-button-group
        r-button(icon="plus-round")| 添加
        r-button(icon="plus-round", icon-pos="after")| 添加
        r-button(icon="heart")
    
    div.margin-10
      r-button(:loading="true")| 新增

    div.margin-10
      r-button-group
        r-button()| 前进
        r-button()| 后退
    
    div.margin-10
      r-button-group(align="center")
        r-button()| 昨日
        r-button(disabled)| 今日
        r-button()| 明日
    
    div.margin-10
      r-button-group(size="small", align="right")
        r-button(type="primary")| 昨日
        r-button(type="primary")| 明日
</template>
