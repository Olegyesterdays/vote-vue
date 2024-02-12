import { createStore } from 'vuex';
import { voteModule } from "@/store/modules/vote-module.js";
import { authModule } from "@/store/modules/auth-module.js";
import { accountModule } from "@/store/modules/account-module.js"
import { statisticsModule } from "@/store/modules/statistics-module.js";
import { createVoteModule } from "@/store/modules/create-vote-module.js";

const store = createStore({
    modules: {
        voteModule: voteModule,
        authModule: authModule,
        accountModule: accountModule,
        statisticsModule: statisticsModule,
        createVoteModule: createVoteModule
    },
});

export default store;
