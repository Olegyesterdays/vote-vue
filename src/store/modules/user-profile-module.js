import axios from "axios";

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
        }
    },

    mutations: {
        userInformation(state, { userInformation }) {
            state.userInformation = userInformation
        },

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
        }
    },

    actions: {
        gettingUserInformation({ commit }) {
            axios.get("http://localhost:8000/profileUserInformation", {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
                }
            }).then((response) => {
                commit("userInformation", { response })
            }).catch((error) => {
                console.log(error)
            })
        },

        saveChanges({ state }) {
            axios.post("http://localhost:8000/profileSaveChanges", {
                userInformation: state.userInformation
            }, {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
                }
            }).then((response) => {

            }).catch((error) => {
                console.log(error)
            })
        }
    },

    namespaced: true
}
