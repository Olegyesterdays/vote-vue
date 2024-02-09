export const createVoteModule = {
    state: {
        userID: "",

        votingTitle: "",

        description: "",

        question: {
            questionTitle: "",
            answers: []
        },

        answer: "",

        newVote: {
            votingTitle: "votingTitle",
            description: "description",
            questions: [
                {
                    questionTitle: "questionTitle 1",
                    answers: [
                        "questionTitle 1 answers 1",
                        "questionTitle 1 answers 2",
                        "questionTitle 1 answers 3",
                        "questionTitle 1 answers 4",
                        "questionTitle 1 answers 5",
                    ]
                },
                {
                    questionTitle: "questionTitle 2",
                    answers: [
                        "questionTitle 2 answers 1",
                        "questionTitle 2 answers 2",
                        "questionTitle 2 answers 3",
                        "questionTitle 2 answers 4",
                        "questionTitle 2 answers 5",
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

        addQuestion(state) {
            if (!state.newVote === {}) {
                state.newVote.questions.push(state.question)
            }
        },

        addQuestionTitle(state, title) {
            state.question.questionTitle = title
        },

        createAnswer(state, answer) {
            state.answer = answer
        },

        addAnswer(state) {
            state.question.answers.push(state.answer)
        }
    },

    actions: {},

    namespaced: true
}
