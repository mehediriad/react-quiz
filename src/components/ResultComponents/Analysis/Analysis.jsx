import Answers from "../../QuizComponents/Answers/Answers";
import "./Analysis.css"

const Analysis = () => {
    return (
        <div className="analysis">
            <h1>Question Analysis</h1>
            <h4>You answerd 5 out of 10 questions correctly</h4>

            <div className="question">
                <div className="qtitle">
                    <span className="material-icons-outlined"> help_outline </span>
                    Here goes the question from Learn with Sumit?
                </div>
                <Answers/>
            </div>

            <div className="question">
                <div className="qtitle">
                    <span className="material-icons-outlined"> help_outline </span>
                    Here goes the question from Learn with Sumit?
                </div>
                <div className="answers">
                    {/* <!-- Option 1 --> */}
                    <label className="answer" htmlFor="option1"> A New Hope 1 </label>

                    {/* <!-- Option 2 --> */}
                    <label className="answer" htmlFor="option2"> A New Hope 1 </label>

                    {/* <!-- Option 3 --> */}
                    <label className="answer" htmlFor="option3"> A New Hope 1 </label>

                    {/* <!-- Option 4 --> */}
                    <label className="answer wrong" htmlFor="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

                    {/* <!-- Option 5 --> */}
                    <label className="answer" htmlFor="option5"> A New Hope 1 </label>

                    {/* <!-- Option 6 --> */}
                    <label className="answer" htmlFor="option6"> A New Hope 1 </label>

                    {/* <!-- Option 7 --> */}
                    <label className="answer correct" htmlFor="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

                    {/* <!-- Option 8--> */}
                    <label className="answer" htmlFor="option8"> A New Hope 1 </label>

                    {/* <!-- Option 9 --> */}
                    <label className="answer" htmlFor="option9"> A New Hope 1 </label>

                    {/* <!-- Option 10 --> */}
                    <label className="answer" htmlFor="option10"> A New Hope 1 </label>
                </div>
            </div>
        </div>
    );
};

export default Analysis;