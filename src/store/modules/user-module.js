import api from '@/services/api.js';
import router from "@/router"

export const userModule = {
    state: {
        theme: "",
        authToken: "",
        role: "",

        loginOrRegistration: "login",
        email: "test123@gmail.com",
        password: "123"
    },

    getters: {
        getCurrentTheme(state) {
            return state.theme
        },

        getAuthToken(state) {
            return state.authToken
        },

        getUserRole(state) {
            return state.role
        },

        getLoginOrRegistration(state) {
            return state.loginOrRegistration
        },

        getEmail(state) {
            return state.email
        },

        getPassword(state) {
            return state.password
        },
    },

    mutations: {
        loginOrRegistration(state) {
            state.loginOrRegistration = state.loginOrRegistration === 'login' ? 'registration' : 'login'
            state.email = ""
            state.password = ""
        },

        email(state, { email }) {
            state.email = email
        },

        password(state, { password }) {
            state.password = password
        },

        setTheme(state, { theme }) {
            state.theme = theme;
        },

        setAuthToken(state, { authToken }) {
            state.authToken = authToken;
        },

        setUserRole(state, { role }) {
            state.role = role;
        },

        switchTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);

            if (state.theme === 'light') {
                document.documentElement.style.setProperty('--accent-color', '#ED202E');
                document.documentElement.style.setProperty('--secondary-color', '#9DB0BB');
                document.documentElement.style.setProperty('--black-color', '#000000');
                document.documentElement.style.setProperty('--additional-color', '#0065E2');
                document.documentElement.style.setProperty('--neutral-color', '#E6F0FD');
                document.documentElement.style.setProperty('--main-color', '#FFFFFF');
            } else {
                document.documentElement.style.setProperty('--accent-color', '#ED202E');
                document.documentElement.style.setProperty('--secondary-color', '#9DB0BB');
                document.documentElement.style.setProperty('--black-color', '#0C0C0C');
                document.documentElement.style.setProperty('--additional-color', '#0065E2');
                document.documentElement.style.setProperty('--neutral-color', '#B3D1F7');
                document.documentElement.style.setProperty('--main-color', '#FFFFFF');
            }
        },

        clearEmailAndPassword(state) {
            state.email = ""
            state.password = ""
        },

        clearDataUser(state) {
            state.theme = "";
            state.authToken = "";
            state.role = "";
        },
    },

    actions: {
        fetch({ commit }) {
            commit("setAuthToken", { authToken: localStorage.getItem("authToken")})
            commit("setTheme", { theme: localStorage.getItem("theme")})
            commit("setUserRole", { role: localStorage.getItem("role")})
        },

        update({ state }) {
            localStorage.setItem("authToken", state.authToken);
            localStorage.setItem("theme", state.theme);
            localStorage.setItem("role", state.role);
        },

        login({ commit, state }) {
            api.post("/user/login", {
                email: state.email,
                password: state.password

            }).then((response) => {
                commit("setAuthToken", { authToken: response.data.token })
                commit("setTheme", { theme: "light" })
                commit("setUserRole", { role: "super-admin" })
                commit("clearEmailAndPassword")

                router.push({ path: "/account" })

            }).catch((error) => {
                console.log(error)
            })
        },

        registration({ commit, state }) {
            api.post("/user", {
                email: state.email,
                password: state.password

            }).then((response) => {
                commit("setAuthToken", { authToken: response.data.token })
                commit("setTheme", { theme: "light-theme" })
                commit("setUserRole", { role: "admin" })
                commit("clearEmailAndPassword")

                router.push({ path: "/account" })

            }).catch((error) => {
                console.log(error)
            })
        },
    },

    namespaced: true
}
