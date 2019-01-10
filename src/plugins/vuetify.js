import Vue from 'vue'
import Vuetify ,{
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VForm,
  VToolbar,
  VTextField,
} from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VForm,
    VToolbar,
    VTextField,
  },
})
