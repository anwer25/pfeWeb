import { createPinia } from "pinia";
// import i18n from "./i18n";
import vueTify from "./vuetify";
import router from '@/router';


const registerPlugins = (app: any) => {
    const pinia = createPinia()
	
    app.use(pinia).use(router).use(vueTify)
}


export default registerPlugins