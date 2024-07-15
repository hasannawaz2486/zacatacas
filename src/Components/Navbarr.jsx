import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaGlobe } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import Cookies from 'js-cookie'

export default function Navbarr() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  // Language text *
  const texts = {
    en: {
      home: "Home",
      qualityOfLife: "Quality of Life",
      features: "Features",
      industries: "Why Zacatecas",
      news: "News",
      language: "EN",
      contactUs: "CONTACT US",
    },
    es: {
      home: "Inicio",
      qualityOfLife: "Calidad de Vida",
      features: "Características",
      industries: "Parques Industriales",
      news: "Noticias",
      language: "ES",
      contactUs: "CONTÁCTENOS",
    },
    de: {
      home: "Startseite",
      qualityOfLife: "Lebensqualität",
      features: "Eigenschaften",
      industries: "Gewerbeparks",
      news: "Nachrichten",
      language: "DE",
      contactUs: "KONTAKTIERE UNS",
    },
    ja: {
      home: "ホーム",
      qualityOfLife: "生活の質",
      features: "特徴",
      industries: "工業団地",
      news: "ニュース",
      language: "JA",
      contactUs: "お問い合わせ",
    },
    zh: {
      home: "主页",
      qualityOfLife: "生活质量",
      features: "特点",
      industries: "工业园区",
      news: "新闻",
      language: "中文",
      contactUs: "联系我们",
    },
    ko: {
      home: "홈",
      qualityOfLife: "생활의 질",
      features: "특징",
      industries: "산업 단지",
      news: "뉴스",
      language: "한국어",
      contactUs: "문의하기",
    },
    "zh-CN": {
      home: "首页",
      qualityOfLife: "生活质量",
      features: "特点",
      industries: "工业园区",
      news: "新闻",
      language: "中文",
      contactUs: "联系我们",
    },
    fr: {
      home: "Accueil",
      qualityOfLife: "Qualité de vie",
      features: "Caractéristiques",
      industries: "Parcs Industriels",
      news: "Actualités",
      language: "FR",
      contactUs: "NOUS CONTACTER",
    },
  };
  

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    const intervalId = setInterval(checkIsMobile, 1);
    return () => clearInterval(intervalId);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const handleNavMouseEnter = (e) => {
    e.target.style.color = "#d65757"; // Change background color on hover
  };

  const handleNavMouseLeave = (e) => {
    e.target.style.color = "#000"; // Reset background color on mouse leave
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    Cookies.set('language',language, { expires: 2 });
    setExpanded(false); // Collapse the navbar on language change if expanded
  };

  useEffect(() => {
    const savedLanguage = Cookies.get('language');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);
  

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        padding: "0.1rem 0",
        height: "5rem",
        top: "0",
        borderBottom: "5px solid #efbcbc",
        borderTop: "5px solid #d65757",
      }}
    >
      <Container style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          style={{ margin: "0px 10px" }}
        >
          <img
            src={"../assets/logo.png"}
            alt=""
            style={{
              width: "210px",
              height: "50px",
              margin: "auto",
              marginRight: "auto",
            }}
          />
        </Navbar.Brand>

        {isMobile ? (
          <button
            aria-controls="navbarScroll"
            onClick={handleToggle}
            className={expanded ? "black-toggle" : ""}
            style={{
              margin: "0px 10px",
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "#000",
            }}
          >
            {expanded ? <FaTimes /> : <FaBars />}
          </button>
        ) : null}

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              {texts[selectedLanguage].home}
            </Nav.Link>


            <Nav.Link
              as={Link}
              to="/qualityoflife"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              Quality of Life
            </Nav.Link>
            {/* <NavDropdown
              title={texts[selectedLanguage].qualityOfLife}
              id="basic-nav-dropdown"
              className="no-caret dropdown-menu.show"
              style={{
                fontWeight: "500",
                color: "#000",
                fontSize: "14px",
                border: "none",
                padding: "0",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/qualityoflife"
                onClick={handleNavLinkClick}
                onMouseEnter={handleNavMouseEnter}
                onMouseLeave={handleNavMouseLeave}
                style={{
                  fontWeight: "500",
                  color: "#000",
                  fontSize: "14px",
                  borderBottom: "3px solid #d65757",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#f8f9fa",
                  transition: "background-color 0.3s",
                }}
              >
                {texts[selectedLanguage].features}
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link
              as={Link}
              to="/invest"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              {texts[selectedLanguage].industries}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/News"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              {texts[selectedLanguage].news}
            </Nav.Link>
            <NavDropdown
            id="basic-nav-dropdown"
              className="no-caret dropdown-menu.show"
              title={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                <FaGlobe style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                <span>{selectedLanguage}</span>9
              </span>
              }
              align="end"
              onSelect={handleLanguageChange}
            >
              
              <NavDropdown.Item eventKey="en">
                {texts.en.language}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="es">
                {texts.es.language}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="de">
                {texts.de.language}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="ja">
                {texts.ja.language}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="zh">
                {texts.zh.language}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="ko">
                {texts.ko.language}
              </NavDropdown.Item>
              {/* <NavDropdown.Item eventKey="zh-CN">
                {texts["zh-CN"].language}
              </NavDropdown.Item> */}
              <NavDropdown.Item eventKey="fr">
                {texts.fr.language}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ml-auto">
           
          </Nav>

          <button
            className="buttonn d-flex align-items-center"
            style={{
              backgroundColor: "#571517",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              padding: "5px 20px",
              paddingRight: "5px",
              borderRadius: "30px",
              border: "3px solid #efbcbc",
              marginBottom: "10px", // Ensure there's a bit of space between the button and the "EN" link
            }}
          >
            {texts[selectedLanguage].contactUs}
            <img
              src={"../assets/contactus.png"}
              alt="icon"
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
