<template lang="pug">
r-tabs(style="margin:10px;", v-model="tabsValue")
  r-tab-pane(
    name="pane1",
    label="macOS",
    icon="social-apple"
  )
    div| macOS
    r-input(v-model="input")
    div {{input}}
  
  r-tab-pane(
    name="pane2",
    label="Windows",
    icon="social-windows"
  )
    div| Windows1
  
  r-tab-pane(
    name="pane3",
    label="Linux",
    v-if="test",
    icon="social-tux"
  )
    div| Linux
</template>

<script>
export default {
  data () {
    return {
      test: true,
      tabsValue: '',
      input: ''
    }
  }
}
</script>
