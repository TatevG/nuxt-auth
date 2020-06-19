<template>
    <v-app class="nuxt-page-login">
        <v-main>
            <v-container
                class="fill-height"
                fluid
            >
                <LoginForm/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue';

export default {
    name: 'NuxtPageLogin',

    components: { LoginForm },
};
</script>
