import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { fetchQuestions } from "../RTK/Slices/APIs/questions";
import { increasePoints } from "../RTK/Slices/points";

const Questions = () => {
  const dispatch = useDispatch();
  // DQN: Destination Question Number from local storage
  const DQN = JSON.parse(
    localStorage.getItem(`${sessionStorage.getItem("dest")}-QNum`) || "0"
  );
  const [qNum, setQNum] = useState(DQN || 0);
  const { questions } = useSelector((state) => state.questions);

  // fetch destination questions
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  // increment question number
  const increamentQNum = () => {
    if (qNum < 10) {
      setQNum((prev) => prev + 1);
    }
  };

  // handle increase points
  const handleIncreament = () => {
    dispatch(increasePoints(10));
    const correctAnsAudio = document.getElementById("correctAnsMusic");
    correctAnsAudio.play();
  };

  // check answer
  // CAId: Correct Answer Id
  const checkAnswer = (eleId, CAId) => {
    Number(eleId) + 1 === CAId
      ? handleIncreament()
      : document.getElementById("wrongAnsMusic")?.play();
  };

  // handle option click
  const handleClick = (ele, CAId) => {
    checkAnswer(ele.currentTarget.id, CAId);
    increamentQNum();
    localStorage.setItem(
      `${sessionStorage.getItem("dest")}-QNum`,
      (qNum + 1).toString()
    );
  };

  return (
    <div className="bg-lightBage h-[100vh] w-full flex items-center justify-center">
      <Navbar />

      {/* questions */}
      <div className="w-[100%] px-4 lg:px-8 pt-5">
        {questions.map((ques, index) => {
          return (
            index === DQN && (
              <div key={index} className="questions-box">
                <h3 className="text-[22px] md:text-[26px] lg:text-[36px] mb-4 text-darkGray">
                  {ques.question}
                </h3>
                <ul className="rounded-xl border border-darkGray shadow px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6  flex items-center justify-center gap-4 flex-col bg-white">
                  {ques.options.map((option, index) => {
                    return (
                      <li
                        key={index}
                        id={index.toString()}
                        onClick={(e) => handleClick(e, ques.answer)}
                        className="bg-darkRed hover:bg-lightGold text-white hover:text-broun cursor-pointer rounded-lg border border-darkGray py-2 px-2 lg:px-4 text-[16px] md:text-[22px] lg:text-[26px] w-full"
                      >
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )
          );
        })}
        {DQN === 10 && (
          <h1 className="text-center text-broun text-[24px] md:text-[30px] lg:text-[40px]">
            Congrats questions are ended
          </h1>
        )}
      </div>

      {/* audio files */}
      <audio
        src="./assets/audios/correct.mp3"
        id="correctAnsMusic"
        preload="true"
      ></audio>
      <audio
        src="./assets/audios/wrong.mp3"
        id="wrongAnsMusic"
        preload="true"
      ></audio>
    </div>
  );
};

export default Questions;
