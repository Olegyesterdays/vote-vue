import { createStore } from 'vuex';
import { voteModule } from "@/store/modules/vote-module.js";
import { authModule } from "@/store/modules/auth-module.js";
import { adminModule } from "@/store/modules/admin-module.js"
import { statisticsModule } from "@/store/modules/statistics-module.js";
import { createVoteModule } from "@/store/modules/create-vote-module.js";

const store = createStore({
    modules: {
        voteModule: voteModule,
        authModule: authModule,
        adminModule: adminModule,
        statisticsModule: statisticsModule,
        createVoteModule: createVoteModule
    },
});

export default store;
