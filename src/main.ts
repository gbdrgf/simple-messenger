import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index';
import {useMessagesStore} from "@/store/messages";
import {useUsersStore} from "@/store/users";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const usersStore = useUsersStore(pinia);
const messagesStore = useMessagesStore(pinia);

usersStore.loadCurrentUser();
messagesStore.loadMessages();

app.mount('#app');
