"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "@/app/index.module.css";
import { useSigner } from "@/hooks/useSigner";

const QuizQuestion = ({ question, nqfunc }) => {
    const [selectedOption, setSelectedOption] = useState(0); // Initialize state for the selected option
    const [correct, setCorrect] = useState(false);

    const options = question.options.map((option, index) => (
        <div className="form-control" key={index}>
            <label className="label cursor-pointer">
                <span className="label-text">{option}</span>
                <input
                    id={index}
                    type="radio"
                    name={"radio-" + question.answer}
                    className="radio checked:bg-success"
                    checked={selectedOption == index} // Set checked based on whether the current option index matches the selectedOption state
                    onChange={(e) => {
                        setSelectedOption(e.target.id);
                        if (e.target.id == question.correct) {
                            setCorrect(true);
                        } else {
                            setCorrect(false);
                        }
                    }} // Update selected option when the radio button is clicked
                />
            </label>
        </div>
    ));

    async function handleClick() {
        nqfunc(correct);
    }

    return (
        <>
            <div
                className={clsx(
                    "card w-96 shadow-xl hover:border-primary",
                    styles.featuresFeature
                )}
            >
                {" "}
                <div className="card-body">
                    <h2 className="card-title">{question.question}</h2>
                    <div className="card-actions flex flex-col items-center gap-1">
                        {options}
                        <button
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizQuestion;
