import Button from '../packages/button/button'
import ButtonGroup from '../packages/button-group/button-group'
import Icon from '../packages/icon/icon'
import Alert from '../packages/alert/alert'
import App from '../packages/app/app'
import Container from '../packages/container/container'
import Aside from '../packages/container/aside'
import Header from '../packages/container/header'
import Main from '../packages/container/main'
import Footer from '../packages/container/footer' 
import Breadcrumb from '../packages/breadcrumb/breadcrumb' 
import BreadcrumbItem from '../packages/breadcrumb/breadcrumb-item' 
import Card from '../packages/card/card' 
import Checkbox from '../packages/checkbox/checkbox' 
import CheckboxGroup from '../packages/checkbox/checkbox-group' 
import Datepicker from '../packages/datepicker/datepicker' 
import Input from '../packages/input/input' 

var components = [
  Button,
  ButtonGroup,
  Icon,
  Alert,
  App,
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Input,
]

var install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  }) 
}

if ( (typeof window !== 'undefined') && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
}
