import axios from "axios";

export const statisticsModule = {
    state: {
        vote: {
            votingTitle: "votingTitle 1",
            description: "description vote",
            numberOfQuestions: 5,
            creationDate: "11.11.1111",
            updateDate: "11.11.1111",
            numberOfParticipants: "11111"
        },

        questions: [
            {
                title: "title 1",
                numberOfParticipants: "",
                answersToQuestions: [
                    {
                        title: "title 1 answer 1",
                        voteCount: 11,
                    },
                    {
                        title: "title 1 answer 2",
                        voteCount: 12
                    },
                    {
                        title: "title 1 answer 3",
                        voteCount: 13
                    },
                    {
                        title: "title 1 answer 4",
                        voteCount: 14
                    },
                    {
                        title: "title 1 answer 5",
                        voteCount: 15
                    },
                ],
            },
            {
                title: "title 2",
                numberOfParticipants: "",
                answersToQuestions: [
                    {
                        title: "title 2 answer 1",
                        voteCount: 21
                    },
                    {
                        title: "title 2 answer 2",
                        voteCount: 22
                    },
                    {
                        title: "title 2 answer 3",
                        voteCount: 23
                    },
                    {
                        title: "title 2 answer 4",
                        voteCount: 24
                    },
                    {
                        title: "title 2 answer 5",
                        voteCount: 25
                    },
                ]
            },
            {
                title: "title 2",
                numberOfParticipants: "",
                answersToQuestions: [
                    {
                        title: "title 2 answer 1",
                        voteCount: 21
                    },
                    {
                        title: "title 2 answer 2",
                        voteCount: 22
                    },
                    {
                        title: "title 2 answer 3",
                        voteCount: 23
                    },
                    {
                        title: "title 2 answer 4",
                        voteCount: 24
                    },
                    {
                        title: "title 2 answer 5",
                        voteCount: 25
                    },
                ]
            },
            {
                title: "title 2",
                numberOfParticipants: "",
                answersToQuestions: [
                    {
                        title: "title 2 answer 1",
                        voteCount: 21
                    },
                    {
                        title: "title 2 answer 2",
                        voteCount: 22
                    },
                    {
                        title: "title 2 answer 3",
                        voteCount: 23
                    },
                    {
                        title: "title 2 answer 4",
                        voteCount: 24
                    },
                    {
                        title: "title 2 answer 5",
                        voteCount: 25
                    },
                ]
            },
            {
                title: "title 2",
                numberOfParticipants: "",
                answersToQuestions: [
                    {
                        title: "title 2 answer 1",
                        voteCount: 21
                    },
                    {
                        title: "title 2 answer 2",
                        voteCount: 22
                    },
                    {
                        title: "title 2 answer 3",
                        voteCount: 23
                    },
                    {
                        title: "title 2 answer 4",
                        voteCount: 24
                    },
                    {
                        title: "title 2 answer 5",
                        voteCount: 25
                    },
                ]
            }
        ]
    },

    getters: {
        getVotingTitle(state) {
            return state.vote.votingTitle;
        },

        getDescription(state) {
            return state.vote.description
        },

        getNumberOfQuestions(state) {
            return state.vote.numberOfQuestions;
        },

        getCreationDate(state) {
            return state.vote.creationDate;
        },

        getUpdateDate(state) {
            return state.vote.updateDate;
        },

        getNumberOfParticipants(state) {
            return state.vote.numberOfParticipants;
        },

        getQuestions(state) {
            return state.questions;
        },
    },

    mutations: {

    },

    actions: {

    },

    namespaced: true
}
