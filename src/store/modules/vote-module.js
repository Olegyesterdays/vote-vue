import axios from "axios";

export const voteModule = {
    state: {
        userID: 123,

        votingTitle: "",

        vote: [
            {
                titleQuestion: "title 1",
                typeQuestion: "one answer",
                options: [
                    { text: "1" },
                    { text: "2" },
                    { text: "3" },
                    { text: "4" },
                    { text: "5" },
                ],
                // answersToQuestions: [
                //     "title 1 answer 1",
                //     "title 1 answer 2",
                //     "title 1 answer 3",
                //     "title 1 answer 4",
                //     "title 1 answer 5",
                // ],
            },
            {
                title: "title 2",
                typeQuestion: "several answers",
                answersToQuestions: [
                    "title 2 answer 1",
                    "title 2 answer 2",
                    "title 2 answer 3",
                    "title 2 answer 4",
                    "title 2 answer 5",
                ]
            },
            {
                title: "title 3",
                typeQuestion: "user response",
                answersToQuestions: [
                    "name",
                    "surname"
                ]
            }
        ],

        answers: [],
    },

    getters: {
        getVote(state) {
            return state.vote;
        },
    },

    mutations: {
        createVote(state, vote) {
            state.vote = vote
        },

        addAnswer(state, payload) {
            const existingAnswerIndex = state.answers.findIndex(answer => answer.title === payload.title);
            if (existingAnswerIndex !== -1) {
                // Если объект с таким title уже существует, заменяем его
                state.answers.splice(existingAnswerIndex, 1, payload);
            } else {
                // Иначе добавляем новый объект в массив
                state.answers.push(payload);
            }
        },

        answerClear(state) {
            state.answers = []
        },

        voteClear(state) {
            state.vote = []
        }
    },

    actions: {
        async sendAnswer({ state, commit }) {
            try {
                await axios.post('http://127.0.0.1:8000/sendAnswer',{
                    userID: state.userID,
                    votingTitle: state.votingTitle,
                    answers: state.answers
                });

                commit('answerClear')
                commit('voteClear')
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async question({ commit }) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/question');

                commit('createVote', response.data.response)
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },
    },

    namespaced: true
}
