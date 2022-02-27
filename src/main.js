import { createApp } from "vue"
import Harlem from "@harlem/core"
import App from "./App.vue"

const app = createApp(App)

app.use(Harlem)

app.mount("#app")
