import { createStore } from 'vuex';
import { voteModule } from "@/store/modules/vote-module.js";
import { authModule } from "@/store/modules/auth-module.js";

const store = createStore({
    modules: {
        voteModule: voteModule,
        authModule: authModule
    },
});

export default store;
