$(document).ready(function () {
  let isAboutOpen = false,
    isPortfolioOpen = false,
    isContactMeOpen = false;
  const portfolioList = [];
  let numLineTotal = 5;
  const funkDefaults = [
    "blowdryingCode",
    "eatingCookies",
    "camelCasingCamels",
    "googlingAndGoggling",
    "RESTing",
    "drinkingJava",
    "queryingJQuery",
    "nimbleAndAgile",
    "whatRhymesWithMaterialUI",
    "automatingAPIs",
    "grabbingBootstraps",
    "dbMongoBongo",
    "awaitingCommand",
    "spinningYarn",
    "openingStorybook",
    "typingJavascript",
    "invokingLeeroyJenkins",
    "drainingBitbucket",
    "eatingApple",
    "developingMacrosoft",
    "onlyTabsNeverSpaces",
    "climbingBabel",
    "packingTheWeb",
    "testingJests",
    "feedingRedux",
    "hookingReact",
    "goingHeadlessInStyle",
    "findingNextInThePast",
    "pickingATailwind",
    "feedingHusky",
    "breakingSnapshots",
    "climbingWaterfalls",
    "yeah...i'mGonnaNeedYouTo...",
    "obeyingDodds",
  ];

  const funkChange = document.getElementById("funkChange");
  const typewriter = new Typewriter(funkChange, {
    deleteSpeed: "fast",
  });

  const funkTimer = () =>
    setTimeout(function () {
      funkTextReplace(
        funkDefaults[Math.floor(Math.random() * funkDefaults.length)],
      );
      cycleFunkText();
    }, 6000);

  const generateNumLine = () => {
    $("#numline").empty();
    for (let i = 1; i < numLineTotal; i++) {
      const number = $("<div>").html(i);
      $("#numline").append(number);
    }
  };

  function buildPortfolio() {
    /**
     * Generator function that contains all the data for the portfolio items
     *
     * @param {string} filepath relative path or link to deployed site
     * @param {string} imagepath relative path for item's image
     * @param {string} altName a11y text for image
     * @param {string} titleName portfolio item name
     * @param {string} description portfolio item description
     * @param {string[]} technologies list of technologies used for project
     */
    function PortfolioItem(
      filepath,
      imagepath,
      altName,
      titleName,
      description,
      technologies,
    ) {
      this.page = filepath;
      this.image = imagepath;
      this.alt = altName;
      this.title = titleName;
      this.description = description;
      this.technologies = technologies;
    }

    const emblemAnims = new PortfolioItem(
      "https://emblem-anims.herokuapp.com",
      "global_assets/images/battlefield.jpg",
      "Emblem Anims Link",
      "Emblem Anims",
      "Developed a website that presents an online community's custom assets in a more visually appealing way for downloading and comparison.",
      [
        "React",
        "mySQL",
        "Storybook.js",
        "Typescript",
        "Redux",
        "Node.js",
        "Express.js",
        "CSS",
        "HTML",
        "Handlebars",
      ],
    );

    const bestBuyPatternLibrary = new PortfolioItem(
      "",
      "global_assets/images/bby.jpg",
      "",
      "Pattern Library",
      "Maintained a React-based Pattern Library used across Best Buy, requiring regular discussion and alignment between development, UX, and Accessibility.",
      ["React", "Typescript", "Grunt", "Webpack", "CSS", "Less"],
    );

    const bestBuyGVP = new PortfolioItem(
      "",
      "global_assets/images/bby.jpg",
      "",
      "JS Platform",
      "Maintained, updated, deployed, and provided ongoing developer support for the front-end of Best Buy's browser platform.",
      [
        "React",
        "Node.js",
        "Typescript",
        "Lerna",
        "Yarn",
        "Webpack",
        "Express.js",
      ],
    );

    const bestBuyCMS = new PortfolioItem(
      "",
      "global_assets/images/bby.jpg",
      "",
      "CMS",
      "Developed an internal Content Management System for business and developer consumption to create reusable rule-based dynamic webpage layouts.",
      ["React", "Node.js", "Typescript", "Webpack", "Redux"],
    );

    const targetDesignSystem = new PortfolioItem(
      "",
      "glabel_assets/images/tgt.png",
      "",
      "Design System",
      "Maintained and improved a widely-utilized design system, including facilitating major releases leading to a greater than 60% reduction in the public-facing API and simpler developer experience.",
      ["Nextjs", "React", "Typescript", "Styled Components", "Sass"],
    );

    portfolioList.push(
      targetDesignSystem,
      bestBuyPatternLibrary,
      bestBuyCMS,
      bestBuyGVP,
      emblemAnims,
    );
    // , foreignExchange, nytnews, rpg, rememorizer, psychic, trivia, bearCrystal, gifResponse, trainTime, crawlspace, liriBot, hangNode, friender, burgerme);
  }

  const clickNavigation = (divID, clickedDiv, added, removed, extraNums) => {
    clearTimeout(funkTimer);
    if (clickedDiv.getAttribute("data-clicked") == "true") {
      $(divID).removeAttr("style");
      clickedDiv.setAttribute("data-clicked", false);
      numLineTotal -= extraNums;
      generateNumLine();
      funkTextReplace(removed);
      cycleFunkText();
    } else {
      $(divID).css("color", "gold");
      clickedDiv.setAttribute("data-clicked", true);
      numLineTotal += extraNums;
      generateNumLine();
      funkTextReplace(added);
      cycleFunkText();
    }
    funkTimer();
  };

  const setAboutMeContents = () => {
    // generate html once on first invokation, then always hits else
    if (!isAboutOpen) {
      isAboutOpen = true;

      const aboutWrapper = $("<div>")
        .addClass("red col-12")
        .html(function () {
          var intro = `<div>Hi there, I'm Beatrice.</div>
						<p class="mb-0">I am a Software Engineer, English buff, artist, and writer.</p>
						<p class="mb-0">I develop design systems for Target~</p>
					`;

          var favoriteLibraries = `
						<p class="mb-0">Some of my favorite front-end libraries include:</p>
						<ul class="mb-0 pl-3">
						<li>* Typescript</li>
						<li>* React</li>
						<li>* Storybook.js</li>
            <li>* Tailwind</li>
						<li>* Headless UI</li>
            <li>* Floating UI</li>
						<li>* Webpack</li>
						<li>* Material-ui</li>
						</ul>
					`;

          var callToAction =
            "<div>For a more complete list of my skills, please check out my portfolio.</div>";

          return `${intro}${favoriteLibraries}${callToAction}`;
        });
      $("#aboutContents").html(aboutWrapper);
    } else {
      $("#aboutContents").toggle();
    }
  };

  const setPortfolioContents = () => {
    // generate html once on first invokation, then always hits else
    if (!isPortfolioOpen) {
      isPortfolioOpen = true;

      portfolioList.forEach((portfolioItem) => {
        const portfolioItemImage = $("<img>")
          .addClass("portfolioimages")
          .attr("src", portfolioItem.image)
          .attr("alt", portfolioItem.alt || portfolioItem.title);

        const portfolioItemText = $("<p>")
          .addClass("portfolioTitle")
          .html(portfolioItem.title);

        let portfolioItemLink;

        if (portfolioItem.page) {
          portfolioItemLink = $("<a>")
            .attr("href", portfolioItem.page)
            .append(portfolioItemImage, portfolioItemText);
        } else {
          portfolioItemLink = $("<span>").append(
            portfolioItemImage,
            portfolioItemText,
          );
        }

        const portfolioItemDescription = $("<p>")
          .addClass("my-3 white")
          .html(portfolioItem.description);

        const portfolioItemList = $("<p>")
          .addClass("red")
          .html(
            () =>
              '<span class="blue">const </span><span class="white">technologies = [ </span>"' +
              portfolioItem.technologies.join('", "') +
              '"<span class="white"> ]</span>',
          );

        const portfolioItemContent = $("<div>")
          .addClass("col-10 d-inline-block align-top green portfolioText")
          .append(portfolioItemDescription, portfolioItemList);

        const portfolioItemWrapper = $("<div>")
          .addClass("col-12 my-1")
          .append(portfolioItemLink, portfolioItemContent);
        $("#portfolioContents").append(portfolioItemWrapper);
      });
    } else {
      $("#portfolioContents").toggle();
    }
  };

  /**
   * Generates a contact link with an image and text.
   *
   * @param {string} link hyperlink to website if applicable
   * @param {string} img link to image
   * @param {string} text displayed text
   */
  function makeContactMeLink(link, img, text) {
    const isHyperlink = link;
    let contactMethodWrapper;

    if (isHyperlink) {
      contactMethodWrapper = $("<a>")
        .addClass("contactLink col-lg-4 col-12")
        .attr("href", link);
    } else {
      contactMethodWrapper = $("<div>").addClass("contactLink col-lg-4 col-12");
    }

    const contactMethodImage = $("<img>").attr(
      "src",
      "global_assets/images/" + img,
    );

    const contactMethodText = $("<span>").html(" " + text);

    contactMethodWrapper.append(contactMethodImage, contactMethodText);

    return contactMethodWrapper;
  }

  // Generates contactMe HTML and displays it on the page
  const setContactMeContents = () => {
    // generate html once on first invokation, then always hits else
    if (!isContactMeOpen) {
      isContactMeOpen = true;

      const githubLink = makeContactMeLink(
        "https://github.com/bshin19",
        "logo_github.png",
        "Github",
      );
      const linkedInLink = makeContactMeLink(
        "https://linkedin.com/in/bshinners",
        "logo_linkedin.png",
        "Linkedin",
      );
      const emailLink = makeContactMeLink(
        "",
        "logo_gmail.png",
        "b.shinners@icloud.com",
      );

      $("#contactMe").append(githubLink, linkedInLink, emailLink);
    } else {
      $("#contactMe").toggle();
    }
  };

  const cycleFunkText = () => {
    setTimeout(() => {
      funkTextReplace(
        funkDefaults[Math.floor(Math.random() * funkDefaults.length)],
      );
      cycleFunkText();
    }, 6000);
  };

  const funkTextReplace = (functionName) => {
    typewriter.typeString(functionName).pauseFor(1500).deleteAll().start();
  };

  $("#toggleAboutMeBtn").on("click", function () {
    setAboutMeContents();
    clickNavigation(
      "#toggleAboutMeBtn",
      this,
      "millingAbout",
      "hidingAbout",
      11,
    );
  });

  $("#togglePortfolioBtn").on("click", function () {
    setPortfolioContents();
    clickNavigation(
      "#togglePortfolioBtn",
      this,
      "buildingPortfolio",
      "terminatingPortfolio",
      22,
    );
  });

  $("#toggleContactMeBtn").on("click", function () {
    setContactMeContents();
    clickNavigation("#toggleContactMeBtn", this, "contactMe", "neverMind", 2);
  });

  generateNumLine();
  buildPortfolio();
  typewriter.typeString("helloWorld").pauseFor(2600).deleteAll().start();
  cycleFunkText();
});
