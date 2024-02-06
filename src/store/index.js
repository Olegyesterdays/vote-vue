import {createStore} from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        votingTitle: "",

        vote: [
            {
                title: "title 1",
                typeQuestion: "one answer",
                answers: [
                    "title 1 answer 1",
                    "title 1 answer 2",
                    "title 1 answer 3",
                    "title 1 answer 4",
                    "title 1 answer 5",
                ]
            },
            {
                title: "title 2",
                typeQuestion: "several answers",
                answers: [
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
                answers: [
                    "name",
                    "surname"
                ]
            }
        ],

        answers: [
            {
                title: "title 1",
                answer: [
                    "title 1 answer 1",
                    "title 1 answer 2",
                    "title 1 answer 3",
                ]
            },
            {
                title: "title 2",
                answer: [
                    "title 2 answer 1",
                ]
            },
            {
                title: "title 2",
                answer: [
                    {
                        name: "Oleg"
                    },
                    {
                        surname: "Yesterday`s"
                    }
                ]
            }
        ],

        userID: 123
    },

    getters: {
        getVote(state) {
            return state.vote;
        },

        getAnswer(state) {
            return state.answers;
        },
    },

    mutations: {
        createVote(state, vote) {
            state.vote = vote
        },

        addAnswer(state, title, answer) {
            // <!-- TODO: Сделать нормальную проверку уже существующего ответа -->
            // let x = false
            // let xi = 0
            // for (let i = 0; i < state.answers.length; i++) {
            //     if (state.answers[i].title === title) {
            //         x = !x
            //         xi = i
            //         break
            //     }
            // }
            // if (x) {
            //     state.answers[xi].answer = answer
            // } else {
            //     state.answers.push({
            //         title: title,
            //         answer: answer
            //     });
            // }

            state.answers.push({
                title: title,
                answer: answer
            });
        },

        answerClear(state) {
            state.answers = []
        },

        voteClear(state) {
            state.vote = []
        }
    },

    actions: {
        async questionList({commit}) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/questionList');

                commit('createVote', response.data.response)
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async question({commit}) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/question');

                commit('createVote', response.data.response)
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async sendAnswer({commit}) {
            try {
                await axios.post('http://127.0.0.1:8000/sendAnswer',{
                    userID: store.state.userID,
                    votingTitle: store.state.votingTitle,
                    answers: store.state.answers
                });

                commit('answerClear')
                commit('voteClear')
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        }
    },
});

export default store;
