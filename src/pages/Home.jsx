import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

// constants variables
const IMGURL = "./assets/images/identity/";

const handleDestClick = (event) => {
  const destination = event.target ? event.target.parentElement?.title : "";
  if (destination) {
    sessionStorage.setItem("dest", destination);
    if (!localStorage.getItem(`${destination}-QNum`)) {
      localStorage.setItem(`${destination}-QNum`, "0");
    }
  }
};

const Home = () => {
  const [trigger, setTrigger] = useState(true);

  const handleArrowClick = () => {
    setTrigger(!trigger);
    const btnEffect = document.querySelector("#btn-effect");
    const timeout = setTimeout(() => {
      btnEffect.play();
      clearTimeout(timeout);
    }, 650);
  };

  // دالة لتغيير الفئة النشطة للوجهة
  const handleActiveDest = () => {
    const carouselItems = document.querySelectorAll("#carousel-inner div");
    carouselItems.forEach((item) => {
      if (item.classList.contains("active")) {
        const imgElement = item.children[0];
        imgElement.classList.remove("bg-lightBage");
        imgElement.classList.add("bg-broun", "scale-110");
      } else {
        const imgElement = item.children[0];
        imgElement.classList.remove("bg-broun", "scale-110");
        imgElement.classList.add("bg-lightBage");
      }
    });
  };

  useEffect(() => {
    const out = setTimeout(() => {
      handleActiveDest();
      clearTimeout(out);
    }, 650);
  }, [trigger]);

  useEffect(() => {
    const background_music = document.querySelector("#ground_music");
    background_music.volume = 0.6;
    background_music.play();
  }, []);

  return (
    <div className="home-page h-[100vh] w-[100vw] overflow-hidden">
      <Navbar />
      <div className="flex items-center justify-center w-full h-full relative z-10">
        <div
          id="carouselExample"
          className="carousel slide w-[280px]  md:w-[350px] lg:w-[450px] flex items-center"
        >
          <div className="carousel-inner overflow-visible" id="carousel-inner">
            <div className="carousel-item active">
              <div className="mx-auto rounded-full bg-lightBage border-2 border-lightGold w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] flex items-center justify-center p-3 transition duration-300 shadow-lg shadow-lightYellow">
                <Link
                  to={"/destination"}
                  title="mallawi"
                  onClick={(e) => handleDestClick(e)}
                  className="bg-transparent"
                >
                  <img src={`${IMGURL}Mallawi.png`} className="block w-full" />
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <div className="mx-auto rounded-full bg-lightBage border-2 border-lightGold w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] flex items-center justify-center p-3 transition duration-300 shadow-lg shadow-lightYellow">
                <Link
                  to={"/destination"}
                  title="abo_qarqas"
                  onClick={(e) => handleDestClick(e)}
                  className="bg-transparent"
                >
                  <img
                    src={`${IMGURL}Abo Qarqas.png`}
                    className="block w-full"
                  />
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <div className="mx-auto rounded-full bg-lightBage border-2 border-lightGold w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] flex items-center justify-center p-3 transition duration-300 shadow-lg shadow-lightYellow">
                <Link
                  to={"/destination"}
                  title="samalot"
                  onClick={(e) => handleDestClick(e)}
                  className="bg-transparent"
                >
                  <img src={`${IMGURL}Samalot.png`} className="block w-full" />
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <div className="mx-auto rounded-full bg-lightBage border-2 border-lightGold w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] flex items-center justify-center p-3 transition duration-300 shadow-lg shadow-lightYellow">
                <Link
                  to={"/destination"}
                  title="beni_mazar"
                  onClick={(e) => handleDestClick(e)}
                  className="bg-transparent"
                >
                  <img
                    src={`${IMGURL}Beni Mazar.png`}
                    className="block w-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleArrowClick()}
            className="carousel-control-prev opacity-100"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            onClick={() => handleArrowClick()}
            className="carousel-control-next opacity-100"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
      <audio
        src="./assets/audios/btn-effect.mp3"
        id="btn-effect"
        preload="true"
      ></audio>
    </div>
  );
};

export default Home;
