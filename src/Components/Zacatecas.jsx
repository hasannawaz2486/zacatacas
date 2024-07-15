// import React, { useState, useEffect, useContext } from "react";
// import Cookies from 'js-cookie'
// // Example context to manage language state
// const LanguageContext = React.createContext();

// const translations = {
//   en: {
//     title: "ZACATECAS",
//     buttonText: "LEARN MORE",
//   },
//   es: {
//     title: "ZACATECAS",
//     buttonText: "SABER MÁS",
//   },
//   de: {
//     title: "ZACATECAS",
//     buttonText: "ERFAHREN SIE MEHR",
//   },
//   ja: {
//     title: "サカテカス",
//     buttonText: "詳細はこちら",
//   },
//   zh: {
//     title: "萨卡特卡斯",
//     buttonText: "了解更多",
//   },
//   ko: {
//     title: "사카테카스",
//     buttonText: "더 알아보기",
//   },
//   zh_tw: {
//     title: "薩卡特卡斯",
//     buttonText: "了解更多",
//   },
//   fr: {
//     title: "ZACATECAS",
//     buttonText: "EN SAVOIR PLUS",
//   },
// };

// export default function Zacatecas() {
//   const [language,setLanguage] = useState(Cookies.get("language") || "en");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const savedLanguage = Cookies.get("language");
//       if (savedLanguage) {
//         setLanguage(savedLanguage);
//       }
//       console.log(language);
//     }, 1); // Check every 1 second

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);
  
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIfMobile = () => {
//       const mobileWidth = 561;
//       setIsMobile(window.innerWidth < mobileWidth);
//     };
//     checkIfMobile();
//     const intervalId = setInterval(checkIfMobile, 1);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div
//       className="strategic-border"
//       style={{
//         backgroundImage: `url(../assets/zacatecas.png)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "100%",
//         display: "flex",
//         padding: "50px",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "white",
//         borderTop: "5px solid #efbcbc",
//         borderBottom: "5px solid #efbcbc",
//       }}
//     >
//       <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
//         <h3
//           style={{
//             fontWeight: "bold",
//             textAlign: "center",
//             marginBottom: "30px",
//           }}
//         >
//           {translations[language].title}
//         </h3>
//         {isMobile ? (
//           <img
//             src="../assets/pic2.png"
//             alt=""
//             style={{ width: "100%", height: "auto", marginTop: "30px", marginBottom: "30px" }}
//           />
//         ) : (
//           <img
//             src="../assets/pic1.png"
//             alt=""
//             style={{ width: "100%", height: "auto", marginTop: "30px", marginBottom: "30px" }}
//           />
//         )}
//         <button
//           className="buttonn d-flex align-items-center"
//           style={{
//             backgroundColor: "#571517",
//             color: "#fff",
//             marginTop: "30px",
//             fontSize: "14px",
//             fontWeight: "500",
//             width: "150px",
//             padding: "5px 20px",
//             paddingRight: "5px",
//             borderRadius: "30px",
//             border: "3px solid #efbcbc",
//             marginBottom: "10px",
//           }}
//         >
//           {translations[language].buttonText}
//           <img
//             src={"../assets/contactus.png"}
//             alt="icon"
//             style={{ width: "20px", height: "20px", marginLeft: "10px" }}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Example provider component to wrap around your app
// export function LanguageProvider({ children }) {
//   const [language,setLanguage] = useState(Cookies.get("language") || "en");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const savedLanguage = Cookies.get("language");
//       if (savedLanguage) {
//         setLanguage(savedLanguage);
//       }
//       console.log(language);
//     }, 1); // Check every 1 second

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }







import React, { useState, useEffect, useContext } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Example context to manage language state
const LanguageContext = React.createContext();

const translations = {
  en: {
    title: "ZACATECAS",
    buttonText: "LEARN MORE",
  },
  es: {
    title: "ZACATECAS",
    buttonText: "SABER MÁS",
  },
  de: {
    title: "ZACATECAS",
    buttonText: "ERFAHREN SIE MEHR",
  },
  ja: {
    title: "サカテカス",
    buttonText: "詳細はこちら",
  },
  zh: {
    title: "萨卡特卡斯",
    buttonText: "了解更多",
  },
  ko: {
    title: "사카테카스",
    buttonText: "더 알아보기",
  },
  zh_tw: {
    title: "薩卡特卡斯",
    buttonText: "了解更多",
  },
  fr: {
    title: "ZACATECAS",
    buttonText: "EN SAVOIR PLUS",
  },
};

export default function Zacatecas() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      console.log(language);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 561;
      setIsMobile(window.innerWidth < mobileWidth);
    };
    checkIfMobile();
    const intervalId = setInterval(checkIfMobile, 1);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  

  

  return (
    <div
      className="strategic-border"
      style={{
        backgroundImage: `url(../assets/zacatecas.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderTop: "5px solid #efbcbc",
        borderBottom: "5px solid #efbcbc",
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {translations[language].title}
        </h3>
        {isMobile ? (
          <img
            src="../assets/pic2.png"
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "30px", marginBottom: "30px" }}
          />
        ) : (
          <img
            src="../assets/pic1.png"
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "30px", marginBottom: "30px" }}
          />
        )}
        <button
          className="buttonn d-flex align-items-center"
          style={{
            backgroundColor: "#571517",
            color: "#fff",
            marginTop: "30px",
            fontSize: "14px",
            fontWeight: "500",
            width: "150px",
            padding: "5px 20px",
            paddingRight: "5px",
            borderRadius: "30px",
            border: "3px solid #efbcbc",
            marginBottom: "10px",
          }}
          onClick={() => navigate('/Invest')} // Link to the "Why Zacatecas" page
        >
          <img
            src={"../assets/contactus.png"}
            alt="button icon"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          {translations[language].buttonText}
        </button>
      </div>
    </div>
  );
}

// Example provider component to wrap around your app
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      console.log(language);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
