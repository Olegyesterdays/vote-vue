export const createVoteModule = {
    state: {
        userID: "",

        votingTitle: "",

        description: "",

        newVote: {
            votingTitle: "votingTitle",
            description: "description",
            questions: [
                {
                    question: "question 1",
                    typeQuestion: "one answer",
                    answers: [
                        "question 1 answers 1",
                        "question 1 answers 2",
                        "question 1 answers 3",
                        "question 1 answers 4",
                        "question 1 answers 5",
                    ]
                },
                {
                    question: "question 2",
                    typeQuestion: "one answer",
                    answers: [
                        "question 2 answers 1",
                        "question 2 answers 2",
                        "question 2 answers 3",
                        "question 2 answers 4",
                        "question 2 answers 5",
                    ]
                },
                {
                    question: "question 2",
                    typeQuestion: "several answers",
                    answers: [
                        "question 2 answers 1",
                        "question 2 answers 2",
                        "question 2 answers 3",
                        "question 2 answers 4",
                        "question 2 answers 5",
                    ]
                },
                {
                    question: "question 2",
                    typeQuestion: "user response",
                    answers: [
                        "question 2 answers 1",
                        "question 2 answers 2",
                        "question 2 answers 3",
                        "question 2 answers 4",
                        "question 2 answers 5",
                    ]
                }
            ]
        }
    },

    getters: {
        getUserID(state) {
            return state.userID
        },

        getVotingTitle(state) {
            return state.votingTitle
        },

        getDescription(state) {
            return state.description
        },

        getQuestions(state) {
            return state.newVote.questions
        }
    },

    mutations: {
        createVote(state, votingTitle, description) {
            state.newVote = {
                votingTitle: votingTitle,
                description: description,
                questions: []
            }
        },

        addQuestion(state, {answers, question}) {
            state.newVote.questions.push({
                question: question,
                answers: answers
            })
        },

        deleteQuestion(state, {index}) {
            state.newVote.questions.splice(index, 1)
        },

        createAnswer(state, answer) {
            state.answer = answer
        },

        typeQuestion(state, {typeQuestion}) {
            state.newVote.questions[state.newVote.questions.length - 1].typeQuestion = typeQuestion
        }
    },

    actions: {},

    namespaced: true
}
