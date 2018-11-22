<style src="./timeline.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, ul, li} = jsx

var Timeline = {
  name: 'RTimeline',
  props: {
    pending: Boolean,
    mode: {
      type: String,
      // vertical, horizontal
      default: 'vertical',
    }
  },
  render (h) {
    jsx.h = h

    return ul('.r-timeline', {
      'c_r-timeline-pending': this.pending ? true : false,
      'c_r-timeline-horizontal': this.mode === 'horizontal',
    },
      ...(this.$slots.default || []) )
  }
}

export default Timeline
</script>