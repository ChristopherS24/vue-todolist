const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            todolist: [
                'Alzarsi dal letto',
                'lavarsi',
                'fare colazione',
                'studiare',
                'pranzare',
                'uscire con gli amici',
                'cenare',
                'andare a dormire non troppo tardi'
            ]
        };
    }
}).mount('#app')