"use client";

import Quiz from "@/components/quiz/Quiz";

const SpecQuizPage = ({ params }) => {
    return (
        <div>
            <Quiz id={params.id} />
        </div>
    );
};

export default SpecQuizPage;
