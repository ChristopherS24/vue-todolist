const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            // todolists: [
            //     'Alzarsi dal letto',
            //     'Lavarsi',
            //     'Fare colazione',
            //     'Studiare',
            //     'Pranzare',
            //     'Uscire con gli amici',
            //     'Cenare',
            //     'Guardare la televisione',
            //     'Andare a dormire non troppo tardi'
            // ],
            todolists: [
                {
                    text: 'Alzarsi dal letto',
                    done: true,
                },
                {
                    text: 'Lavarsi',
                    done: true,
                },
                {
                    text: 'Fare colazione',
                    done: false,
                },
                {
                    text: 'Studiare',
                    done: true,
                },
                {
                    text: 'Pranzare',
                    done: true,
                },
                {
                    text: 'Uscire con gli amici',
                    done: true,
                },
                {
                    text: 'Cenare',
                    done: true,
                },
                {
                    text: 'Guardare la televisione',
                    done: true,
                },
                {
                    text: 'Andare a dormire non troppo tardi',
                    done: false,
                },
            ],
            newTodolist: ''
        };
    },
    methods: {
        addTodolist() {
            const cleanTodolist = this.newTodolist.trim();

            if (cleanTodolist != '') {
                this.todolists.push({
                    text: cleanTodolist,
                    done: false
                });
                this.newTodolist = '';
            }
        },
        removeTodolist(i) {
            this.todolists.splice(i, 1);
        }
    }
}).mount('#app');