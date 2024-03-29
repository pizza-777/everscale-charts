import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
            {
                path: '/accounts',
                name: 'Accounts',
                component: ()=> import('../components/accounts.vue')
            },
            {
                path: '/blocks',
                name: 'Blocks',
                component: ()=> import('../components/blocks/Common.vue')
            },
            {
                path: '/transactions',
                name: 'Transactions',
                component: ()=> import('../components/transactions/Common.vue')
            },
            {
                path: '/StakesGiversUsers',
                name: 'StakesGiversUsers',
                component: ()=> import('../components/StakesGiversUsers.vue')
            },
            {
                path: '/surfTransactionsVolumes',
                name: 'surfTransactionsVolumes',
                component: ()=> import('../components/surfTransactionsVolumes/Common.vue')
            },
            {
                path: '/allTransactionsVolumes',
                name: 'allTransactionsVolumes',
                component: ()=> import('../components/allTransactionsVolumes/Common.vue')
            },
            {
                path: '/spentTokensFromGivers',
                name: 'spentTokensFromGivers',
                component: ()=> import('../components/spentTokensFromGivers/Common.vue')
            },
            {
                path: '/surfAndSafeMultisigTransactionsCount',
                name: 'surfAndSafeMultisigTransactionsCount',
                component: ()=> import('../components/surfAndSafeMultisigTransactionsCount/Common.vue')
            },
            {
                path: '/dailyTransactionsCount',
                name: 'dailyTransactionsCount',
                component: ()=> import('../components/dailyTransactionsCount/Common.vue')
            },
            {
                path: '/coldTons',
                name: 'coldTons',
                component: ()=> import('../components/coldTons/Common.vue')
            },
            {
                path: '/Stakes-vs-Free-Circulation',
                name: 'Stakes-vs-Free-Circulation',
                component: ()=> import('../components/StakesFreeCirculationProportion/chart.vue')
            },
            {
                path: '/newSurfAccounts',
                name: 'newSurfAccounts',
                component: ()=> import('../components/newSurfAccounts/Common.vue')
            },
            {
                path: '/exchanges',
                name: 'exchanges',
                component: ()=> import('../components/Exchanges/Common.vue')
            },
            {
                path: '/providers',
                name: 'providers',
                component: ()=> import('../components/Providers/Common.vue')
            },
            {
                path: '/btcSpots',
                name: 'btcSpots',
                component: ()=> import('../components/btcSpots/Common.vue')
            }
        ]
    
const router = new VueRouter({
    routes
})

export default router