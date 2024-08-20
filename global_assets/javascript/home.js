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
    // var foreignExchange = new Card("https://arcane-gorge-10209.herokuapp.com", "global_assets/images/foreign.jpg", "Foreign Langs", "ForeignExchange");
    // var nytnews = new Card("https://nytappbps.herokuapp.com", "global_assets/images/news.jpg", "Newspaper", "NYT", "NYT Search")
    // var rpg = new Card("pages/rpg/index.html", "pages/rpg/assets/images/portrait/roy.jpg", "Fire Emblem RPG", "RPG Game");
    // var rememorizer = new Card("https://bshin19.github.io/rememorizer/", "global_assets/images/rememorizer.jpg", "Jim Carrey Game", "Rememorizer");
    // var psychic = new Card("pages/psychic/index.html", "pages/psychic/assets/images/ball.jpeg", "Pyschic Ball", "Psychic Game");
    // var trivia = new Card("pages/trivia/index.html", "pages/trivia/assets/images/dragontrivia.jpg", "Dragon", "Myth Trivia");
    // var bearCrystal = new Card("pages/crystal_math/index.html", "pages/crystal_math/assets/images/bear.jpg", "Bear", "Honey Bear");
    // var gifResponse = new Card("pages/gifer/index.html", "pages/gifer/assets/images/hobbiton.jpg", "hobbiton", "Gifs of the Rings");
    // var trainTime = new Card("pages/traintimer/index.html", "pages/traintimer/assets/images/traintrax.jpg", "train tracks", "Train Station");
    // var crawlspace = new Card("pages/crawlspace/index.html", "pages/crawlspace/assets/images/background.jpg", "binary", "Crawlspace");
    // var liriBot = new Card("https://github.com/bshin19/liribot", "global_assets/images/fruitbg.jpg", "fruit", "Liribot");
    // var hangNode = new Card("https://github.com/bshin19/node-hangman", "global_assets/images/hangman.jpg", "hangman", "Hangman");
    // var friender = new Card("https://bs-friender.herokuapp.com/", "global_assets/images/friends.jpg", "friends", "Friend-Finder");
    // var burgerme = new Card("https://warm-shore-35019.herokuapp.com/", "global_assets/images/burger.jpg", "Burger", "Burger Me");

    portfolioList.push(
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
          var intro = `<div>Hi there, I'm Brady.</div>
						<p class="mb-0">I am a Software Engineer, Consultant, English buff, and casual writer.</p>
						<p class="mb-0">I am currently engaged at Best Buy, where I develop for the front-end platform.</p>
					`;

          var favoriteLibraries = `
						<p class="mb-0">Some of my favorite front-end libraries include:</p>
						<ul class="mb-0 pl-3">
						<li>* Typescript</li>
						<li>* React</li>
						<li>* Redux</li>
						<li>* Storybook.js</li>
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
        "https://linkedin.com/in/bradyshinners",
        "logo_linkedin.png",
        "Linkedin",
      );
      const emailLink = makeContactMeLink(
        "",
        "logo_gmail.png",
        "brady.shinners@gmail.com",
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
