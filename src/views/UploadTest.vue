<template lang="pug">
div
  div.panel
    h3| upload
    div.margin-10
      r-upload(
        v-model="images",
        action="//jsonplaceholder.typicode.com/posts/",
        :on-success="onSuccess",
        :on-error="onError",
        :on-remove="onRemove",
        :multiple="true",
        :on-preview="onPreview",
        :before-upload="beforeUpload",
        accept="image/jpeg"
      )
        r-button(icon="ios-cloud-upload-outline")| 上传文件
    
  div.panel
    h3| upload
    div.margin-10

      r-upload(
        ref="upload2",
        v-model="images",
        action="//jsonplaceholder.typicode.com/posts/",
        :on-success="onSuccess",
        :on-error="onError",
        :on-remove="onRemove",
        :multiple="true",
        :on-preview="onPreview",
        list-type="image",
        :removeable="true",
      )
        r-button(icon="ios-cloud-upload-outline")| 上传文件
</template>

<script>
export default {
  data () {
    return {
      images: [
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        // {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        {name: '图片1', url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
        {name: '图片2', url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2192270794,402305022&fm=173&s=D0F58172808142E349DBB5D50200F0A9&w=600&h=594&img.JPEG'},
      ],
      //- allFiles: []
    }
  },
  computed: {
    allFiles () {
      var $upload2 = this.$refs.upload2
      if (!$upload2){
        return []
      }
      else {
        return this.$refs.upload2.getAllFiles()
      }
    } 
  },
  methods: {
    onSuccess (res, file) {
      //- console.log(res)
      this.images.push({
        name: file.name,
        url: res.id
      })
      //- this.$message(file.name + '上传成功', 'success')
    },
    onError (e, res, file) {
      this.$message(file.name + '上传失败', 'error')
    },
    onRemove (file) {
      this.$message(file.name + '被删除', 'warning')
    },
    onPreview (file) {
      this.$alert(file.url)
    },
    beforeUpload (file, callback){
      if (file.name.indexOf('.html') !== -1){
        this.$message('不能上传.html')
        callback(false)
      }
      else {
        callback(true)
      }
    }
  }
}
</script>