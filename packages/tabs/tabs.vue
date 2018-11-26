<style src="./tabs.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, rIcon} = jsx

var Tabs = {
  name: 'RTabs',
  props: {
    value: [String, Number],
  },
  data () {
    return {
      paneConfs: []
    }
  },
  methods: {
    _getPaneConfs () {
      var confs = []

      if (!this.$slots.default){
        return
      }

      var propList = ['name', 'label', 'icon', 'disabled']

      this.$slots.default.forEach(slot=>{
        var options = slot.componentOptions
        var instance = slot.componentInstance

        if (!options || (options.tag != 'r-tab-pane') ){
          return
        }

        var conf = {
          slot: instance.$slots.default
        }

        propList.forEach(prop=>{
          conf[prop] = instance[prop]
        })

        confs.push(conf)
      })

      this.paneConfs = confs
    }
  },
  render (h) {
    jsx.h = h
    var me = this

    // 当前选中索引
    var activeIdx = 0
    this.paneConfs.some( (conf, idx) =>{
      if (conf.name === this.value){
        activeIdx = idx
        return true
      }
      else {
        return false
      }
    })

    return (
      div('.r-tabs',
        ...(this.$slots.default || []),
        // tabs-head
        div('.r-tabs-head',
          ...this.paneConfs.map( (conf, idx) => {
            return div('.r-tabs-tab', {
              'c_r-tabs-tab-active': activeIdx === idx,
              o_click () {
                me.$emit('input', conf.name) 
              }
            },
              rIcon({vif: conf.icon, p_type: conf.icon}),
              conf.label
            )
          })
        ),
        // tabs-body
        ...this.paneConfs.map( (conf, idx) => {
          return div('.r-tabs-pane', {
            s_display: activeIdx === idx ? 'block' : 'none'
          }, ...(conf.slot || []) )
        })
      )
    )
  }
}

export default Tabs
</script>