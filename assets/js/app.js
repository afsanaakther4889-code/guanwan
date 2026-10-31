(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const body = document.body;
  const root = document.documentElement;

  const syncViewportVars = () => {
    const scrollbarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    root.style.setProperty("--sbw", `${scrollbarWidth}px`);
    root.style.setProperty("--half-sbw", `${scrollbarWidth / 2}px`);
  };

  syncViewportVars();
  window.addEventListener("resize", syncViewportVars);

  body.classList.add("is-loading");

  const imageSet = (base, widths = [1200, 2400]) =>
    widths.map((w) => `assets/images/${base}-${w}.webp ${w}w`).join(", ");

  const projects = {
    foldlight: {
      key: "foldlight",
      num: "01",
      title: "FoldLight",
      cn: "车载应急警示架",
      year: "2026",
      category: "交通安全 / 应急产品",
      scope: "结构 / 灯光 / 形态",
      team: "作品集项目",
      location: "工业设计",
      lede: "在二次事故之前，让警示先被看见。",
      intro:
        "FoldLight 从传统反光板的“放置”逻辑出发，把车载应急三角警示架重新设计成一件可以快速展开、主动发光的随身安全工具。它解决的不是有没有警示，而是警示是否足够快、足够醒目。",
      approach:
        "一体式折叠骨架让它在几秒内展开，红色 LED 轮廓在雨雾与夜间具备更高识别度。扁平的收纳形态可以进入后备箱侧缝，让安全工具真正随车携带。",
      tags: ["结构", "灯光", "交通"],
      cover: "cover-foldlight",
      coverAlt: "FoldLight 车载应急警示架在打开的后备箱中发出红色警示光",
      gallery: [
        { img: "gallery-foldlight-1", alt: "FoldLight 在夜间道路环境中展开的红色三角警示光" },
        { img: "gallery-foldlight-2", alt: "FoldLight 的折叠骨架、灯带与结构节点" },
        { img: "gallery-foldlight-3", alt: "FoldLight 项目背景与交通事故数据研究" },
        { img: "gallery-foldlight-4", alt: "FoldLight 的草图、形态探索与情绪板" },
        { img: "gallery-foldlight-5", alt: "FoldLight 的设计定位与产品策略" }
      ]
    },
    netace: {
      key: "netace",
      num: "02",
      title: "NetAce",
      cn: "网球陪练机器人",
      year: "2026",
      category: "运动机器人 / 网球训练",
      scope: "产品设计 / 机器人 / 交互",
      team: "作品集项目",
      location: "工业设计",
      lede: "让一个人，也能完成一场有效的训练。",
      intro:
        "NetAce 把发球、落点控制与自动捡球整合进一台可以自主移动的网球训练机器人。它希望降低训练的场地与陪练门槛，让一个人也能完成有节奏、有反馈的练习。",
      approach:
        "黑白分明的机身、绿色状态灯与可收纳把手，形成专业但不冰冷的运动设备语言。顶部屏幕与 APP 共同管理训练模式，节奏、落点与强度都可以被调节。",
      tags: ["运动机器人", "产品设计", "交互"],
      cover: "cover-netace",
      coverAlt: "NetAce 网球陪练机器人在球场上",
      gallery: [
        { img: "gallery-netace-1", alt: "NetAce 在网球场上自主移动与发球" },
        { img: "gallery-netace-2", alt: "NetAce 与球包、球拍组成的训练场景" },
        { img: "gallery-netace-3", alt: "NetAce 的球仓、状态灯与机身细节" },
        { img: "gallery-netace-4", alt: "NetAce 的使用故事板与交互流程" },
        { img: "gallery-netace-5", alt: "NetAce 的用户研究与产品机会分析" }
      ]
    },
    breathe: {
      key: "breathe",
      num: "03",
      title: "Breathe",
      cn: "儿童哮喘治疗仪",
      year: "2026",
      category: "医疗产品 / 儿童健康",
      scope: "产品设计 / 儿童交互 / 服务",
      team: "作品集项目",
      location: "工业设计",
      lede: "把每一次呼吸，变成一场小游戏。",
      intro:
        "Breathe 把儿童哮喘治疗从一件令人紧张的医疗行为，转化为一次可以理解、可以参与的互动。雾化器与平板游戏共同记录呼吸训练，让治疗不再只是被动接受。",
      approach:
        "粉色圆润的机身、动物化的出气口与可握持的把手，降低了儿童对设备的恐惧。游戏界面通过呼吸控制角色前进，把抽象的肺功能训练变成即时反馈。",
      tags: ["医疗产品", "儿童交互", "服务设计"],
      cover: "cover-breathe",
      coverAlt: "儿童正在使用 Breathe 儿童哮喘治疗仪",
      gallery: [
        { img: "gallery-breathe-1", alt: "Breathe 雾化器的三组粉色产品细节" },
        { img: "gallery-breathe-2", alt: "Breathe 配套儿童呼吸训练游戏界面" },
        { img: "gallery-breathe-3", alt: "Breathe 游戏中的呼吸控制与奖励机制" },
        { img: "gallery-breathe-4", alt: "Breathe 的产品草图与形态推演" },
        { img: "gallery-breathe-5", alt: "Breathe 的功能定位与用户需求拆解" }
      ]
    },
    reform: {
      key: "reform",
      num: "04",
      title: "Reform",
      cn: "儿童 3D 打印笔",
      year: "2026",
      category: "儿童产品 / 3D 打印",
      scope: "产品设计 / 材料循环 / 交互",
      team: "作品集项目",
      location: "工业设计",
      lede: "让废弃物，重新变成孩子手中的想象力。",
      intro:
        "Reform 是一套面向儿童的 3D 打印创作工具。它把打印笔、材料回收与基础造型支持整合进一个可以放在桌面上的系统，让孩子从“消耗材料”转向“理解材料”。",
      approach:
        "圆润的白色壳体、橙色强调与可见的材料仓，降低了技术的距离感。可替换的打印模块与安全的低温笔尖，让创作过程既自由又可控。",
      tags: ["儿童产品", "材料循环", "交互"],
      cover: "cover-reform",
      coverAlt: "儿童正在使用 Reform 儿童 3D 打印笔进行创作",
      gallery: [
        { img: "gallery-reform-1", alt: "Reform 打印笔、底座与材料仓的细节" },
        { img: "gallery-reform-2", alt: "Reform 的结构分析与模块组成" },
        { img: "gallery-reform-3", alt: "Reform 的儿童使用故事板" },
        { img: "gallery-reform-4", alt: "Reform 在儿童桌面场景中的使用状态" },
        { img: "gallery-reform-5", alt: "Reform 的草图、结构与材料推演" }
      ]
    },
    modo: {
      key: "modo",
      num: "05",
      title: "Modo Core",
      cn: "模块化居家健身",
      year: "2026",
      category: "健身产品 / 模块化",
      scope: "模块化 / CMF / 人机工程",
      team: "作品集项目",
      location: "工业设计",
      lede: "把一间健身房，收进一根握杆。",
      intro:
        "Modo Core 面向居家力量训练，用模块化配重与弹力结构替代笨重的器械。它希望让训练回到日常空间，而不是要求一个专门的房间。",
      approach:
        "淡紫色肌理外壳与半透明弹力带形成轻盈的视觉语言。握杆、配重块与门扣可以快速组合，覆盖拉伸、力量与恢复等不同训练。",
      tags: ["模块化", "CMF", "居家健身"],
      cover: "cover-modo",
      coverAlt: "Modo Core 淡紫色模块化健身设备",
      gallery: [
        { img: "gallery-modo-1", alt: "Modo Core 的使用方式与模块组合" },
        { img: "gallery-modo-2", alt: "Modo Core 的包装与产品家族" },
        { img: "gallery-modo-3", alt: "Modo Core 配套训练 APP 界面" },
        { img: "gallery-modo-4", alt: "Modo Core 握杆、配重与弹力模块拆分" },
        { img: "gallery-modo-5", alt: "Modo Core 的行业背景与用户定位" }
      ]
    },
    sukid: {
      key: "sukid",
      num: "06",
      title: "Sukid",
      cn: "儿童手摇蒜泥器",
      year: "2026",
      category: "儿童厨具 / 家居",
      scope: "产品设计 / 人机工程 / CMF",
      team: "作品集项目",
      location: "工业设计",
      lede: "把厨房里的劳动，变成孩子想参与的游戏。",
      intro:
        "Sukid 是一台为儿童设计的手摇蒜泥器。它不追求更快的电机，而是把研磨过程保留为手部动作，让孩子在参与中理解食物与工具。",
      approach:
        "米白、浅绿与杏色的圆润外壳，配合透明蒜仓与可拆洗结构，让工具像玩具一样亲切。安全锁与低阻力摇柄让使用过程可控，也让清洁变得简单。",
      tags: ["儿童厨具", "人机工程", "CMF"],
      cover: "cover-sukid",
      coverAlt: "Sukid 儿童手摇蒜泥器与蒜瓣",
      gallery: [
        { img: "gallery-sukid-1", alt: "Sukid 四款低饱和配色的手摇蒜泥器" },
        { img: "gallery-sukid-2", alt: "Sukid 的摇柄、透明蒜仓与安全结构" },
        { img: "gallery-sukid-3", alt: "Sukid 在儿童厨房场景中的使用" },
        { img: "gallery-sukid-4", alt: "Sukid 的项目背景与行为映射" },
        { img: "gallery-sukid-5", alt: "Sukid 的用户调研与需求洞察" }
      ]
    },
    clean: {
      key: "clean",
      num: "07",
      title: "Clean Crusader",
      cn: "智能清洁车",
      year: "2026",
      category: "城市服务 / 智能装备",
      scope: "机器人 / 系统设计 / 产品",
      team: "作品集项目",
      location: "工业设计",
      lede: "让街角的油污，被安静地处理。",
      intro:
        "Clean Crusader 是一台面向小吃街与城市街角的智能清洁车。它把巡逻、冲洗与油污回收整合成一套连续的工作流程，减少人工清洁的高压与低效。",
      approach:
        "白绿配色与圆润的传感器外壳削弱了机械感，模块化水箱与可抬升刷盘让它能进入狭窄街巷。自主路径与状态屏让清洁过程可被管理、也可被看见。",
      tags: ["城市服务", "机器人", "系统设计"],
      cover: "cover-clean",
      coverAlt: "Clean Crusader 智能清洁车在街区中工作",
      gallery: [
        { img: "gallery-clean-1", alt: "Clean Crusader 在街区中自主清洁" },
        { img: "gallery-clean-2", alt: "Clean Crusader 的功能模块与工作流程" },
        { img: "gallery-clean-3", alt: "Clean Crusader 的用户画像与利益相关者" },
        { img: "gallery-clean-4", alt: "Clean Crusader 的清洁故事板" },
        { img: "gallery-clean-5", alt: "Clean Crusader 的项目背景与城市环境分析" }
      ]
    },
    tessan: {
      key: "tessan",
      num: "08",
      title: "Tessan",
      cn: "桌面多功能插座",
      year: "2026",
      category: "桌面产品 / 能源配件",
      scope: "产品设计 / 模块化 / CMF",
      team: "作品集项目",
      location: "工业设计",
      lede: "让桌面上的能源，重新变得有序。",
      intro:
        "Tessan 是一台面向办公与移动设备的桌面电源中枢。它把多口充电、模块化插座与理线结构收进一个简洁的金属盒体，减少桌面的线缆与适配器。",
      approach:
        "银灰阳极氧化外壳与打孔网面形成克制的技术感，磁吸模块可以按需扩展。隐藏式理线与低重心结构，让它在视觉上安静、在使用上稳定。",
      tags: ["桌面产品", "模块化", "CMF"],
      cover: "cover-tessan",
      coverAlt: "Tessan 桌面多功能插座",
      gallery: [
        { img: "gallery-tessan-1", alt: "Tessan 桌面电源中枢在办公桌上的使用" },
        { img: "gallery-tessan-2", alt: "Tessan 的模块化结构与内部布局" },
        { img: "gallery-tessan-3", alt: "Tessan 银灰金属机身与打孔网面" },
        { img: "gallery-tessan-4", alt: "Tessan 为手机与电脑同时供电" },
        { img: "gallery-tessan-5", alt: "Tessan 的形态推演与模块草图" }
      ]
    },
    silvion: {
      key: "silvion",
      num: "09",
      title: "Silvion",
      cn: "净水机",
      year: "2026",
      category: "家电 / 净水",
      scope: "产品设计 / 交互界面 / CMF",
      team: "作品集项目",
      location: "工业设计",
      lede: "把一杯好水，做成一件安静的家电。",
      intro:
        "Silvion 是一台面向家庭与办公场景的即热净水机。它把过滤、温控与取水交互整合进一个极简的金属机身，让健康饮水回到日常动作里。",
      approach:
        "银色拉丝面板与黑色触控区形成清晰的材质分区，温度、水量与滤芯状态被收进一块可读的屏幕。可拆卸水箱与磁吸滤芯让维护变得直接。",
      tags: ["家电", "交互界面", "CMF"],
      cover: "cover-silvion",
      coverAlt: "Silvion 净水机在木质桌面上接水",
      gallery: [
        { img: "gallery-silvion-1", alt: "Silvion 净水机在居家空间中的取水场景" },
        { img: "gallery-silvion-2", alt: "Silvion 的触控屏、出水口与滤芯细节" },
        { img: "gallery-silvion-3", alt: "Silvion 的方案推演与结构研究" },
        { img: "gallery-silvion-4", alt: "Silvion 的意向板与设计语言" },
        { img: "gallery-silvion-5", alt: "Silvion 的市场调研与竞品分析" }
      ]
    }
  };

  const featuredKeys = ["foldlight", "netace", "breathe", "reform", "modo", "sukid", "clean", "tessan", "silvion"];

  /* ------------------------------------------------------------------
   * loader
   * ------------------------------------------------------------------ */

  const loader = $(".loader");
  const loaderCount = $(".loader__count");
  const loaderFill = $(".loader__fill");
  const startTime = performance.now();
  const minimumLoad = reducedMotion ? 250 : 1650;
  let loadValue = 0;
  let loaderDone = false;

  const paintLoad = (value) => {
    loadValue = value;
    if (loaderCount) loaderCount.textContent = String(Math.round(value)).padStart(2, "0");
    if (loaderFill) loaderFill.style.setProperty("--load", String(value / 100));
  };

  const countTimer = setInterval(() => {
    const elapsed = performance.now() - startTime;
    const fake = clamp((elapsed / minimumLoad) * 100, 0, 96);
    if (fake > loadValue) paintLoad(fake);
  }, 48);

  const finishLoading = () => {
    if (loaderDone) return;
    loaderDone = true;
    clearInterval(countTimer);
    paintLoad(100);
    window.setTimeout(() => {
      loader && loader.classList.add("is-done");
      body.classList.remove("is-loading");
      body.classList.add("is-ready");
      syncViewportVars();
      window.setTimeout(syncViewportVars, 200);
      window.setTimeout(() => loader && loader.remove(), 1300);
    }, reducedMotion ? 30 : 260);
  };

  const heroImage = $(".hero__figure img");
  const heroReady = heroImage && heroImage.decode ? heroImage.decode().catch(() => {}) : Promise.resolve();
  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => {}) : Promise.resolve();

  Promise.race([
    Promise.all([heroReady, fontsReady]).then(
      () => new Promise((resolve) => setTimeout(resolve, Math.max(0, minimumLoad - (performance.now() - startTime))))
    ),
    new Promise((resolve) => setTimeout(resolve, 5200))
  ]).then(finishLoading);

  window.setTimeout(() => {
    if (!loaderDone) finishLoading();
  }, 7000);

  /* ------------------------------------------------------------------
   * cursor
   * ------------------------------------------------------------------ */

  const cursor = $(".cursor");
  const cursorLabel = cursor ? $("span", cursor) : null;
  let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let cursorPos = { x: pointer.x, y: pointer.y };
  let cursorRunning = false;

  if (finePointer && cursor && !reducedMotion) {
    root.classList.add("has-cursor");

    const renderCursor = () => {
      cursorPos.x += (pointer.x - cursorPos.x) * 0.18;
      cursorPos.y += (pointer.y - cursorPos.y) * 0.18;
      cursor.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`;
      if (cursorRunning) requestAnimationFrame(renderCursor);
    };

    window.addEventListener("pointermove", (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (!cursorRunning) {
        cursorRunning = true;
        requestAnimationFrame(renderCursor);
      }
      cursor.classList.add("is-visible");
    }, { passive: true });

    window.addEventListener("pointerleave", () => cursor.classList.remove("is-visible"));

    const setCursorState = (target) => {
      if (!target) {
        cursor.classList.remove("is-link", "is-view");
        cursorLabel.textContent = "VIEW";
        return;
      }
      const view = target.closest("[data-cursor='view'], .project-trigger, .archive-card");
      const link = target.closest("a, button");
      cursor.classList.toggle("is-view", Boolean(view));
      cursor.classList.toggle("is-link", Boolean(link) && !view);
      cursorLabel.textContent = view ? "VIEW" : "GO";
    };

    document.addEventListener("pointerover", (event) => {
      setCursorState(event.target);
    }, { passive: true });

    document.addEventListener("pointerout", (event) => {
      if (!event.relatedTarget) setCursorState(null);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
   * magnetic
   * ------------------------------------------------------------------ */

  if (finePointer && !reducedMotion) {
    $$(".magnetic").forEach((el) => {
      const strength = el.classList.contains("hero__mini") ? 0.045 : 0.1;
      el.addEventListener("pointermove", (event) => {
        const rect = el.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        el.style.setProperty("--mx", `${(dx * strength).toFixed(2)}px`);
        el.style.setProperty("--my", `${(dy * strength).toFixed(2)}px`);
      }, { passive: true });
      el.addEventListener("pointerleave", () => {
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      });
    });
  }

  /* ------------------------------------------------------------------
   * navigation / menu
   * ------------------------------------------------------------------ */

  const nav = $(".nav");
  const menu = $("#menu");
  const menuToggle = $(".menu-toggle");
  const menuClose = $(".menu__close");
  const navSections = ["work", "about", "method", "faq"];
  const pageMain = $("main");
  const pageFooter = $(".footer");
  const mobileBar = $(".mobile-bar");

  const syncPageInert = () => {
    const hidden = body.classList.contains("case-open") || Boolean(menu && menu.classList.contains("is-open"));
    [pageMain, pageFooter, nav, mobileBar].forEach((element) => {
      if (element) element.toggleAttribute("inert", hidden);
    });
  };

  const updateNav = () => {
    if (!nav) return;
    const show = window.scrollY > Math.min(window.innerHeight * 0.62, 620);
    nav.classList.toggle("is-visible", show);
  };

  const setActiveNav = (id) => {
    $$("[data-nav]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === id);
    });
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  }, { rootMargin: "-28% 0px -60% 0px", threshold: 0 });

  navSections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });

  const openMenu = () => {
    if (!menu) return;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuToggle && menuToggle.setAttribute("aria-expanded", "true");
    body.classList.add("is-locked");
    syncPageInert();
  };

  const closeMenu = () => {
    if (!menu) return;
    const hadFocus = menu.contains(document.activeElement);
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menuToggle && menuToggle.setAttribute("aria-expanded", "false");
    if (!document.body.classList.contains("case-open")) body.classList.remove("is-locked");
    syncPageInert();
    if (hadFocus && menuToggle) menuToggle.focus({ preventScroll: true });
  };

  menuToggle && menuToggle.addEventListener("click", openMenu);
  menuClose && menuClose.addEventListener("click", closeMenu);

  /* ------------------------------------------------------------------
   * scroll reveal
   * ------------------------------------------------------------------ */

  const revealElements = $$(".reveal, .reveal-up");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-in"));
  }

  /* ------------------------------------------------------------------
   * about copy reveal
   * ------------------------------------------------------------------ */

  const revealCopy = $(".reveal-copy");
  let copyChars = [];

  if (revealCopy) {
    const text = revealCopy.textContent.trim();
    revealCopy.textContent = "";
    const closingPunctuation = new Set(["。", "，", "、", "；", "：", "！", "？", "”", "’", "）", "》", "」", "』", "】"]);
    Array.from(text).forEach((char) => {
      if (closingPunctuation.has(char) && copyChars.length) {
        copyChars[copyChars.length - 1].textContent += char;
        return;
      }
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = char;
      revealCopy.appendChild(span);
      copyChars.push(span);
    });
    if (reducedMotion) copyChars.forEach((span) => span.classList.add("is-on"));
  }

  const aboutStatement = $(".about__statement");
  const updateAbout = () => {
    if (!aboutStatement || !copyChars.length || reducedMotion) return;
    const rect = aboutStatement.getBoundingClientRect();
    const progress = clamp((window.innerHeight * 0.86 - rect.top) / (window.innerHeight * 0.45), 0, 1);
    const visibleCount = Math.ceil(progress * copyChars.length);
    copyChars.forEach((span, index) => {
      span.classList.toggle("is-on", index < visibleCount);
    });
  };

  /* ------------------------------------------------------------------
   * hero motion
   * ------------------------------------------------------------------ */

  const hero = $(".hero");
  const heroStage = $(".hero__stage");
  const heroFigure = $(".hero__figure");
  let heroTilt = { x: 0, y: 0 };
  let heroTargetTilt = { x: 0, y: 0 };
  let heroMotionRunning = false;

  const heroMotion = () => {
    heroTilt.x += (heroTargetTilt.x - heroTilt.x) * 0.08;
    heroTilt.y += (heroTargetTilt.y - heroTilt.y) * 0.08;
    if (heroFigure) {
      heroFigure.style.transform = `perspective(1000px) rotateX(${heroTilt.x.toFixed(3)}deg) rotateY(${heroTilt.y.toFixed(3)}deg)`;
    }
    if (Math.abs(heroTilt.x - heroTargetTilt.x) > 0.001 || Math.abs(heroTilt.y - heroTargetTilt.y) > 0.001) {
      requestAnimationFrame(heroMotion);
    } else {
      heroMotionRunning = false;
    }
  };

  if (hero && heroFigure && finePointer && !reducedMotion) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      heroTargetTilt = { x: ny * -2.6, y: nx * 3.4 };
      if (!heroMotionRunning) {
        heroMotionRunning = true;
        requestAnimationFrame(heroMotion);
      }
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      heroTargetTilt = { x: 0, y: 0 };
      if (!heroMotionRunning) {
        heroMotionRunning = true;
        requestAnimationFrame(heroMotion);
      }
    });
  }

  /* ------------------------------------------------------------------
   * archive
   * ------------------------------------------------------------------ */

  const rail = $("[data-archive-rail]");
  const archiveProgress = $("[data-archive-progress]");
  const archivePrev = $("[data-archive-prev]");
  const archiveNext = $("[data-archive-next]");
  let railDragging = false;
  let railMoved = false;
  let railStartX = 0;
  let railStartScroll = 0;

  const updateArchiveProgress = () => {
    if (!rail || !archiveProgress) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const ratio = max > 0 ? rail.scrollLeft / max : 0;
    archiveProgress.parentElement.style.setProperty("--archive-progress", String(clamp(ratio, 0.02, 1)));
  };

  if (rail) {
    rail.addEventListener("scroll", updateArchiveProgress, { passive: true });
    window.addEventListener("resize", updateArchiveProgress);
    updateArchiveProgress();

    rail.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") return;
      railDragging = true;
      railMoved = false;
      railStartX = event.clientX;
      railStartScroll = rail.scrollLeft;
      rail.classList.add("is-dragging");
      rail.setPointerCapture && rail.setPointerCapture(event.pointerId);
    });

    rail.addEventListener("pointermove", (event) => {
      if (!railDragging) return;
      const dx = event.clientX - railStartX;
      if (Math.abs(dx) > 5) railMoved = true;
      rail.scrollLeft = railStartScroll - dx;
    });

    const stopRailDrag = () => {
      if (!railDragging) return;
      railDragging = false;
      rail.classList.remove("is-dragging");
      window.setTimeout(() => { railMoved = false; }, 30);
    };

    rail.addEventListener("pointerup", stopRailDrag);
    rail.addEventListener("pointercancel", stopRailDrag);
    rail.addEventListener("pointerleave", stopRailDrag);

    rail.addEventListener("click", (event) => {
      if (railMoved) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);
  }

  const railStep = () => {
    if (!rail) return 0;
    const card = $(".archive-card", rail);
    return card ? card.getBoundingClientRect().width + 24 : rail.clientWidth * 0.7;
  };

  archivePrev && archivePrev.addEventListener("click", () => {
    rail && rail.scrollBy({ left: -railStep(), behavior: "smooth" });
  });

  archiveNext && archiveNext.addEventListener("click", () => {
    rail && rail.scrollBy({ left: railStep(), behavior: "smooth" });
  });

  /* ------------------------------------------------------------------
   * method
   * ------------------------------------------------------------------ */

  const method = $("[data-method]");
  const methodPager = $$("[data-pager]");
  const methodCards = $$(".method-card");
  let methodChapter = -1;

  const updateMethod = () => {
    if (!method) return;
    if (window.innerWidth <= 900) return;
    const rect = method.getBoundingClientRect();
    const total = method.offsetHeight - window.innerHeight;
    const progress = clamp(-rect.top / Math.max(1, total), 0, 1);
    method.style.setProperty("--method-progress", progress.toFixed(4));
    const chapter = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2;
    if (chapter !== methodChapter) {
      methodChapter = chapter;
      method.dataset.chapter = String(chapter);
      methodCards.forEach((card, index) => card.classList.toggle("is-active", index === chapter));
      methodPager.forEach((pager, index) => pager.classList.toggle("is-active", index === chapter));
    }
  };

  if (method) {
    method.dataset.chapter = "0";
    methodCards[0] && methodCards[0].classList.add("is-active");
    methodPager[0] && methodPager[0].classList.add("is-active");
  }

  /* ------------------------------------------------------------------
   * faq
   * ------------------------------------------------------------------ */

  const faqItems = $$(".faq__item");

  const setFaqState = (item, open) => {
    const button = $(".faq__question", item);
    const answer = $(".faq__answer", item);
    item.classList.toggle("is-open", open);
    if (button) button.setAttribute("aria-expanded", String(open));
    if (answer) {
      answer.toggleAttribute("inert", !open);
      answer.setAttribute("aria-hidden", String(!open));
    }
  };

  faqItems.forEach((item) => {
    setFaqState(item, item.classList.contains("is-open"));
    const button = $(".faq__question", item);
    if (!button) return;
    button.addEventListener("click", () => {
      const willOpen = !item.classList.contains("is-open");
      faqItems.forEach((other) => setFaqState(other, false));
      if (willOpen) setFaqState(item, true);
    });
  });

  /* ------------------------------------------------------------------
   * page scroll motion
   * ------------------------------------------------------------------ */

  const parallaxImages = $$(".work-card__media img");
  let scrollTicking = false;

  const updateOnScroll = () => {
    updateNav();
    updateMethod();
    updateAbout();
    if (heroStage && window.scrollY < window.innerHeight * 1.2) {
      heroStage.style.setProperty("--hero-y", `${(window.scrollY * 0.045).toFixed(2)}px`);
    }
    if (!reducedMotion) {
      const viewportCenter = window.innerHeight / 2;
      parallaxImages.forEach((img) => {
        const card = img.closest(".work-card__media");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
        const offset = clamp((viewportCenter - (rect.top + rect.height / 2)) * 0.045, -24, 24);
        img.style.setProperty("--py", `${offset.toFixed(2)}px`);
      });
    }
    scrollTicking = false;
  };

  const onScroll = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateOnScroll);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateOnScroll();

  // hero stage Y translation needs to combine with translateX
  if (heroStage) {
    heroStage.style.transform = "translateX(-50%) translate3d(0, var(--hero-y, 0px), 0)";
    if (window.innerWidth <= 900) heroStage.style.transform = "none";
  }

  /* ------------------------------------------------------------------
   * case study overlay
   * ------------------------------------------------------------------ */

  const caseEl = $("#case");
  const caseScroll = $("[data-case-scroll]");
  const caseClose = $(".case__close");
  const caseEyebrow = $("[data-case-eyebrow]");
  const caseTitle = $("[data-case-title]");
  const caseLede = $("[data-case-lede]");
  const caseTags = $("[data-case-tags]");
  const caseFacts = $("[data-case-facts]");
  const caseCover = $("[data-case-cover]");
  const caseStory1 = $("[data-case-copy-1]");
  const caseStory2 = $("[data-case-copy-2]");
  const caseGallery = $("[data-case-gallery]");
  const caseNext = $("[data-case-next]");
  const caseNextTitle = $("[data-case-next-title]");
  const caseNumber = $("[data-case-number]");
  const caseProgress = $("[data-case-progress]");
  let caseOpen = false;
  let currentKey = null;
  let lastTrigger = null;

  const buildFacts = (project) => {
    const facts = [
      ["YEAR", project.year],
      ["CATEGORY", project.category],
      ["SCOPE", project.scope],
      ["INDEX", `${project.num} / 09`]
    ];
    caseFacts.innerHTML = facts.map(([label, value]) =>
      `<div><dt>${label}</dt><dd>${value}</dd></div>`
    ).join("");
  };

  const renderCase = (key) => {
    const project = projects[key];
    if (!project || !caseEl) return;
    currentKey = key;

    caseEyebrow.textContent = `PROJECT ${project.num} / ${project.year}`;
    caseTitle.textContent = `${project.title}`;
    caseLede.textContent = project.lede;
    caseNumber.textContent = `${project.num} / 09`;
    caseStory1.textContent = project.intro;
    caseStory2.textContent = project.approach;

    caseTags.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join("");
    buildFacts(project);

    const coverWidths = [1200, 1920];
    caseCover.srcset = imageSet(project.cover, coverWidths);
    caseCover.sizes = "100vw";
    caseCover.src = `assets/images/${project.cover}-1920.webp`;
    caseCover.alt = project.coverAlt || `${project.title} 项目图片`;

    caseGallery.innerHTML = project.gallery.map((item) => `
      <figure>
        <img src="assets/images/${item.img}-1600.webp"
             srcset="${imageSet(item.img, [1200, 1600])}"
             sizes="(max-width: 900px) 92vw, 48vw"
             width="1600" height="900" alt="${item.alt}" loading="lazy">
      </figure>
    `).join("");

    const list = featuredKeys;
    const nextIndex = (list.indexOf(key) + 1) % list.length;
    const nextKey = list[nextIndex];
    const nextProject = projects[nextKey];
    caseNext.dataset.next = nextKey;
    if (caseNextTitle) caseNextTitle.textContent = nextProject.title;

    if (caseScroll) caseScroll.scrollTop = 0;
    updateCaseProgress();
  };

  const updateCaseProgress = () => {
    if (!caseScroll || !caseProgress) return;
    const max = caseScroll.scrollHeight - caseScroll.clientHeight;
    const ratio = max > 0 ? caseScroll.scrollTop / max : 0;
    caseProgress.parentElement.style.setProperty("--case-progress", String(clamp(ratio, 0, 1)));
  };

  const openCase = (key, trigger) => {
    if (!caseEl || !projects[key]) return;
    lastTrigger = trigger || null;
    renderCase(key);
    caseEl.classList.add("is-open");
    caseEl.setAttribute("aria-hidden", "false");
    body.classList.add("case-open", "is-locked");
    caseOpen = true;
    syncPageInert();
    window.setTimeout(() => caseEl.focus({ preventScroll: true }), 250);
  };

  const closeCase = (restoreFocus = true) => {
    if (!caseEl || !caseOpen) return;
    caseOpen = false;
    caseEl.classList.remove("is-open");
    caseEl.setAttribute("aria-hidden", "true");
    body.classList.remove("case-open", "is-locked");
    syncPageInert();
    if (restoreFocus && lastTrigger) {
      window.setTimeout(() => lastTrigger.focus({ preventScroll: true }), 80);
    }
  };

  $$("[data-project]").forEach((trigger) => {
    trigger.addEventListener("click", () => openCase(trigger.dataset.project, trigger));
    trigger.addEventListener("pointerenter", () => {
      const project = projects[trigger.dataset.project];
      if (project) {
        const preload = new Image();
        preload.src = `assets/images/${project.cover}-1200.webp`;
      }
    });
  });

  caseClose && caseClose.addEventListener("click", () => closeCase());
  caseNext && caseNext.addEventListener("click", () => {
    const nextKey = caseNext.dataset.next;
    if (nextKey) {
      renderCase(nextKey);
      caseScroll && caseScroll.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    }
  });

  if (caseScroll) {
    caseScroll.addEventListener("scroll", updateCaseProgress, { passive: true });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (caseOpen) closeCase();
      else if (menu && menu.classList.contains("is-open")) closeMenu();
    }

    if (caseOpen && event.key === "Tab" && caseEl) {
      const focusable = $$("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])", caseEl)
        .filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* ------------------------------------------------------------------
   * anchors
   * ------------------------------------------------------------------ */

  $$("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();

      if (menu && menu.classList.contains("is-open")) closeMenu();

      const wasCase = caseOpen;
      if (wasCase) closeCase(false);

      const scrollToTarget = () => {
        const offset = href === "#top" ? 0 : 82;
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
        window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
        if (href !== "#top") {
          history.replaceState(null, "", href);
        } else {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      };

      if (wasCase) window.setTimeout(scrollToTarget, 420);
      else scrollToTarget();
    });
  });

  /* ------------------------------------------------------------------
   * misc
   * ------------------------------------------------------------------ */

  const updateViewportEffects = () => {
    if (!heroStage) return;
    if (window.innerWidth <= 900) {
      heroStage.style.transform = "none";
    } else {
      heroStage.style.transform = "translateX(-50%) translate3d(0, var(--hero-y, 0px), 0)";
    }
  };

  window.addEventListener("resize", updateViewportEffects);
  updateViewportEffects();

  window.addEventListener("load", () => {
    updateArchiveProgress();
    updateOnScroll();
  });
})();
