<template>
    <div class="nuxt-page-main">
        <div v-if="$auth.loggedIn">
            <Dashboard/>
        </div>

        <div v-else>
            <Login/>
        </div>

        <Snackbar/>
    </div>
</template>

<script>
import Dashboard from './Dashboard';
import Login from './Login';
import Snackbar from '~/components/Snackbar';

export default {
    name: 'NuxtPageMain',

    components: {
        Dashboard,
        Login,
        Snackbar,
    },
};
</script>
