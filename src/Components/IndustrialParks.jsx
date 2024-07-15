// import React, { useContext,useState,useEffect } from "react";
// import Cookies from 'js-cookie'

// // Example context to manage language state
// const LanguageContext = React.createContext();

// const translations = {
//   en: {
//     title: "INDUSTRIAL PARKS",
//     rents: {
//       sierra: "Sierra de Alica Neighborhood: USD 750 - 2,000 per month.",
//       villas: "Villas del Carmen Neighborhood: USD 350 - 750 per month.",
//       lomas1: "Lomas de Galicia Community: USD 450 - 750 per month.",
//       lomas2: "Lomas de Galicia Community: USD 450 - 750 per month.",
//       tahona: "Tahona Community: USD 600 - 900 per month.",
//     },
//     buttonText: "LEARN MORE",
//   },
//   es: {
//     title: "PARQUES INDUSTRIALES",
//     rents: {
//       sierra: "Barrio Sierra de Alica: USD 750 - 2,000 por mes.",
//       villas: "Barrio Villas del Carmen: USD 350 - 750 por mes.",
//       lomas1: "Comunidad Lomas de Galicia: USD 450 - 750 por mes.",
//       lomas2: "Comunidad Lomas de Galicia: USD 450 - 750 por mes.",
//       tahona: "Comunidad Tahona: USD 600 - 900 por mes.",
//     },
//     buttonText: "APRENDE MÁS",
//   },
//   de: {
//     title: "INDUSTRIEPARKS",
//     rents: {
//       sierra: "Sierra de Alica Viertel: USD 750 - 2,000 pro Monat.",
//       villas: "Villas del Carmen Viertel: USD 350 - 750 pro Monat.",
//       lomas1: "Lomas de Galicia Gemeinschaft: USD 450 - 750 pro Monat.",
//       lomas2: "Lomas de Galicia Gemeinschaft: USD 450 - 750 pro Monat.",
//       tahona: "Tahona Gemeinschaft: USD 600 - 900 pro Monat.",
//     },
//     buttonText: "ERFAHREN SIE MEHR",
//   },
//   ja: {
//     title: "工業団地",
//     rents: {
//       sierra: "シエラ・デ・アリカ地区：月額USD 750 - 2,000。",
//       villas: "ビジャス・デル・カルメン地区：月額USD 350 - 750。",
//       lomas1: "ロマス・デ・ガリシアコミュニティ：月額USD 450 - 750。",
//       lomas2: "ロマス・デ・ガリシアコミュニティ：月額USD 450 - 750。",
//       tahona: "タホナコミュニティ：月額USD 600 - 900。",
//     },
//     buttonText: "もっと詳しく",
//   },
//   zh: {
//     title: "工业园区",
//     rents: {
//       sierra: "阿利卡山社区：每月USD 750 - 2,000。",
//       villas: "卡门别墅社区：每月USD 350 - 750。",
//       lomas1: "加利西亚社区：每月USD 450 - 750。",
//       lomas2: "加利西亚社区：每月USD 450 - 750。",
//       tahona: "塔霍纳社区：每月USD 600 - 900。",
//     },
//     buttonText: "了解更多",
//   },
//   ko: {
//     title: "산업 공원",
//     rents: {
//       sierra: "시에라 데 알리카 지역: 월 USD 750 - 2,000.",
//       villas: "빌라스 델 카르멘 지역: 월 USD 350 - 750.",
//       lomas1: "로마스 데 갈리시아 커뮤니티: 월 USD 450 - 750.",
//       lomas2: "로마스 데 갈리시아 커뮤니티: 월 USD 450 - 750.",
//       tahona: "타호나 커뮤니티: 월 USD 600 - 900.",
//     },
//     buttonText: "더 알아보기",
//   },
//   zh_tw: {
//     title: "工業園區",
//     rents: {
//       sierra: "阿利卡山社區：每月USD 750 - 2,000。",
//       villas: "卡門別墅社區：每月USD 350 - 750。",
//       lomas1: "加利西亞社區：每月USD 450 - 750。",
//       lomas2: "加利西亞社區：每月USD 450 - 750。",
//       tahona: "塔霍納社區：每月USD 600 - 900。",
//     },
//     buttonText: "了解更多",
//   },
//   fr: {
//     title: "PARCS INDUSTRIELS",
//     rents: {
//       sierra: "Quartier Sierra de Alica : USD 750 - 2,000 par mois.",
//       villas: "Quartier Villas del Carmen : USD 350 - 750 par mois.",
//       lomas1: "Communauté Lomas de Galicia : USD 450 - 750 par mois.",
//       lomas2: "Communauté Lomas de Galicia : USD 450 - 750 par mois.",
//       tahona: "Communauté Tahona : USD 600 - 900 par mois.",
//     },
//     buttonText: "EN SAVOIR PLUS",
//   },
// };

