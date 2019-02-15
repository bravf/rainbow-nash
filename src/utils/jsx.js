import jsx from 'vue-jsx'

'rRow,rCol,rContainer,rHeader,rAside,rMain,rIcon,rLoading,rCheckbox,rRadio,rTag,rSelectOption,rInput,rProgress,rModal,rButton,rButtonGroup,rSelect,rSelectOption,rLoading,rDatepicker,rTimepicker,rCard,rTabs,rPage,rDropdown,rDropdownItem,rMenu,rMenuItem,rSubMenu,rMenuGroup,rForm,rFormItem,rMessage,rTooltip,rProgress,rUpload,rTree,rTimeline,rTimelineItem,rApp,rBreadcrumb,rBreadcrumbItem,rTable,rTableColumn,rAlert'.split(',').forEach(tag => {
  jsx[tag] = jsx.bind(tag.replace(/([A-Z])/g, '-$1').toLowerCase())
})

export default jsx