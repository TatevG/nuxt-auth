<template>
    <v-snackbar
        class="nuxt-component-snackbar"
        v-model="snackbarOpen"
        :color="status"
        :timeout="timeout"
        top
    >
        {{ text }}

        <v-btn
            dark
            text
            @click="close"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'nuxt-component-snackbar',

    data() {
        return {
            snackbarOpen: false,
            color: ''
        }
    },

    computed: {
    ...mapState('snackbar', ['open', 'text', 'status', 'timeout']),
  },

    watch: {
        open: {
            immediate: true,

            handler(newVal) {
                this.snackbarOpen = newVal;
            },
        },
        snackbarOpen(newValue) {
            if(!newValue) this.closeSnackbar();
        },
    },

    methods: {
        ...mapActions({
            closeSnackbar: 'snackbar/closeSnackbar',
        }),
        close() {
            this.snackbarOpen = false;
        }
    }
}
</script>