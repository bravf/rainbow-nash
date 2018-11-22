<template lang="pug">
div
  div.panel
    h3| page
  
    div.margin-10
      r-page(
        v-model="currPage",
        :total="total",
        :show-total="true",
        size="default",
        @change="pageChange"
      )

  div.panel
    h3| page
  
    div.margin-10
      r-page(
        v-model="currPage",
        :total="total",
        :show-total="false",
        size="small",
        :page-size="1000",
        @change="pageChange"
      )
</template>

<script>
export default {
  data () {
    return {
      currPage: 1,
      total: 23400,
    }
  },
  methods: {
    pageChange (num) {
      console.log(num)
    }
  }
}
</script>