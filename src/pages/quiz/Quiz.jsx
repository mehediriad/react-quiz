import Answers from "../../components/QuizComponents/Answers/Answers";
import MiniPlayer from "../../components/QuizComponents/MiniPlayer/MiniPlayer";
import ProgressBar from "../../components/QuizComponents/ProgressBar/ProgressBar";
import "./Quiz.css"

const Quiz = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold">Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>

            <Answers/>

            <ProgressBar/>

            <MiniPlayer/>
        </div>
    );
};

export default Quiz;