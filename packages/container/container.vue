<style src="./container.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div} = jsx

var Container = {
  name: 'RContainer',
  computed: {
    cls () {
      var cls = ['r-container']

      return cls
    },
  },
  methods: {
    _hasAside () {
      var has = false

      this.$slots.default.some(slot=>{
        var options = slot.componentOptions

        if (options && (options.tag === 'r-aside') ){
          has = true
          return true
        }
        else {
          return false
        }
      })

      return has
    }
  },  
  render (h) {
    jsx.h = h
    this._hasAside()

    return div('.r-container', {
      'c_r-container-vertical': this._hasAside()
      }, ...this.$slots.default)
  }
}

export default Container
</script>