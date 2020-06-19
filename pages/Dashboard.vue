<template>
    <v-layout class="nuxt-page-dashboard">
        <div class="nuxt-page-dashboard__chart">
            <AreaChart/>
        </div>

        <div class="nuxt-page-dashboard__chart">
            <PieChart/>
        </div>

        <div class="nuxt-page-dashboard__chart">
            <LineChart/>
        </div>

        <div class="nuxt-page-dashboard__chart">
            <BarChart/>
        </div>
    </v-layout>
</template>

<script>
import AreaChart from '~/components/AreaChart';
import BarChart from '~/components/BarChart';
import LineChart from '~/components/LineChart';
import PieChart from '~/components/PieChart';

export default {
    name: 'NuxtPageDashboard',

    components: {
        AreaChart,
        BarChart,
        LineChart,
        PieChart,
    },

    middleware: 'login',
};
</script>

<style lang="scss">
.nuxt-page-dashboard {
    flex-direction: column;

    &__chart {
        margin-bottom: 100px;
    }
}
</style>
