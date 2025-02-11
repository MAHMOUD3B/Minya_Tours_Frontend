import { useNavigate } from "react-router-dom";

const Start = () => {
  const IMGURL = "./assets/images/identity/";
  const navigate = useNavigate();

  return (
    <div className="w-[100vw] h-[100vh] bg-lightBage">
      {/* Header Section */}
      <div className="flex w-full fixed top-0 items-center justify-between p-6 md:p-8 lg:p-10">
        <span>
          <img
            src={`${IMGURL}university.jpg`}
            alt="university-logo"
            className="rounded-full drop-shadow-xl w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px]"
          />
        </span>
        <span>
          <img
            src={`${IMGURL}faculty.png`}
            alt="faculty-logo"
            className="rounded-full drop-shadow-xl w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px]"
          />
        </span>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center gap-4 w-full h-full flex-col px-3 text-center">
        <h1 className="text-[24px] md:text-[32px] lg:text-[48px] text-broun">
          Welcome With You In Minya
        </h1>
        <h1 className="text-[24px] md:text-[32px] lg:text-[48px] text-broun">
          Let's
          <button
            onClick={() => navigate("home")}
            className="px-3 mx-1 bg-lightYellow text-[18px] md:text-[25px] lg:text-[30px] rounded-lg border-2 border-broun animate-bounce"
          >
            Start
          </button>
          Our Journey
        </h1>
      </div>

      {/* Footer Section */}
      <div className="fixed bottom-[10px] text-center w-full">
        <small>
          All rights are reserved <b className="text-ceial">Minya Tours</b>{" "}
          &copy; {new Date().getFullYear()} copyrights
        </small>
        <small className="block">
          Developed by{" "}
          <b>
            <a
              href="https://mahmoud-software-engineer.netlify.app/"
              className="text-lightGold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mahmoud Abbas
            </a>
          </b>
        </small>
      </div>
    </div>
  );
};

export default Start;
