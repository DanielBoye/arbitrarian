"use client";
import { useState, useEffect, useCallback } from "react";
import data from "@/utils/quizes.json";
import { Container } from "@/components/container/Container";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import { redirect } from "next/navigation";
import { incrementSolvedQuizes } from "@/utils/tableland";
import { useSigner } from "@/hooks/useSigner";
import { useAccount } from "wagmi";

const QuizComponent = ({ id }) => {
    const [questionsIndex, setQuestionsIndex] = useState(0);
    const [questions, setQuestions] = useState(data.quizes[id].questions);
    const [selectedQuestion, setSelectedQuestion] = useState(
        questions[questionsIndex]
    );
    const [numSolvesQuestions, setNumSolvesQuestions] = useState(1);
    const signer = useSigner();
    const account = useAccount();

    useEffect(() => {
        setSelectedQuestion(questions[questionsIndex]);
    }, [questionsIndex, questions]);

    const nextQuestion = useCallback(
        async (correct) => {
            if (numSolvesQuestions == questions.length) {
                await incrementSolvedQuizes(signer, "", account.address);
                // redirect("/dashboard/quiz")
                window.location.href = "/dashboard/quiz"
            }
            if (correct && questionsIndex < questions.length - 1) {
                setQuestionsIndex((prevIndex) => prevIndex + 1);
                setNumSolvesQuestions(numSolvesQuestions + 1);
            }
        },
        [questionsIndex, questions]
    );

    return (
        <Container className="flex flex-wrap justify-center mt-24 mb-24 gap-4">
            <QuizQuestion question={selectedQuestion} nqfunc={nextQuestion} />
        </Container>
    );
};

export default QuizComponent;
