import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { WP_REST_API_Post, WP_Block_Parsed } from "wp-types";
import { ComponentsResolver } from "./Components";

export type WP_RES = WP_REST_API_Post & { gutenberg_blocks: WP_Block_Parsed[] };

export const BASE_API_URL = "https://api.heyautomattichireme.com/wp-json/wp/v2";

function App() {
  const [data, setData] = useState<WP_RES | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/pages/2`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let res = await response.json();
        setData(res);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const headings = [
    {
      title: "Cover Letter",
      link: "#cover-letter",
    },
    {
      title: "CV",
      link: "#cv",
    },
    {
      title: "How i built this",
      link: "#how-i-built",
    },
  ];

  console.log(
    "%cSneaky hire me promotion.",
    "background: red; color: yellow; font-size: x-large"
  );

  return (
    <div className="App" id="wrapper">
      <header className="header">
        <h1>Application for Automattic</h1>
        <nav>
          <ol className="menu">
            {headings?.map((heading, i) => (
              <li key={`heading-${i}`} className="page-item page-item-home">
                <a href={heading.link}>{heading.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <div id="container">
        <main id="content" className="tier">
          {data?.gutenberg_blocks.map((block, i) =>
            ComponentsResolver(block, i)
          )}
        </main>
      </div>
      <nav className="nav">
        <div className="social-links">
          <div className="twitter">
            <a
              className="noticon noticon-twitter"
              href="https://www.linkedin.com/in/joakim-ros%C3%A9n-189a0477/"
              target="_blank"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <ol className="menu">
          {headings?.map((heading, i) => (
            <li key={`heading-${i}`} className="page-item page-item-home">
              <a href={heading.link}>{heading.title}</a>
            </li>
          ))}
        </ol>
      </nav>
      <footer className="footer">
        <p className="copyr">
          © Joakim Rosen., purveyor of fine job-applications since 2022. Thank
          you for your&nbsp;time.
        </p>
      </footer>
    </div>
  );
}

export default App;
