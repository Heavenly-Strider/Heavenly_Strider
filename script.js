
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    ru: {
      brandSubtitle: "Авторское пространство",
      navAbout: "Обо мне",
      navProjects: "Проекты",
      navCreative: "Творчество",
      navContact: "Контакты",

      heroEyebrow: "АВТОРСКИЙ КОНТЕНТ · СОБСТВЕННЫЕ ПРОЕКТЫ",
      heroLead: "Создаю контент, истории и миры со своей атмосферой.",
      heroDescription: "Пространство моих проектов: Project Seven Sins, Mefolt: Distant Station, атмосферная музыка и другие творческие работы.",
      heroButton: "Исследовать проекты ↗",
      heroSecondary: "О создателе",
      heroMetaOne: "Авторские миры и идеи",
      heroMetaTwo: "Истории · Игры · Звук",
      heroBadgeOne: "Творческое пространство",
      heroBadgeTwo: "Оригинальные проекты",

      aboutEyebrow: "01 / ОБО МНЕ",
      aboutTitle: "Автор за<br><span>своими проектами.</span>",
      aboutAside: "Идеи, которым я даю собственный визуальный и эмоциональный облик.",
      aboutLead: "Heavenly Strider — имя, под которым я представляю свои творческие проекты.",
      aboutTextOne: "Мне интересно создавать контент, который не просто сообщает что-то зрителю, а передаёт настроение, оставляет пространство для интерпретации и запоминается собственным характером.",
      aboutTextTwo: "Здесь собраны разные стороны моего творчества: авторская вселенная, игровые проекты, атмосферный звук и другие работы. Каждый проект развивается по-своему, но все они отражают мой интерес к историям и созданию миров.",
      aboutTextThree: "Это не законченный каталог. Пространство будет пополняться новыми работами, идеями и материалами по мере их появления.",

      profileStatus: "Онлайн-пространство",
      profileDescription: "Автор контента и создатель собственных проектов.",
      profileFocusLabel: "Направление",
      profileFocus: "Авторский контент",
      profileInterestsLabel: "Проекты",
      profileInterests: "Истории, игры, музыка",
      profileApproachLabel: "Подход",
      profileApproach: "Атмосфера и детали",

      bannerLabel: "АВТОРСКОЕ ПРОСТРАНСТВО",
      bannerCaption: "У каждой истории есть своя атмосфера.",

      projectsEyebrow: "02 / ПРОЕКТЫ",
      projectsTitle: "Миры, которые<br><span>стоит исследовать.</span>",
      projectsAside: "Несколько направлений, объединённых личным творческим взглядом.",

      pssCategory: "Авторская вселенная",
      pssStatus: "В разработке",
      pssDescription: "Авторская вселенная с персонажами, историями и собственным внутренним миром. Проект постепенно раскрывается через материалы и отдельные элементы повествования.",
      tagCharacters: "Персонажи",
      tagWorldbuilding: "Мир",
      tagStories: "Истории",
      pssLink: "Посетить сайт проекта",

      mefoltCategory: "Игровой проект",
      mefoltDescription: "Кооперативная PvE-игра, в которой исследование окружения и атмосфера составляют важную часть игрового опыта.",
      tagGaming: "Игры",
      tagExploration: "Исследование",
      tagAtmosphere: "Атмосфера",
      mefoltLink: "Открыть игру",

      musicCategory: "Музыка и звук",
      musicStatus: "YouTube",
      musicTitle: "Атмосферная музыка",
      musicDescription: "Тёмные звуковые пейзажи и атмосферные композиции, в том числе музыка, созданная для Mefolt: Distant Station.",
      tagAmbient: "Ambient",
      tagSound: "Звук",
      tagMood: "Настроение",
      musicLink: "Слушать на YouTube",

      voiceCategory: "Озвучка",
      voiceStatus: "Участие",
      voiceDescription: "Я принимал участие в озвучке независимого сериального проекта, связанного с YouTube-автором Logzian.",
      tagVoice: "Голос",
      tagSeries: "Сериал",
      tagStorytelling: "Повествование",
      voiceLink: "Смотреть на YouTube",

      creativeEyebrow: "03 / ТВОРЧЕСКИЙ ПОДХОД",
      creativeTitle: "Не просто контент.<br><span>Целое настроение.</span>",
      creativeText: "Мне интересны проекты, которые формируют собственное ощущение мира: через образы, звук, историю и детали. Здесь важен не только результат, но и то, какие эмоции он оставляет после знакомства.",

      contactEyebrow: "04 / ССЫЛКИ",
      contactTitle: "Продолжим<br><span>знакомство?</span>",
      contactAside: "Мои проекты и публичные страницы в сети.",
      contactPss: "Авторский сайт",
      contactGithub: "Проекты и код",
      contactYoutube: "Музыка и видео",
      contactTelegram: "Связаться",
      contactDiscord: "Публичный профиль",
      contactRoblox: "Игровой профиль",

      gameEyebrow: "05 / МИНИ-ИГРА",
      gameIntro: "Уклоняйся от осколков, набирай очки и продержись как можно дольше.",
      gameReadyTitle: "Готов начать?",
      gameReadyText: "Двигайся и избегай красных осколков.",
      gameStart: "Начать игру",
      scoreLabel: "Текущий счёт",
      bestScoreLabel: "Лучший результат",
      controlsTitle: "Управление",
      controlsText: "Используй WASD или стрелки. На телефоне веди пальцем по игровому полю.",
      gameFootnote: "Лучший результат сохраняется в этом браузере.",
      gameStatusReady: "ГОТОВО",
      gameStatusPlaying: "В ИГРЕ",
      gameStatusOver: "ЗАВЕРШЕНО",
      gameOverTitle: "Игра окончена",
      gameOverText: "Твой результат: {score}. Попробуешь ещё раз?",
      gameRestart: "Играть снова",

      footerBrand: "Авторское пространство",
      backToTop: "Наверх ↑"
    },

    en: {
      brandSubtitle: "Creative portfolio",
      navAbout: "About",
      navProjects: "Projects",
      navCreative: "Creative vision",
      navContact: "Contact",

      heroEyebrow: "ORIGINAL CONTENT · PERSONAL PROJECTS",
      heroLead: "Creating content, stories and worlds with their own atmosphere.",
      heroDescription: "A home for my projects: Project Seven Sins, Mefolt: Distant Station, atmospheric music and other creative work.",
      heroButton: "Explore projects ↗",
      heroSecondary: "About the creator",
      heroMetaOne: "Original worlds and ideas",
      heroMetaTwo: "Stories · Games · Sound",
      heroBadgeOne: "Creative space",
      heroBadgeTwo: "Original projects",

      aboutEyebrow: "01 / ABOUT",
      aboutTitle: "The creator<br><span>behind the projects.</span>",
      aboutAside: "Ideas shaped through a personal visual style and atmosphere.",
      aboutLead: "Heavenly Strider is the name under which I share my creative projects.",
      aboutTextOne: "I enjoy creating content that does more than convey information. I want it to establish a mood, leave room for interpretation and be remembered for its own character.",
      aboutTextTwo: "This space brings together different parts of my creative work: an original universe, game projects, atmospheric sound and other creations. Each project develops in its own way, but they all reflect my interest in stories and worldbuilding.",
      aboutTextThree: "This is not a finished catalogue. New works, ideas and material will be added as they appear.",

      profileStatus: "Online portfolio",
      profileDescription: "Content creator and maker of original projects.",
      profileFocusLabel: "Focus",
      profileFocus: "Original content",
      profileInterestsLabel: "Projects",
      profileInterests: "Stories, games, music",
      profileApproachLabel: "Approach",
      profileApproach: "Atmosphere and detail",

      bannerLabel: "ORIGINAL CREATIVE SPACE",
      bannerCaption: "Every story has its own atmosphere.",

      projectsEyebrow: "02 / PROJECTS",
      projectsTitle: "Worlds worth<br><span>exploring.</span>",
      projectsAside: "Different creative directions connected by a personal vision.",

      pssCategory: "Original universe",
      pssStatus: "In development",
      pssDescription: "An original universe featuring characters, stories and its own internal world. The project gradually unfolds through published material and different elements of its narrative.",
      tagCharacters: "Characters",
      tagWorldbuilding: "Worldbuilding",
      tagStories: "Stories",
      pssLink: "Visit project website",

      mefoltCategory: "Game project",
      mefoltDescription: "A cooperative PvE game where environmental exploration and atmosphere are an important part of the experience.",
      tagGaming: "Gaming",
      tagExploration: "Exploration",
      tagAtmosphere: "Atmosphere",
      mefoltLink: "Open the game",

      musicCategory: "Music and sound",
      musicStatus: "YouTube",
      musicTitle: "Atmospheric music",
      musicDescription: "Dark soundscapes and atmospheric compositions, including music created for Mefolt: Distant Station.",
      tagAmbient: "Ambient",
      tagSound: "Sound",
      tagMood: "Mood",
      musicLink: "Listen on YouTube",

      voiceCategory: "Voice acting",
      voiceStatus: "Contributor",
      voiceDescription: "I participated in voice acting for an independent series associated with YouTube creator Logzian.",
      tagVoice: "Voice",
      tagSeries: "Series",
      tagStorytelling: "Storytelling",
      voiceLink: "Watch on YouTube",

      creativeEyebrow: "03 / CREATIVE VISION",
      creativeTitle: "More than content.<br><span>A complete atmosphere.</span>",
      creativeText: "I am drawn to projects that establish a world of their own through imagery, sound, stories and detail. The result matters, but so does the feeling it leaves behind.",

      contactEyebrow: "04 / LINKS",
      contactTitle: "Continue<br><span>exploring.</span>",
      contactAside: "My projects and public pages around the web.",
      contactPss: "Original website",
      contactGithub: "Projects and code",
      contactYoutube: "Music and videos",
      contactTelegram: "Get in touch",
      contactDiscord: "Public profile",
      contactRoblox: "Gaming profile",

      gameEyebrow: "05 / MINI-GAME",
      gameIntro: "Dodge the shards, earn points and survive for as long as you can.",
      gameReadyTitle: "Ready to begin?",
      gameReadyText: "Move around and avoid the red shards.",
      gameStart: "Start game",
      scoreLabel: "Current score",
      bestScoreLabel: "Best score",
      controlsTitle: "Controls",
      controlsText: "Use WASD or the arrow keys. On mobile, drag your finger across the playfield.",
      gameFootnote: "Your best score is saved in this browser.",
      gameStatusReady: "READY",
      gameStatusPlaying: "PLAYING",
      gameStatusOver: "GAME OVER",
      gameOverTitle: "Game over",
      gameOverText: "Your score: {score}. Try again?",
      gameRestart: "Play again",

      footerBrand: "Creative portfolio",
      backToTop: "Back to top ↑"
    }
  };

  let currentLanguage = "ru";
  const languageButtons = document.querySelectorAll("[data-lang]");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  function translatePage(language) {
    currentLanguage = translations[language] ? language : "ru";
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = translations[currentLanguage][key];

      if (typeof value === "string") {
        element.innerHTML = value;
      }
    });

    languageButtons.forEach((button) => {
      const active = button.dataset.lang === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (gameState === "ready") setGameMessage("ready");
    if (gameState === "over") setGameMessage("over");

    if (menuToggle) {
      menuToggle.setAttribute(
        "aria-label",
        currentLanguage === "ru" ? "Открыть меню" : "Open menu"
      );
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => translatePage(button.dataset.lang));
  });

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  const yearElement = document.getElementById("current-year");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());

  // Image fallbacks
  document.querySelectorAll(".avatar-image").forEach((img) => {
    const placeholder = img.closest(".avatar-frame")?.querySelector(".avatar-placeholder");

    function showFallback() {
      img.style.display = "none";
      if (placeholder) placeholder.style.display = "grid";
    }

    img.addEventListener("error", showFallback);
    img.addEventListener("load", () => {
      img.style.display = "block";
      if (placeholder) placeholder.style.display = "none";
    });

    if (img.complete && img.naturalWidth === 0) showFallback();
  });

  document.querySelectorAll(".banner-image").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  });

  document.querySelectorAll(".mefolt-logo").forEach((img) => {
    const fallback = img.parentElement.querySelector(".mefolt-logo-fallback");

    function showFallback() {
      img.style.display = "none";
      if (fallback) fallback.style.display = "block";
    }

    img.addEventListener("error", showFallback);
    img.addEventListener("load", () => {
      img.style.display = "block";
      if (fallback) fallback.style.display = "none";
    });

    if (img.complete && img.naturalWidth === 0) showFallback();
  });

  // Crimson Drift
  const canvas = document.getElementById("game-canvas");
  const stage = document.getElementById("game-stage");
  const overlay = document.getElementById("game-overlay");
  const startButton = document.getElementById("start-game");
  const messageTitle = document.getElementById("game-message-title");
  const messageText = document.getElementById("game-message");
  const scoreElement = document.getElementById("score");
  const bestScoreElement = document.getElementById("best-score");
  const gameStatusElement = document.getElementById("game-status");

  let gameState = "ready";
  let animationFrame = 0;
  let lastFrameTime = 0;
  let elapsedTime = 0;
  let spawnTimer = 0;
  let score = 0;
  let bestScore = 0;
  let player = { x: 0, y: 0, radius: 9, speed: 245 };
  let shards = [];
  let particles = [];
  const keys = new Set();
  const pointer = { active: false, x: 0, y: 0 };
  const ctx = canvas ? canvas.getContext("2d") : null;

  try {
    bestScore = Number(localStorage.getItem("crimsonDriftBest") || 0);
  } catch (_) {
    bestScore = 0;
  }

  function formatScore(value) {
    return String(Math.floor(value)).padStart(4, "0");
  }

  function updateScore() {
    if (scoreElement) scoreElement.textContent = formatScore(score);
    if (bestScoreElement) bestScoreElement.textContent = formatScore(bestScore);
  }

  function setGameMessage(type) {
    if (!messageTitle || !messageText || !startButton || !overlay) return;
    const t = translations[currentLanguage];

    if (type === "over") {
      messageTitle.textContent = t.gameOverTitle;
      messageText.textContent = t.gameOverText.replace("{score}", formatScore(score));
      startButton.textContent = t.gameRestart;
      overlay.classList.remove("hidden");
      if (gameStatusElement) gameStatusElement.textContent = t.gameStatusOver;
    } else {
      messageTitle.textContent = t.gameReadyTitle;
      messageText.textContent = t.gameReadyText;
      startButton.textContent = t.gameStart;
      overlay.classList.remove("hidden");
      if (gameStatusElement) gameStatusElement.textContent = t.gameStatusReady;
    }
  }

  function dimensions() {
    const rect = stage.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }

  function resizeCanvas() {
    if (!canvas || !stage || !ctx) return;

    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (player.x === 0 && player.y === 0) {
      player.x = rect.width / 2;
      player.y = rect.height * .72;
    } else {
      player.x = Math.min(rect.width - player.radius, Math.max(player.radius, player.x));
      player.y = Math.min(rect.height - player.radius, Math.max(player.radius, player.y));
    }

    drawGame();
  }

  function spawnShard() {
    const { width, height } = dimensions();
    const radius = 7 + Math.random() * 12;

    shards.push({
      x: radius + Math.random() * Math.max(1, width - radius * 2),
      y: -radius - 5,
      radius,
      speed: 95 + Math.random() * 85 + Math.min(130, elapsedTime * 2),
      drift: (Math.random() - .5) * 55,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - .5) * 3,
      sides: 3 + Math.floor(Math.random() * 3)
    });

    if (shards.length > 90) shards.shift();

    if (Math.random() > .45) {
      particles.push({
        x: Math.random() * width,
        y: height + 4,
        vx: (Math.random() - .5) * 20,
        vy: -(15 + Math.random() * 35),
        life: 1,
        size: 1 + Math.random() * 2
      });
    }
  }

  function drawBackground(width, height) {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "rgba(255, 160, 60, 0.055)";
    for (let x = 0; x < width; x += 34) {
      for (let y = 0; y < height; y += 34) {
        ctx.fillRect(x, y, 1, 1);
      }
    }

    const glow = ctx.createRadialGradient(
      width / 2, height, 0,
      width / 2, height, Math.max(width, height) * .8
    );
    glow.addColorStop(0, "rgba(190, 91, 24, 0.16)");
    glow.addColorStop(1, "rgba(15, 7, 3, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  }

  function drawShard(shard) {
    ctx.save();
    ctx.translate(shard.x, shard.y);
    ctx.rotate(shard.angle);
    ctx.beginPath();

    for (let i = 0; i < shard.sides; i++) {
      const angle = Math.PI * 2 * i / shard.sides;
      const factor = i % 2 === 0 ? 1 : .68;
      const x = Math.cos(angle) * shard.radius * factor;
      const y = Math.sin(angle) * shard.radius * factor;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fillStyle = "rgba(226, 103, 30, .9)";
    ctx.shadowColor = "rgba(255, 145, 45, .65)";
    ctx.shadowBlur = 13;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "rgba(255, 204, 140, .8)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function drawPlayer() {
    ctx.save();
    ctx.translate(player.x, player.y);

    ctx.beginPath();
    ctx.arc(0, 0, player.radius + 8, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 165, 70, .12)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff0dc";
    ctx.shadowColor = "#ff9a36";
    ctx.shadowBlur = 18;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#db761d";
    ctx.shadowBlur = 0;
    ctx.fill();
    ctx.restore();
  }

  function drawGame() {
    if (!canvas || !ctx || !stage) return;
    const { width, height } = dimensions();

    drawBackground(width, height);
    shards.forEach(drawShard);

    particles.forEach((particle) => {
      ctx.globalAlpha = Math.max(0, particle.life);
      ctx.fillStyle = "#ffb45c";
      ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
    });

    ctx.globalAlpha = 1;
    drawPlayer();
  }

  function startGame() {
    if (!canvas || !ctx) return;

    cancelAnimationFrame(animationFrame);
    const { width, height } = dimensions();

    score = 0;
    elapsedTime = 0;
    spawnTimer = 0;
    lastFrameTime = 0;
    shards = [];
    particles = [];
    keys.clear();
    pointer.active = false;
    player = { x: width / 2, y: height * .72, radius: 9, speed: 245 };
    gameState = "playing";

    updateScore();
    overlay.classList.add("hidden");
    if (gameStatusElement) {
      gameStatusElement.textContent = translations[currentLanguage].gameStatusPlaying;
    }

    animationFrame = requestAnimationFrame(gameLoop);
  }

  function endGame() {
    gameState = "over";
    cancelAnimationFrame(animationFrame);

    if (score > bestScore) {
      bestScore = score;
      try {
        localStorage.setItem("crimsonDriftBest", String(bestScore));
      } catch (_) {}
    }

    updateScore();
    setGameMessage("over");
    drawGame();
  }

  function gameLoop(timestamp) {
    if (gameState !== "playing") return;

    if (!lastFrameTime) lastFrameTime = timestamp;
    const dt = Math.min((timestamp - lastFrameTime) / 1000, .035);
    lastFrameTime = timestamp;
    elapsedTime += dt;
    score += dt * 10;

    const { width, height } = dimensions();

    if (pointer.active) {
      const dx = pointer.x - player.x;
      const dy = pointer.y - player.y;
      const distance = Math.hypot(dx, dy);
      const maxMove = player.speed * dt;

      if (distance > 1) {
        const step = Math.min(distance, maxMove);
        player.x += dx / distance * step;
        player.y += dy / distance * step;
      }
    } else {
      let dx = 0;
      let dy = 0;

      if (keys.has("arrowleft") || keys.has("a")) dx -= 1;
      if (keys.has("arrowright") || keys.has("d")) dx += 1;
      if (keys.has("arrowup") || keys.has("w")) dy -= 1;
      if (keys.has("arrowdown") || keys.has("s")) dy += 1;

      if (dx || dy) {
        const length = Math.hypot(dx, dy);
        player.x += dx / length * player.speed * dt;
        player.y += dy / length * player.speed * dt;
      }
    }

    player.x = Math.max(player.radius, Math.min(width - player.radius, player.x));
    player.y = Math.max(player.radius + 28, Math.min(height - player.radius, player.y));

    spawnTimer += dt;
    const spawnInterval = Math.max(.19, .72 - elapsedTime * .008);

    while (spawnTimer >= spawnInterval) {
      spawnTimer -= spawnInterval;
      spawnShard();
    }

    shards.forEach((shard) => {
      shard.y += shard.speed * dt;
      shard.x += shard.drift * dt;
      shard.angle += shard.spin * dt;

      if (shard.x < shard.radius || shard.x > width - shard.radius) {
        shard.drift *= -1;
      }
    });

    shards = shards.filter((shard) => shard.y < height + shard.radius + 10);

    particles.forEach((particle) => {
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.life -= dt * .35;
    });
    particles = particles.filter((particle) => particle.life > 0);

    for (const shard of shards) {
      if (Math.hypot(player.x - shard.x, player.y - shard.y) < player.radius + shard.radius * .72) {
        endGame();
        return;
      }
    }

    updateScore();
    drawGame();
    animationFrame = requestAnimationFrame(gameLoop);
  }

  if (startButton && canvas && ctx && stage && overlay) {
    startButton.addEventListener("click", startGame);

    window.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();

      if (
        ["arrowleft", "arrowright", "arrowup", "arrowdown", " "].includes(key) &&
        (event.target === document.body || event.target === canvas)
      ) {
        event.preventDefault();
      }

      if (["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d"].includes(key)) {
        keys.add(key);
      }
    });

    window.addEventListener("keyup", (event) => keys.delete(event.key.toLowerCase()));

    window.addEventListener("blur", () => {
      keys.clear();
      pointer.active = false;
    });

    function updatePointer(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    }

    canvas.addEventListener("pointerdown", (event) => {
      if (gameState !== "playing") return;
      pointer.active = true;
      updatePointer(event);
      if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
    });

    canvas.addEventListener("pointermove", (event) => {
      if (pointer.active) updatePointer(event);
    });

    canvas.addEventListener("pointerup", () => { pointer.active = false; });
    canvas.addEventListener("pointercancel", () => { pointer.active = false; });

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  }

  updateScore();
  translatePage("ru");
});
