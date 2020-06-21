<template>
    <div class="nuxt-component-bar-chart">
        <Bar :chart-data="datacollection"/>

        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="true"
            min-width="290px"
            offset-y
            transition="scale-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    class="ma-2"
                    color="info"
                    v-on="on"
                >
                    Change data
                </v-btn>
            </template>

            <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="randomizeData"
            />
        </v-menu>
    </div>
</template>

<script>
import Bar from './charts/Bar';

export default {
    name: 'NuxtComponentBarChart',

    components: { Bar },

    data() {
        return {
            datacollection: null,
            menu: false,
            date: '',
        };
    },

    methods: {
        randomizeData() {
            this.datacollection = {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],

                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#F44336',
                        data: this.getRandomInt(),
                    },
                    {
                        label: 'Data Two',
                        backgroundColor: '#2196F3',
                        data: [ ...Array(12) ].map(() => Math.floor(Math.random() * (100 - 10 + 1))),
                    },
                    {
                        label: 'Data Three',
                        backgroundColor: '#FFCA22',
                        data: [ ...Array(12) ].map(() => Math.floor(Math.random() * (100 - 10 + 1))),
                    },
                ],
            };
        },

        getRandomInt() {
            return [ ...Array(12) ].map(() => Math.floor(Math.random() * (100 - 10 + 1)));
        },
    },
};
</script>

<style lang="scss">
.nuxt-component-bar-chart{
    max-width: 600px;
    margin: auto;
}
</style>
