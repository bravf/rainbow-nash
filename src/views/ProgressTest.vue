<template lang="pug">
div.panel
  h3| progress

  r-progress(:percent="percent")
  r-progress(:percent="percent", status="active")
  r-progress(:percent="percent", status="wrong")
  r-progress(:percent="percent", status="success", :stroke-width="5", hide-info)
</template>

<script>
export default {
  data () {
    return {
      percent: 10
    }
  }
}
</script>
