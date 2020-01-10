<style src="./table.scss" lang="scss"></style>

<script>
import {getPropByPath} from '../../src/utils/instance'
import jsx from '../../src/utils/jsx'

var {table, thead, tbody, tr, th, td, col ,colgroup, div, rCheckbox, rRadio, span, rIcon, rLoading, rTag, a} = jsx

var Table = {
  name: 'RTable',
  props: {
    data: Array,
    border: Boolean,
    showHeader: {
      type: Boolean,
      default: true,
    },
    width: [String, Number],
    noDataText: {
      type: String,
      default: '暂无数据',
    },
    sortMethod: {
      type: Function,
      default: function (){}
    },
    sortField: String,
    // asc, desc
    sortDir: String,
    loading: Boolean,
    // 合计相关
    showSummary: Boolean,
    summaryText: {
      type: String,
      default: '合计'
    },
    summaryMethod: Function,
    // 是否记录所有选中，不受翻页、重新搜索等影响
    keepAllCheckeds: {
      type: Boolean,
      default: false,
    },
    allCheckedsRenderMethod: {
      type: Function,
      default (item) {
        return item[this.keyField]
      }
    },
    keyField: {
      type: String,
      default: 'id',
    },

  },
  data () {
    return {
      columnConfs: [],
      renderHook: 0,
      radioData: null,
      allCheckeds: [],
    }
  },
  watch: {
    data () {
      this._syncDataCheckeds(this.allCheckeds)
    }
  },
  computed: {
    cls () {
      var cls = ['r-table']

      if (this.border){
        cls.push('r-table-border')
      }

      return cls
    },
  },
  methods: {
    _getColumnConfs () {
      var confs = []
      
      if (!this.$slots.default){
        return
      }

      var propList = ['type', 'title', 'field', 'width', 'align', 'sortable', 'sortMethod', 'ellipsis']
      
      this.$slots.default.forEach(slot=>{
        var options = slot.componentOptions
        var instance = slot.componentInstance

        if (!options || (options.tag != 'r-table-column') ){
          return
        }

        var conf = {
          scopeSlot: instance.$scopedSlots.default
        }

        propList.forEach(prop=>{
          conf[prop] = instance[prop]
        })

        confs.push(conf)
      })

      this.columnConfs = confs
    },
    _renderThead () {
      var me = this
      var columnConfs = this.columnConfs

      return (
        thead(
          tr(
            ...columnConfs.map(conf => {
              return (
                th({'s_text-align': conf.align},
                  div(
                    // 内容
                    conf.type === 'checkbox' ? 
                    rCheckbox('.r-table-checkbox', {
                      p_checkedValue: me.data.length > 0 && me.data.filter(data => {return data.__checked === true}).length === me.data.length,
                      o_input (value) {
                        value = !!value

                        me.data.forEach(data=>{
                          data.__checked = value
                        })
                        if (me.keepAllCheckeds){
                          me._syncAllCheckeds(me.data)
                        }
                        me.$emit('check-all-change', value)

                        me.renderHook ++
                      }
                    })
                    :
                    span(conf.title),

                    // 是否有排序
                    span('.r-table-sort', {vif: conf.sortable},
                      rIcon({
                        'c_r-table-sort-active': (conf.field === me.sortField) && ('asc' === me.sortDir),
                        p_type: 'arrow-up-b',
                        no_click () {
                          me.sortMethod('asc', conf.field)
                        }
                      }),
                      rIcon({
                        'c_r-table-sort-active': (conf.field === me.sortField) && ('desc' === me.sortDir),
                        p_type: 'arrow-down-b',
                        no_click () {
                          me.sortMethod('desc', conf.field)
                        }
                      })
                    )
                  )
                )
              )
            })
          )
        )
      )
    },
    _renderExpandRow (conf, data, dataIdx) {
      jsx.h = this.$createElement
      var tdContent = ''
      if (conf.scopeSlot){
        tdContent = conf.scopeSlot({
          data: data,
          index: dataIdx
        })
      }

      return tr('.r-table-expand-row',
        td({
          a_colspan: this.columnConfs.length
        },
          tdContent
        )
      )
    },
    _renderTbody () {
      var me = this
      var columnConfs = this.columnConfs

      var dataSource = this.data
      if (!Array.isArray(dataSource)){
        dataSource = []
      }

      // 所有行
      var trs = []
      var expandConf
      
      dataSource.map( (data, dataIdx) => {
        var isExpandRow = false

        trs.push(
          tr({
            o_click (e) {
              me.$emit('row-click', data, e)
            }
          },
          // 列 start
          ...columnConfs.map(conf => {
            var tdContent

            if (conf.field){
              tdContent = span(getPropByPath(data, conf.field).get())
            }

            if (conf.type === 'index'){
              tdContent = span(dataIdx + 1)
            }
            else if (conf.type === 'expand'){
              tdContent = rIcon('.r-table-expand-switch', {
                p_type: data.__expand ? 'arrow-down-b' : 'arrow-right-b',
                s_cursor: 'pointer',
                no_click (e) {
                  data.__expand = !data.__expand
                  me.renderHook ++
                  e.stopPropagation()
                }
              })

              expandConf = conf
              if (data.__expand){
                isExpandRow = true
              }
            }
            else if (conf.type === 'checkbox'){
              tdContent = rCheckbox('.r-table-checkbox', {
                p_checkedValue: data.__checked === true,
                o_input (value) {
                  if (value === true){
                    data.__checked = true
                  }
                  else {
                    data.__checked = false
                  }

                  if (me.keepAllCheckeds){
                    me._syncAllCheckeds([data])
                  }
                  me.$emit('check-change', data)
                  me.renderHook ++
                },
                no_click (e) {
                  e.stopPropagation()
                }
              })
            }
            else if (conf.type === 'radio') {
              tdContent = rRadio('.r-table-radio', {
                p_checkedValue: data.__checked === true,
                o_input () {
                  if (data.__checked !== true){
                    data.__checked = true
                  }
                  else {
                    data.__checked = false
                  }

                  if (me.radioData && (me.radioData != data) ){
                    me.radioData.__checked = false
                  }

                  me.radioData = data

                  me.$emit('check-change', data)
                  me.renderHook ++
                },
                no_click (e) {
                  e.stopPropagation()
                }
              })
            }
            else {
              if (conf.scopeSlot){
                tdContent = conf.scopeSlot({
                  data: data,
                  index: dataIdx
                })
              }
            }

            return this._renderTd(conf, tdContent)
          })
          // 列 end
          )
        )

        if (isExpandRow){
          trs.push(
            me._renderExpandRow(expandConf, data, dataIdx)
          )
        }
      })

      return (
        tbody(
          tr({vif: !dataSource.length, 'c_no-data-text': true},
            td({a_colspan: columnConfs.length},
              div(this.noDataText)
            )
          ),
          ...trs,
          this._renderSummary()
        )
      )
    },
    _renderTd (column, text) {
      var style = {}

      if (column.ellipsis){
        style = {
          s_width: column.width + 'px',
          's_white-space': 'nowrap',
          s_overflow: 'hidden',
          's_text-overflow': 'ellipsis'
        }
      }

      return td({'s_text-align': column.align},
        div(style, text)
      )
    },
    _renderColgroup () {
      var columnConfs = this.columnConfs

      return (
        colgroup(
          ...columnConfs.map(conf => {
            return col({a_width: conf.width})
          })
        )
      )
    },
    _renderSummary () {
      var columnConfs = this.columnConfs
      var dataSource = this.data

      if (!(this.showSummary && dataSource.length && columnConfs.length)){
        return
      }

      var summaryData = this._getSummaryData(columnConfs, dataSource)

      return tr('.summary',
        ...summaryData.map((text, idx) => {
          var column = columnConfs[idx]
          return this._renderTd(column, text)
        })
      )
    },
    _renderAllCheckeds () {
      var me = this
      var nodes = [
        span(`一共选中 ${this.allCheckeds.length} 项,`),
        a({
          on_click () {
            me.allCheckeds.map(i => i.__checked = false)
            me._syncDataCheckeds(me.allCheckeds)
            me.allCheckeds = []
          }
        },'清空所选'),
      ]

      nodes.push(
        div({
          'class_all-checkeds-tags': true,
        }, ...this.allCheckeds.map((item, idx) => {
          var content = this.allCheckedsRenderMethod(item)
          return rTag({
            props_closeable: true,
            on_close () {
              item.__checked = false
              me.allCheckeds.splice(idx, 1)
              me._syncDataCheckeds([item])
            }
          },content)
        }))
      )

      return nodes
    },
    _getSummaryData (columnConfs, dataSource) {
      if (this.summaryMethod) {
        return this.summaryMethod(columnConfs, dataSource)
      }

      var summary = []

      columnConfs.forEach((column, idx) => {
        if (idx === 0){
          summary[idx] = this.summaryText
          return
        }
        if (!column.field){
          summary[idx] = ''
          return
        }

        var values = dataSource.map(item => Number(getPropByPath(item, column.field).get()))
        if (!values.every(value => isNaN(value))){
          summary[idx] = values.reduce((prev, curr) => {
            return prev + curr
          })
        }
        else {
          summary[idx] = ''
        }
      })
      return summary
    },

    // 同步allCheckeds
    _syncAllCheckeds (items) {
      items.forEach(item => {
        var isChecked = item.__checked
        var idx = this.allCheckeds.findIndex(i => i[this.keyField] === item[this.keyField])
        var isIn = idx !== -1

        if (isChecked){
          if (!isIn){
            this.allCheckeds.push(item)
          }
        }
        else {
          if (isIn){
            this.allCheckeds.splice(idx, 1)
          }
        }
      })
    },

    // 同步 data
    _syncDataCheckeds (items) {
      items.forEach(item => {
        var dataItem = this.data.find(i => i[this.keyField] === item[this.keyField])

        if (dataItem){
          dataItem.__checked = item.__checked
        }
      })
    },

    // 公开方法
    getCheckeds (field) {
      var checkeds = this.data.filter(i => i.__checked)
      return field ? checkeds.map(i => getPropByPath(i, field).get()) : checkeds
    },

    getAllCheckeds (field) {
      return field ? this.allCheckeds.map(i => getPropByPath(i, field).get()) : this.allCheckeds
    },
  },
  render (h) {
    jsx.h = h
    this.renderHook

    return (
      div('.' + this.cls.join('+'), {
        s_width: this.width + 'px'
      },
        div({
          vif: !!(this.keepAllCheckeds && this.allCheckeds.length),
          'class_all-checkeds': true,
        }, ...this._renderAllCheckeds()),
        table(
          ...(this.$slots.default || []) ,
          this._renderColgroup(),
          this.showHeader ? this._renderThead() : null,
          this._renderTbody(),
        ),
        rLoading({vif:this.loading})
      )
    )
  },
}

export default Table
</script>