import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";
import Cookies from 'js-cookie'
// Define translations for different languages
const texts = {
  en: {
    heading: "INVEST IN",
    subheading: "ZACATECAS",
    watchVideo: "WATCH OUR VIDEO",
    contactUs: "CONTACT US",
  },
  es: {
    heading: "INVERTIR EN",
    subheading: "ZACATECAS",
    watchVideo: "VER NUESTRO VIDEO",
    contactUs: "CONTÁCTENOS",
  },
  de: {
    heading: "INVESTIEREN SIE IN",
    subheading: "ZACATECAS",
    watchVideo: "SCHAUE UNSER VIDEO",
    contactUs: "KONTAKTIERE UNS",
  },
  ja: {
    heading: "投資する",
    subheading: "サカテカス",
    watchVideo: "私たちのビデオを見る",
    contactUs: "お問い合わせ",
  },
  zh: {
    heading: "投资于",
    subheading: "萨卡特卡斯",
    watchVideo: "观看我们的视频",
    contactUs: "联系我们",
  },
  ko: {
    heading: "투자하다",
    subheading: "자카테카스",
    watchVideo: "우리의 비디오 시청",
    contactUs: "문의하기",
  },
  zh_tw: {
    heading: "投資於",
    subheading: "薩卡特卡斯",
    watchVideo: "觀看我們的視頻",
    contactUs: "聯繫我們",
  },
  fr: {
    heading: "INVESTIR À",
    subheading: "ZACATECAS",
    watchVideo: "REGARDER NOTRE VIDÉO",
    contactUs: "NOUS CONTACTER",
  },
};

export default function InvestHeroSection({ lang }) {
  const [language,setlanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlanguage(savedLanguage);
      }
      console.log(language);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentTexts = texts[language] || texts.en;

  return (
    <div
      className="hero-border"
      style={{
        position: "relative",
        width: "100%",
        height: "77vh",
        overflow: "hidden",
        marginTop: "80px",
        borderBottom: "5px solid #efbcbc",
      }}
    >
      <ReactPlayer
        url="../assets/home video.mp4"
        playing={true}
        loop={true}
        muted={true}
        controls={true}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          objectFit:"cover",
          overflow: "hidden"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          zIndex: "1",
        }}
      >
        <h3 className="hero-heading">{currentTexts.heading}</h3>
        <h1 className="hero-subheading">{currentTexts.subheading}</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
            <button
              className="buttonn d-flex align-items-center"
              style={{
                backgroundColor: "#fff",
                color: "#571517",
                fontSize: "14px",
                fontWeight: "500",
                padding: "5px 20px",
                paddingRight: "5px",
                borderRadius: "30px",
                marginBottom: "10px",
                width: "210px",
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              {currentTexts.watchVideo}
              <img
                src={"../assets/contactus.png"}
                alt="icon"
                style={{ width: "20px", height: "20px", marginLeft: "10px" }}
              />
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-start">
            <button
              className="buttonn d-flex align-items-center"
              style={{
                backgroundColor: "#fff",
                color: "#571517",
                fontSize: "14px",
                fontWeight: "500",
                padding: "5px 20px",
                paddingRight: "5px",
                width: "130px",
                borderRadius: "30px",
                marginBottom: "10px",
                fontSize: "12px",
              }}
            >
              {currentTexts.contactUs}
              <img
                src={"../assets/contactus.png"}
                alt="icon"
                style={{ width: "20px", height: "20px", marginLeft: "10px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <button
        style={{
          backgroundColor: "",
          color: "#fff",
          border: "2px dotted #fff",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "16px",
          position: "absolute",
          bottom: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: "43px",
            height: "43px",
            borderRadius: "50%",
            backgroundColor: "rgba(180, 66, 62,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "#9e342d",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="../assets/download.png"
              alt=""
              style={{ height: "25px", width: "auto" }}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
