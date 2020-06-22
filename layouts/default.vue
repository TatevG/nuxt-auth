<template>
    <v-app
        class="nuxt-layout-default"
        dark
    >
        <v-main>
            <v-container>
                <nuxt/>
            </v-container>
        </v-main>

        <v-footer
            app
            :fixed="fixed"
        >
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
import Vue from 'vue';
import randomizers from '~/mixins/randomizers.js';

Vue.mixin(randomizers);

export default {
    name: 'NuxtLayoutDefault',

    data() {
        return { fixed: false };
    },
};
</script>
