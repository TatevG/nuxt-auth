<template>
    <v-row
        class="nuxt-component-login-form"
        align="center"
        justify="center"
    >
        <v-col
            cols="12"
            sm="8"
            md="4"
        >
            <v-card class="elevation-12">

                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>Login to Dashboard</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-form>
                        <v-text-field
                            v-model="username"
                            label="Login"
                            name="login"
                            prepend-icon="mdi-account"
                            type="text"
                            :rules="rules"
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            :rules="rules"
                        ></v-text-field>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="primary"
                        :disabled="username === '' || password === ''"
                        @click="userLogin"
                    >
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'nuxt-component-login-form',

    data() {
        return {
            username: '',
            password: '',
            rules: [ value => !!value || 'this field is required' ],
        }
    },

    computed: {
    ...mapState('login', ['loginUser']),
    },

    methods: {
        ...mapActions({
            login: 'login/login'
        }),

        userLogin(loginInfo) {
            this.login({
                username: this.username,
                password: this.password,
            })
            if(this.loginUser) {
                this.$nuxt.$router.replace({ path: '/dashboard' });
            }
        },
    },
}
</script>
