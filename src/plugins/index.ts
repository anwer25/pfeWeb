import { createPinia } from "pinia";
// import i18n from "./i18n";
import vueTify from "./vuetify";
import router from '@/router';


const registerPlugins = (app: any) => {
    app.use(createPinia()).use(router).use(vueTify)
}


export default registerPlugins