<template>
    <div class="nuxt-component-charts-random">
        <Bar :chart-data="datacollection"></Bar>

        <v-btn
            class="ma-2"
            color="info"
            @click="randomizeData()"
        >
            Change data
        </v-btn>
    </div>
</template>

<script>
import Bar from './charts/Bar'

export default {
    name: 'nuxt-component-bar-chart',

    components: {
        Bar,
    },

    data() {
        return {
            datacollection: null,
        }
    },
    mounted() {
        this.randomizeData();
    },

    methods: {
        randomizeData () {
            this.datacollection = {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],

                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#F44336",
                        data: this.getRandomInt()
                    },
                                {
                        label: "Data Two",
                        backgroundColor: "#2196F3",
                        data: [...Array(12)].map(() => Math.floor(Math.random() * (100 - 10 + 1)))
                    },
                                {
                        label: "Data Three",
                        backgroundColor: "#FFCA22",
                        data: [...Array(12)].map(() => Math.floor(Math.random() * (100 - 10 + 1)))
                    }
                ],
            }
        },

        getRandomInt () {
            return [...Array(12)].map(() => Math.floor(Math.random() * (100 - 10 + 1)));
        },
    },
}
</script>
