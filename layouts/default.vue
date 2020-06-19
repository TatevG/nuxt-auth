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
export default {
    name: 'NuxtLayoutDefault',

    data() {
        return { fixed: false };
    },
};
</script>
