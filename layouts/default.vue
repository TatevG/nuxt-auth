<template>
    <v-app
        class="nuxt-layout-default"
        dark
    >
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>

        <v-footer
            :fixed="fixed"
            app
        >
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'nuxt-layout-default',

    data() {
        return {
            fixed: false,
        };
    },
};
</script>
