"use client";

import { useState, useEffect } from "react";
import data from "@/utils/quizes.json";
import { Container } from "@/components/container/Container";
import QuizCard from "@/components/quiz/QuizCard";
import { getCookie } from "../../app/actions";

const QuizGrid = () => {
    let quizes = [];
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const stored_quizes = Number((await getCookie()).value);
            const num_quizes = data.quizes.length;
            const progressValue = Math.floor((stored_quizes / num_quizes) * 100);
            setProgress(progressValue);
        };
        fetchData();
    }, []);

    data.quizes.forEach((e, index) => {
        quizes.push(
            <QuizCard
                key={index}
                href={"/dashboard/quiz/" + index.toString()}
                title={e.quiz_title}
            />
        );
    });

    return (
        <>
            <Container className="mt-24 mb-24 gap-4 flex flex-col items-center">
                <div
                    className=" radial-progress text-primary"
                    style={{ "--value": progress }}
                    role="progressbar"
                >
                    {progress}%
                </div>
                <div className="flex flex-wrap justify-center mb-24 mt-24 gap-4">{quizes}</div>
            </Container>
        </>
    );
};

export default QuizGrid;

// TODO

// increment isCorrect if it is right, check with current length of quiz answers
// loop around if quiz is wrong

// sign transaction to sign your progress -> tableland
