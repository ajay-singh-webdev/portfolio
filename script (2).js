/* =========================================================
   AJAY SINGH PORTFOLIO - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     MOBILE NAVIGATION
     --------------------------------------------------------- */

  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* ---------------------------------------------------------
     SCROLL PROGRESS BAR
     --------------------------------------------------------- */

  const progressBar = document.getElementById("progress-bar");

  function updateScrollProgress() {
    if (!progressBar) return;

    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateScrollProgress);
  updateScrollProgress();


  /* ---------------------------------------------------------
     BACK TO TOP
     --------------------------------------------------------- */

  const backToTop = document.getElementById("scroll-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  /* ---------------------------------------------------------
     ACTIVE NAVIGATION
     --------------------------------------------------------- */

  const sections = document.querySelectorAll("section[id]");
  const activeNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && activeNavLinks.length) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeNavLinks.forEach(link => {
              link.classList.remove("active");

              if (
                link.getAttribute("href") ===
                `#${entry.target.id}`
              ) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }


  /* ---------------------------------------------------------
     REVEAL ANIMATIONS
     --------------------------------------------------------- */

  const revealElements = document.querySelectorAll(
    ".reveal, .card, .seo-tool-card"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }


  /* ---------------------------------------------------------
     SKILL BAR ANIMATION
     --------------------------------------------------------- */

  const skillBars = document.querySelectorAll(".skill-bar-fill");

  if (skillBars.length && "IntersectionObserver" in window) {
    const skillObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const width = entry.target.dataset.width;

            if (width) {
              entry.target.style.width = `${width}%`;
            }

            skillObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    skillBars.forEach(bar => {
      skillObserver.observe(bar);
    });
  }


  /* ---------------------------------------------------------
     ANIMATED COUNTERS
     --------------------------------------------------------- */

  const counters = document.querySelectorAll(".counter");

  function animateCounter(element) {
    const target = parseFloat(element.dataset.target || "0");
    const decimals = parseInt(element.dataset.decimal || "0", 10);
    const suffix = element.dataset.suffix || "";
    const duration = 1200;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = progress * target;

      element.textContent = value.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  if (counters.length && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }


  /* ---------------------------------------------------------
     CURRENT YEAR
     --------------------------------------------------------- */

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* =========================================================
     SEO TOOLS / AUDIT LAB
     ========================================================= */

  const $ = id => document.getElementById(id);


  /* ---------------------------------------------------------
     COMMON HELPERS
     --------------------------------------------------------- */

  function escapeHtml(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[character])
    );
  }


  function setResult(id, html) {
    const element = $(id);

    if (element) {
      element.innerHTML = html;
    }
  }


  function getPlainText(html) {
    const documentObject =
      new DOMParser().parseFromString(
        html || "",
        "text/html"
      );

    return (
      documentObject.body?.textContent || ""
    )
      .replace(/\s+/g, " ")
      .trim();
  }


  /* =========================================================
     01. META TAG CHECKER
     ========================================================= */

  const checkMetaButton = $("checkMetaBtn");

  if (checkMetaButton) {

    checkMetaButton.addEventListener("click", () => {

      const html =
        $("metaHtmlInput")?.value.trim() || "";

      if (!html) {
        setResult(
          "metaResults",
          '<div class="tool-warn">Please paste HTML head content first.</div>'
        );

        return;
      }


      const doc =
        new DOMParser().parseFromString(
          html,
          "text/html"
        );


      const title =
        doc.querySelector("title")
          ?.textContent
          .trim() || "";


      const description =
        doc.querySelector(
          'meta[name="description"]'
        )
          ?.getAttribute("content") || "";


      const robots =
        doc.querySelector(
          'meta[name="robots"]'
        )
          ?.getAttribute("content") || "";


      const canonical =
        doc.querySelector(
          'link[rel="canonical"]'
        )
          ?.getAttribute("href") || "";


      const ogTitle =
        doc.querySelector(
          'meta[property="og:title"]'
        )
          ?.getAttribute("content") || "";


      const ogImage =
        doc.querySelector(
          'meta[property="og:image"]'
        )
          ?.getAttribute("content") || "";


      function status(condition) {
        return `
          <span class="${
            condition
              ? "tool-ok"
              : "tool-warn"
          }">
            ${condition ? "OK" : "Check"}
          </span>
        `;
      }


      setResult(
        "metaResults",
        `
        <div class="tool-result-row">
          <span>Title (${title.length} characters)</span>
          ${status(
            title.length >= 30 &&
            title.length <= 60
          )}
        </div>

        <div class="tool-result-row">
          <span>
            Meta Description (${description.length} characters)
          </span>

          ${status(
            description.length >= 70 &&
            description.length <= 160
          )}
        </div>

        <div class="tool-result-row">
          <span>Canonical</span>
          ${status(Boolean(canonical))}
        </div>

        <div class="tool-result-row">
          <span>Robots Meta</span>
          ${status(Boolean(robots))}
        </div>

        <div class="tool-result-row">
          <span>Open Graph Title</span>
          ${status(Boolean(ogTitle))}
        </div>

        <div class="tool-result-row">
          <span>Open Graph Image</span>
          ${status(Boolean(ogImage))}
        </div>
        `
      );
    });
  }


  /* =========================================================
     02. WORD COUNTER
     ========================================================= */

  const wordInput = $("wordInput");


  function updateWordCounter() {

    if (!wordInput) return;

    const text = wordInput.value || "";


    const words = text.trim()
      ? text.trim().split(/\s+/).length
      : 0;


    const characters =
      text.length;


    const charactersWithoutSpaces =
      text.replace(/\s/g, "").length;


    const sentences =
      text.trim()
        ? (
            text.match(
              /[.!?]+(?=\s|$)/g
            ) || []
          ).length
        : 0;


    const paragraphs =
      text.trim()
        ? text
            .split(/\n\s*\n/)
            .filter(Boolean)
            .length
        : 0;


    const readingTime =
      words
        ? Math.max(
            1,
            Math.ceil(words / 200)
          )
        : 0;


    setResult(
      "wordResults",
      `
      <div class="metric-box">
        <strong>${words}</strong>
        <span>Words</span>
      </div>

      <div class="metric-box">
        <strong>${characters}</strong>
        <span>Characters</span>
      </div>

      <div class="metric-box">
        <strong>${charactersWithoutSpaces}</strong>
        <span>No-space characters</span>
      </div>

      <div class="metric-box">
        <strong>${sentences}</strong>
        <span>Sentences</span>
      </div>

      <div class="metric-box">
        <strong>${paragraphs}</strong>
        <span>Paragraphs</span>
      </div>

      <div class="metric-box">
        <strong>${readingTime} min</strong>
        <span>Estimated reading time</span>
      </div>
      `
    );
  }


  if (wordInput) {
    wordInput.addEventListener(
      "input",
      updateWordCounter
    );

    updateWordCounter();
  }


  /* =========================================================
     03. KEYWORD DENSITY CHECKER
     ========================================================= */

  const checkDensityButton =
    $("checkDensityBtn");


  if (checkDensityButton) {

    checkDensityButton.addEventListener(
      "click",
      () => {

        const input =
          $("densityInput")?.value || "";


        const text =
          getPlainText(input).toLowerCase();


        if (!text) {

          setResult(
            "densityResults",
            '<div class="tool-warn">Please paste your content first.</div>'
          );

          return;
        }


        const words =
          text.match(
            /[a-z0-9]+(?:['’-][a-z0-9]+)*/g
          ) || [];


        const stopWords = new Set(
          `
          the a an and or but for with from that this
          these those are is was were be to of in on at
          by as it its into about your you we our their
          they he she i me my has have had do does did
          not no can could should would will just than
          then very more most some such
          `
            .trim()
            .split(/\s+/)
        );


        const counts = {};


        words.forEach(word => {

          if (
            word.length >= 3 &&
            !stopWords.has(word)
          ) {

            counts[word] =
              (counts[word] || 0) + 1;

          }

        });


        const sortedKeywords =
          Object.entries(counts)
            .sort(
              (a, b) =>
                b[1] - a[1]
            )
            .slice(0, 15);


        const rows =
          sortedKeywords
            .map(([keyword, count]) => {

              const density =
                (
                  (count / words.length) *
                  100
                ).toFixed(2);


              return `
                <tr>
                  <td>${escapeHtml(keyword)}</td>
                  <td>${count}</td>
                  <td>${density}%</td>
                </tr>
              `;

            })
            .join("");


        setResult(
          "densityResults",
          rows
            ? `
              <table class="tool-table">

                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Uses</th>
                    <th>Density</th>
                  </tr>
                </thead>

                <tbody>
                  ${rows}
                </tbody>

              </table>
            `
            : `
              <div class="tool-warn">
                No useful keywords found.
              </div>
            `
        );

      }
    );
  }


  /* =========================================================
     04. HEADING CHECKER
     ========================================================= */

  const checkHeadingButton =
    $("checkHeadingBtn");


  if (checkHeadingButton) {

    checkHeadingButton.addEventListener(
      "click",
      () => {

        const html =
          $("headingInput")?.value.trim() || "";


        if (!html) {

          setResult(
            "headingResults",
            '<div class="tool-warn">Please paste HTML first.</div>'
          );

          return;
        }


        const doc =
          new DOMParser().parseFromString(
            html,
            "text/html"
          );


        const headings = {};


        ["h1", "h2", "h3"].forEach(tag => {

          headings[tag] =
            [...doc.querySelectorAll(tag)]
              .map(
                heading =>
                  heading.textContent.trim()
              )
              .filter(Boolean);

        });


        const h1Class =
          headings.h1.length === 1
            ? "tool-ok"
            : "tool-warn";


        let output = `

          <div class="tool-result-row">
            <span>H1 Count</span>

            <strong class="${h1Class}">
              ${headings.h1.length}

              ${
                headings.h1.length === 1
                  ? "✓"
                  : " — Aim for one primary H1"
              }
            </strong>
          </div>


          <div class="tool-result-row">
            <span>H2 Count</span>

            <strong>
              ${headings.h2.length}
            </strong>
          </div>


          <div class="tool-result-row">
            <span>H3 Count</span>

            <strong>
              ${headings.h3.length}
            </strong>
          </div>

        `;


        if (headings.h1.length) {

          output += `
            <div class="tool-result-row">
              <span>H1</span>
              <span>
                ${escapeHtml(headings.h1[0])}
              </span>
            </div>
          `;

        }


        headings.h2
          .slice(0, 5)
          .forEach((heading, index) => {

            output += `
              <div class="tool-result-row">
                <span>H2 ${index + 1}</span>

                <span>
                  ${escapeHtml(heading)}
                </span>
              </div>
            `;

          });


        headings.h3
          .slice(0, 5)
          .forEach((heading, index) => {

            output += `
              <div class="tool-result-row">
                <span>H3 ${index + 1}</span>

                <span>
                  ${escapeHtml(heading)}
                </span>
              </div>
            `;

          });


        setResult(
          "headingResults",
          output
        );

      }
    );
  }


  /* =========================================================
     05. ROBOTS.TXT TESTER
     ========================================================= */

  const checkRobotsButton =
    $("checkRobotsBtn");


  if (checkRobotsButton) {

    checkRobotsButton.addEventListener(
      "click",
      () => {

        const robotsText =
          $("robotsInput")?.value || "";


        const testPath =
          $("robotsPathInput")?.value.trim() ||
          "/";


        if (!robotsText.trim()) {

          setResult(
            "robotsResults",
            '<div class="tool-warn">Please paste robots.txt content first.</div>'
          );

          return;
        }


        const lines =
          robotsText
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(Boolean);


        const groups = [];

        let currentGroup = null;


        lines.forEach(line => {

          if (line.startsWith("#")) {
            return;
          }


          const separator =
            line.indexOf(":");


          if (separator === -1) {
            return;
          }


          const key =
            line
              .slice(0, separator)
              .trim()
              .toLowerCase();


          const value =
            line
              .slice(separator + 1)
              .trim();


          if (key === "user-agent") {

            currentGroup = {
              agents: [
                value.toLowerCase()
              ],
              rules: []
            };


            groups.push(
              currentGroup
            );

          }


          else if (
            (key === "allow" ||
              key === "disallow") &&
            currentGroup
          ) {

            currentGroup.rules.push({
              type: key,
              path: value
            });

          }

        });


        let selectedGroups =
          groups.filter(group =>
            group.agents.includes("*") ||
            group.agents.includes(
              "googlebot"
            )
          );


        if (!selectedGroups.length) {
          selectedGroups = groups;
        }


        let decision = "Allowed";
        let matchedRule = "";
        let bestLength = -1;


        selectedGroups
          .flatMap(
            group => group.rules
          )
          .forEach(rule => {

            if (!rule.path) {
              return;
            }


            if (
              !testPath.startsWith(
                rule.path
              )
            ) {
              return;
            }


            if (
              rule.path.length >
              bestLength
            ) {

              bestLength =
                rule.path.length;


              decision =
                rule.type ===
                "disallow"
                  ? "Blocked"
                  : "Allowed";


              matchedRule =
                rule.path;

            }

          });


        const resultClass =
          decision === "Blocked"
            ? "tool-bad"
            : "tool-ok";


        setResult(
          "robotsResults",
          `

          <div class="tool-result-row">
            <span>Test Path</span>

            <strong>
              ${escapeHtml(testPath)}
            </strong>
          </div>


          <div class="tool-result-row">
            <span>Result</span>

            <strong class="${resultClass}">
              ${decision}
            </strong>
          </div>


          <div class="tool-result-row">
            <span>Matched Rule</span>

            <span>
              ${
                escapeHtml(
                  matchedRule ||
                  "No matching rule"
                )
              }
            </span>
          </div>

          `
        );

      }
    );
  }


  /* =========================================================
     06. SITEMAP CHECKER
     ========================================================= */

  const checkSitemapButton =
    $("checkSitemapBtn");


  if (checkSitemapButton) {

    checkSitemapButton.addEventListener(
      "click",
      () => {

        const xml =
          $("sitemapInput")?.value.trim() ||
          "";


        if (!xml) {

          setResult(
            "sitemapResults",
            '<div class="tool-warn">Please paste sitemap XML first.</div>'
          );

          return;
        }


        const doc =
          new DOMParser().parseFromString(
            xml,
            "application/xml"
          );


        const parserError =
          doc.querySelector(
            "parsererror"
          );


        if (parserError) {

          setResult(
            "sitemapResults",
            `
              <div class="tool-bad">
                Invalid XML. Please check the sitemap markup.
              </div>
            `
          );

          return;
        }


        const root =
          doc.documentElement?.localName ||
          "";


        const urlElements =
          [...doc.querySelectorAll("url")];


        const locElements =
          [
            ...doc.querySelectorAll(
              "url > loc"
            )
          ];


        const normalUrls =
          locElements
            .map(
              element =>
                element.textContent.trim()
            )
            .filter(Boolean);


        const sitemapIndexUrls =
          [
            ...doc.querySelectorAll(
              "sitemap > loc"
            )
          ]
            .map(
              element =>
                element.textContent.trim()
            )
            .filter(Boolean);


        const isSitemapIndex =
          root === "sitemapindex";


        const entries =
          isSitemapIndex
            ? sitemapIndexUrls
            : normalUrls;


        const uniqueEntries =
          new Set(entries);


        const httpsEntries =
          entries.filter(
            url =>
              /^https:\/\//i.test(url)
          );


        const validRoot =
          root === "urlset" ||
          root === "sitemapindex";


        const status =
          validRoot &&
          entries.length > 0;


        setResult(
          "sitemapResults",
          `

          <div class="tool-result-row">
            <span>Root Element</span>

            <strong class="${
              validRoot
                ? "tool-ok"
                : "tool-bad"
            }">
              ${escapeHtml(
                root || "Unknown"
              )}
            </strong>
          </div>


          <div class="tool-result-row">
            <span>Entries</span>

            <strong>
              ${entries.length}
            </strong>
          </div>


          <div class="tool-result-row">
            <span>Unique Entries</span>

            <strong>
              ${uniqueEntries.size}
            </strong>
          </div>


          <div class="tool-result-row">
            <span>HTTPS Entries</span>

            <strong>
              ${httpsEntries.length}/${entries.length}
            </strong>
          </div>


          <div class="tool-result-row">
            <span>Status</span>

            <strong class="${
              status
                ? "tool-ok"
                : "tool-warn"
            }">
              ${
                status
                  ? "Looks valid"
                  : "Check structure"
              }
            </strong>
          </div>

          `
        );

      }
    );
  }

});