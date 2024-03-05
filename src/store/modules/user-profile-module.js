import api from '@/services/api.js';

export const userProfileModule = {
    state: {
        userInformation: {
            name: "",
            surname: "",
            patronymic: "",
            placeOfWork: "",
            role: "",
            post: "",
        }
    },

    getters: {
        getUserInformation(state) {
            return state.userInformation
        },
    },

    mutations: {
        editName(state, { name }) {
            state.userInformation.name = name
        },

        editSurname(state, { surname }) {
            state.userInformation.surname = surname
        },

        editPatronymic(state, { patronymic }) {
            state.userInformation.patronymic = patronymic
        },

        editPlaceOfWork(state, { placeOfWork }) {
            state.userInformation.placeOfWork = placeOfWork
        },

        editRole(state, { role }) {
            state.userInformation.role = role
        },

        editPost(state, { post }) {
            state.userInformation.post = post
        },
    },

    action: {
        gettingUserInformation({ commit }) {
            api.get("/profileUserInformation",
            ).then((response) => {
                commit("userInformation", { response })
            }).catch((error) => {
                console.log(error)
            })
        },

        saveChanges({ state }) {
            api.post("/profileSaveChanges", {
                userInformation: state.userInformation
            }).then((response) => {

            }).catch((error) => {
                console.log(error)
            })
        }
    },

    namespaced: true
}
