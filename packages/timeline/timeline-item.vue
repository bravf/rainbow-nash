<style src="./timeline.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, ul, li} = jsx

var TimelineItem = {
  name: 'RTimelineItem',
  props: {
    // 枚举，blue, red, green
    color: {
      type: String,
      default: 'blue',
    }
  },
  computed: {
    cls () {
      var cls = ['r-timeline-item']

      cls.push('r-timeline-item-' + this.color)

      return cls
    }
  },
  render (h){
    jsx.h = h

    return li('.' + this.cls.join('+'),
      // 竖线
      div('.r-timeline-item-line'),
      // 图标
      div('.r-timeline-item-head', {
        'c_r-timeline-item-head-custom': this.$slots.dot ? true : false
        }, ...(this.$slots.dot || []) 
      ),
      // 内容
      div('.r-timeline-item-content', ...(this.$slots.default || []) )
    )
  }
}

export default TimelineItem
</script>