// export default function IndustrialParks() {
//   const [language,setlanguage] = useState(Cookies.get("language") || "en");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const savedLanguage = Cookies.get("language");
//       if (savedLanguage) {
//         setlanguage(savedLanguage);
//       }
//       console.log(language);
//     }, 1); // Check every 1 second

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div
//       className="row d-flex justify-content-center"
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "white",
//         color: "black",
//       }}
//     >
//       <div className="col-lg-5 col-md-6 col-sm-12" style={{ padding: "30px" }}>
//         <img
//           src="../assets/industrial.png"
//           alt=""
//           style={{ width: "100%", height: "auto" }}
//         />
//       </div>
//       <div
//         className="col-lg-5 col-md-6 col-sm-6"
//         style={{
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h3 style={{ fontWeight: "bold" }}>
//           {" "}
//           <span
//             style={{ borderBottom: "3px solid #efbcbc", paddingBottom: "5px" }}
//           >
//             {translations[language].title.split(" ")[0]}
//           </span>
//           {translations[language].title.split(" ")[1]}
//         </h3>
//         <p className="rent-example" style={{marginTop:'10px'}}>
//           {translations[language].rents.sierra}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.villas}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.lomas1}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.lomas2}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.tahona}
//         </p>
//         <button
//             className="buttonn d-flex align-items-center"
//             style={{
//               backgroundColor: "#571517",
//               color: "#fff",
//               fontSize: "14px",
//               fontWeight: "500",
//               padding: "5px 20px",
//               paddingRight: "5px",
//               width:'150px',
//               borderRadius: "30px",
//               border: "3px solid #efbcbc",
//               marginBottom: "10px",
//             }}
//           >
//             {translations[language].buttonText}
//             <img
//               src={"../assets/contactus.png"}
//               alt="icon"
//               style={{ width: "20px", height: "20px", marginLeft: "10px" }}
//             />
//           </button>
//       </div>
//     </div>
//   );
// }

// // Example provider component to wrap around your app
// export function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState("en"); // Default language is English

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }



import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const translations = {
  en: {
    title: "ABOUT ZACATECAS",
    content: "A combination of culture and history meet innovation and industry. The State of Zacatecas is renowned for its European-style historical, religious, civic, and cultural buildings that are found throughout the city, even among its narrow streets, alleys, and plazas. However, this entity offers a wide range of business and investment opportunities. Currently, Zacatecas has a comprehensive strategy for economic expansion. With attractive investment plans, a privileged geographical location, logistical connectivity...",
    learnMore: "LEARN MORE",
  },
  es: {
    title: "SOBRE ZACATECAS",
    content: "Una combinación de cultura e historia se encuentra con innovación e industria. El Estado de Zacatecas es conocido por sus edificaciones históricas, religiosas, cívicas y culturales de estilo europeo que se encuentran a lo largo de la ciudad, incluso entre sus calles estrechas, callejones y plazas. Sin embargo, esta entidad ofrece una amplia gama de oportunidades de negocio e inversión. Actualmente, Zacatecas cuenta con una estrategia integral para la expansión económica. Con planes de inversión atractivos, una ubicación geográfica privilegiada, conectividad logística...",
    learnMore: "SABER MÁS",
  },
  // other translations...
};

export default function About1() {
  const [language, setlanguage] = useState(Cookies.get("language") || "en");

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

  const { title, content, learnMore } = translations[language];

  return (
    <div
      className="strategic-border row"
      style={{
        backgroundImage: `url(../assets/about1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderTop: "5px solid #efbcbc",
        borderBottom: "5px solid #efbcbc",
      }}
    >
      <div className="col-lg-5 col-md-6" style={{ padding: "30px" }}>
        <img
          src="../assets/about3.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        className="col-lg-5 col-md-6"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>
          {" "}
          <span
            style={{ borderBottom: "3px solid #fff", paddingBottom: "5px" }}
          >
            {title}
          </span>{" "}
          {/* ZACATECAS */}
        </h3>
        <p style={{ fontWeight: "500", marginTop: "20px" }}>
          {content}
        </p>
        <Link to="/industrial-parks">
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
              border: "1px solid #efbcbc",
              marginTop: "20px",
              width: "150px",
            }}
          >
            {learnMore}
            <img
              src={"../assets/contactus.png"}
              alt="icon"
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}





