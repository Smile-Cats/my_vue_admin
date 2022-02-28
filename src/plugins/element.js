import Vue from 'vue'
import { Col, Card, Loading, Row, Tag, Button, Form, FormItem, Input, Message, Container, Header, Aside, Main, Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem, TableColumn, Table, Switch, Dialog } from 'element-ui'
// 从 element-ui中按需引入组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// home页面布局所需要的组件
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Loading)
Vue.use(Col)
Vue.use(Card)

Vue.prototype.$message = Message
