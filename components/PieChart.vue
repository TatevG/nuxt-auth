<script>
import { Pie } from 'vue-chartjs';

export default {
    name: 'NuxtComponentPieChart',

    extends: Pie,

    mounted() {
        this.gradient = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 450);
        this.gradient2 = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 450);

        this.gradient3 = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 450);

        this.gradient.addColorStop(0, 'rgba(244, 67, 54, 0.9)');
        this.gradient.addColorStop(1, 'rgba(244, 67, 54, 0.25)');

        this.gradient2.addColorStop(0, 'rgba(33, 150, 243, 0.9)');
        this.gradient2.addColorStop(1, 'rgba(33, 150, 243, 0.25)');

        this.gradient3.addColorStop(0, 'rgba(255, 219, 0, 0.9)');
        this.gradient3.addColorStop(1, 'rgba(255, 219, 0, 0.25)');

        this.renderChart({
            labels: [
                'Data One',
                'Data Two',
                'Data Three',
            ],

            datasets: [
                {
                    backgroundColor: [
                        this.gradient,
                        this.gradient2,
                        this.gradient3,
                    ],
                    data: [
                        40,
                        20,
                        10,
                    ],
                },
            ],
        },
        {
            responsive: true,
            maintainAspectRatio: false,
        });
    },
};
</script>
