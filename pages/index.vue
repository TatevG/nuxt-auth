<template>
<div class="nuxt-page-main">
    <div v-if="$auth.loggedIn">
        <Dashboard/>
    </div>

    <div v-else>
        <Login />
    </div>

    <Snackbar />
</div>

</template>

<script>
import Dashboard from './Dashboard.vue';
import Login from './Login.vue';
import Snackbar from '~/components/Snackbar.vue';

export default {
    name: 'nuxt-page-main',
    components: {
        Dashboard,
        Login,
        Snackbar,
    },
};
</script>
