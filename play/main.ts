import { createApp } from 'vue';
import App from './App.vue';
import UIcon from '@ui-lib/components/icon';
import UButton from '@ui-lib/components/button';
import '@ui-lib/theme-chalk/src/index.scss';

const app = createApp(App);

app.use(UIcon);
app.use(UButton);

app.mount('#app');
