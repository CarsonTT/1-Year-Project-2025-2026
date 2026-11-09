"use strict";

const photoGrid = document.querySelector("#photo-grid");
const futureNote = document.querySelector("#future-note");
const album = document.querySelector("#album");
const albumPage = document.querySelector("#album-page");
const chapterTitle = document.querySelector("#chapter-title");
const chapterCount = document.querySelector("#chapter-count");
const chapterStory = document.querySelector("#chapter-story");
const photoHint = document.querySelector("#photo-hint");
const coverContent = document.querySelector("#cover-content");
const chapterContent = document.querySelector("#chapter-content");
const openBookButton = document.querySelector("#open-book-button");
const topControls = document.querySelector("#top-controls");
const bottomControls = document.querySelector("#bottom-controls");
const photoCount = document.querySelector("#photo-count");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const topPreviousButton = document.querySelector("#top-previous-button");
const topNextButton = document.querySelector("#top-next-button");
const topPageCount = document.querySelector("#top-page-count");
const loadingMessage = document.querySelector("#loading-message");
const music = document.querySelector("#scrapbook-music");
const musicButton = document.querySelector("#music-button");
const musicButtonLabel = document.querySelector("#music-button-label");
const musicStatus = document.querySelector("#music-status");
const photoDialog = document.querySelector("#photo-dialog");
const enlargedPhoto = document.querySelector("#enlarged-photo");
const dialogCaption = document.querySelector("#dialog-caption");
const photoDialogPageClasses = Array.from({ length: 6 }, (_, index) => `photo-dialog-page-${index + 2}`);
const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
const photos = window.scrapbookMedia;

if (!Array.isArray(photos) || photos.length === 0) {
  loadingMessage.textContent = "The scrapbook media could not be loaded. Check that media.js is next to this page.";
  previousButton.disabled = true;
  nextButton.disabled = true;
  topPreviousButton.disabled = true;
  topNextButton.disabled = true;
  console.error("The scrapbook photo list is missing or empty.");
} else {
  photos.sort((first, second) => {
    if (first.capturedAt && second.capturedAt) {
      return first.capturedAt.localeCompare(second.capturedAt) || first.src.localeCompare(second.src);
    }

    if (first.capturedAt) {
      return -1;
    }

    if (second.capturedAt) {
      return 1;
    }

    return first.src.localeCompare(second.src);
  });

  const datedOnOrAfter = (photo, date) => Boolean(photo.capturedAt) && photo.capturedAt.slice(0, 10) >= date;
  const datedBefore = (photo, date) => Boolean(photo.capturedAt) && photo.capturedAt.slice(0, 10) < date;
  const datedPhotos = photos.filter((photo) => photo.capturedAt);
  const undatedPhotos = photos.filter((photo) => !photo.capturedAt);
  const pageThreePhotoPath = "Media/051C936B-71F1-47AF-83BB-6B89F9E3C283.PNG";
  const chapters = [
    {
      title: "Getting to Know Each Other",
      photos: datedPhotos.filter((photo) => datedBefore(photo, "2025-11-09")),
      story: [
        "Kaitlyn, when I first met you, I'm so glad it “rained” that day. Because of that, we got to spend what I thought would be at least one more day hanging out together. Little did I know, that one extra day would turn into us hanging out every week after that. Every time we spent time together, I remember laughing so hard and having so much fun. Honestly, I don't think I've ever met someone who laughed at my jokes as much or as hard as you did. I also loved the playful back-and-forth banter we'd always have with each other, always keeping me on my toes.",
        "As we continued spending more time together, my feelings for you naturally grew stronger. Eventually, I found a random opportunity to make the first move, which later led to me asking you out. I'm so glad things worked out the way they did, even though we decided to take things slowly. It gave us the chance to spend more one-on-one time together, whether that meant trying good restaurants, going on fun adventures, or experiencing new things together, LIKE CHINO HILLS STATE PARK!",
        "Beyond all the food and activities, some of my favorite memories were the late-night talks we'd have while looking out at the city. I loved hearing about your goals, sharing our perspectives, and getting to know each other on a deeper level. Being able to have those kinds of conversations so early on was really special to me. I feel like those moments helped build the foundation for the relationship we have today.",
        "And speaking of late nights, our Monday meet-ups at Wingstop after work/school were always something I looked forward to and truly cherished. Those little moments became something special, and we definitely have to run it back again >:D.",
        "Looking back, I'm grateful for how everything unfolded, from that unexpected rainy day to all the memories we made along the way. Our beginnings will always hold a special place in my heart, and they're something I'll never forget.",
      ],
    },
    {
      title: "Our Early Days Together",
      photos: datedPhotos.filter((photo) => photo.src === pageThreePhotoPath || (datedOnOrAfter(photo, "2025-11-09") && datedBefore(photo, "2026-08-20"))),
      story: [
        "And then, we finally made it official! Even though we knew you would be moving closer to the last quarter of the year, it was such a bittersweet feeling when you got accepted into Berkeley. I was SO incredibly happy and proud of you because I knew how exciting and meaningful this opportunity was for you. At the same time, I couldn't help but feel a little sad knowing that you would soon be leaving and that our time together would look a little different. Despite those mixed emotions, we made sure to make the most of the time we had left together. We continued our little spree of trying out so many good restaurants, discovering new places, and experiencing all kinds of fun activities. I'm so glad I got to explore and try so many yummy places with you. Looking back, it's not just the places themselves that I remember, but the fact that I got to experience them alongside you.",
        "Speaking of trying new things, I also really appreciate you getting me into pickleball! It became something I genuinely enjoyed, and I'm grateful that it also gave me the opportunity to slowly heal, rebuild my strength, and become healthier. And of course, we can't forget about blind boxes! Who knew they could be so much fun?! From food adventures to new hobbies and little surprises, we really did try and experience so many new things together during this time. :)",
        "I'm so, so grateful for all these experiences and, most importantly, for having you by my side through them. You made this chapter of our relationship so memorable, and I wouldn't trade those moments for anything.",
      ],
    },
    {
      title: "Kaitlyn's White Coat Celebration",
      photos: datedPhotos.filter((photo) => photo.src !== pageThreePhotoPath && datedOnOrAfter(photo, "2026-08-20") && datedBefore(photo, "2026-09-29")),
      story: [
        "Visiting you up in Berkeley was also such a fun and meaningful experience for me. Not only did I get to be there for you during such an exciting milestone in your life, but I also had the opportunity to spend more time with your family and get to know the people closest to you. Everyone was so supportive and welcoming that I gradually started feeling more and more comfortable around them. Your dad's side of the family was especially sweet, and being able to speak Viet with them made me feel even more connected. Although I couldn't speak Korean, I made sure to joke around with him as much as I could. It was also really heartwarming to hear him say that he enjoys how I make you happy. That meant a lot to me.",
        "Speaking of getting to know the people around you, I also finally got to meet your roommate Erika! She was really nice and definitely not as quiet as I initially thought she would be. I'm glad you have someone like her around, especially when you're so far away from home. Even though this was a relatively short trip, I genuinely had such an amazing time with you and everyone close to you. Getting to experience a little part of your life up in Berkeley and becoming closer to the people who mean so much to you made this trip all the more special to me.",
      ],
    },
    {
      title: "Kaitlyn Comes Home",
      photos: datedPhotos.filter((photo) => datedOnOrAfter(photo, "2026-09-29") && datedBefore(photo, "2026-10-17")),
      story: [
        "You finally came back home! Man, it felt like such a long time since you had been gone hehe. Although we only had about two days to spend with each other, we still managed to make the most of them and, as always, make them worthwhile! From getting AYCE hot pot to meeting another one of your friends, I'm glad we got to squeeze in some fun memories despite the short time we had together. Even though it was only a quick visit, having you back home and getting to spend time with you again felt so nice. You're always welcome to come back like this again, and hopefully next time we can steal a little more than just two days together :D",
      ],
    },
    {
      title: "Our Little Two-Week Home Trial",
      photos: datedPhotos.filter((photo) => datedOnOrAfter(photo, "2026-10-17")),
      story: [
        "I got to visit you again! But this time, for a much longer stay and with a surprise guest hehe. Honestly, my time up in Berkeley with you has been my favorite memory so far. We got to do SOOO many fun things together, whether it was cooking, carving pumpkins, or even taking our little trip to Monterey Bay. Every moment was filled with so much joy, and I loved being able to share all these experiences with you. It wasn't just about the activities themselves, but having all that time together and getting to make so many new memories made it all the more special.",
        "I'm also really glad I got to meet some of your new friends! Although I only got to spend a day with them, it made me happy knowing that you've found such a great group of people to surround yourself with. It's comforting to know that you have friends who support you and are there for you as you continue pursuing your dreams in optometry. Seeing a little more of your life up in Berkeley and the people who have become part of it made me really happy.",
        "There was only ONE thing that could have made this trip better... I WISH I COULD'VE STAYED LONGER! Seriously, I wasn't ready to leave just yet. But I'm grateful for every moment we got to spend together, and I already look forward to making even more memories with you on my next visit. :D",
      ],
    },
    { title: "Our Future", photos: [], isFuture: true },
  ];

  let currentChapterIndex = -1;
  let isTurningPage = false;
  let autoplayBlocked = false;

  function formatPhotoDate(photo) {
    return photo.capturedAt ? dateFormatter.format(new Date(photo.capturedAt)) : "Date not on file";
  }

  function openPhoto(photo, button) {
    enlargedPhoto.src = encodeURI(photo.src);
    enlargedPhoto.alt = button.querySelector("img").alt;
    dialogCaption.textContent = formatPhotoDate(photo);
    photoDialog.classList.remove(...photoDialogPageClasses);
    photoDialog.classList.add(`photo-dialog-page-${currentChapterIndex + 2}`);
    photoDialog.showModal();
  }

  function renderChapter() {
    const isCover = currentChapterIndex === -1;
    coverContent.hidden = !isCover;
    chapterContent.hidden = isCover;
    topControls.hidden = isCover;
    bottomControls.hidden = isCover;

    if (isCover) {
      photoGrid.replaceChildren();
      topPageCount.textContent = `Cover · Page 1 of ${chapters.length + 1}`;
      updateNavigation();
      return;
    }

    const chapter = chapters[currentChapterIndex];
    photoGrid.hidden = Boolean(chapter.isFuture);
    futureNote.hidden = !chapter.isFuture;
    photoHint.hidden = Boolean(chapter.isFuture);
    chapterStory.hidden = !chapter.story;
    chapterStory.replaceChildren(...(chapter.story || []).map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    }));
    chapterTitle.textContent = chapter.title;
    chapterCount.textContent = chapter.isFuture
      ? "A little reminder for always"
      : `${chapter.photos.length} ${chapter.photos.length === 1 ? "memory" : "memories"}`;
    photoCount.textContent = `Page ${currentChapterIndex + 2} of ${chapters.length + 1}`;
    topPageCount.textContent = `Page ${currentChapterIndex + 2} of ${chapters.length + 1} · ${chapter.title}`;
    progressTrack.setAttribute("aria-valuemax", String(chapters.length + 1));
    progressTrack.setAttribute("aria-valuenow", String(currentChapterIndex + 2));
    progressFill.style.width = `${((currentChapterIndex + 2) / (chapters.length + 1)) * 100}%`;
    updateNavigation();
    photoGrid.setAttribute("aria-label", `Photos from ${chapter.title}`);

    const cards = chapter.photos.map((photo, index) => {
      const date = formatPhotoDate(photo);
      const card = document.createElement(photo.kind === "video" ? "figure" : "button");
      const caption = document.createElement(photo.kind === "video" ? "figcaption" : "span");

      card.className = "photo-card";
      const aspectRatio = photo.width / photo.height;
      card.dataset.shape = aspectRatio < 0.82 ? "portrait" : aspectRatio > 1.25 ? "landscape" : "square";
      caption.className = "photo-card-date";
      caption.textContent = date;

      if (photo.kind === "video") {
        const video = document.createElement("video");
        video.src = encodeURI(photo.src);
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.setAttribute("aria-label", `Video memory ${index + 1} from ${date}`);
        video.addEventListener("error", () => {
          loadingMessage.textContent = `A video could not be loaded: ${photo.src.split("/").pop()}`;
          console.error(`Unable to load scrapbook video: ${photo.src}`);
        }, { once: true });
        card.classList.add("video-card");
        card.append(video, caption);
      } else {
        const image = document.createElement("img");
        card.type = "button";
        card.setAttribute("aria-label", `Open photo ${index + 1}: ${date}`);
        image.src = encodeURI(photo.src);
        image.alt = `Memory ${index + 1} from ${date}`;
        image.loading = "lazy";
        image.decoding = "async";
        image.addEventListener("error", () => {
          image.classList.add("image-error");
          image.alt = `Photo could not be loaded: ${date}`;
          console.error(`Unable to load scrapbook photo: ${photo.src}`);
        }, { once: true });
        card.append(image, caption);
        card.addEventListener("click", () => openPhoto(photo, card));
      }

      return card;
    });

    photoGrid.replaceChildren(...cards);
  }

  function updateNavigation() {
    const previousDisabled = isTurningPage || currentChapterIndex === -1;
    const nextDisabled = isTurningPage || currentChapterIndex === chapters.length - 1;
    previousButton.disabled = previousDisabled;
    topPreviousButton.disabled = previousDisabled;
    nextButton.disabled = nextDisabled;
    topNextButton.disabled = nextDisabled;
  }

  function turnPage(direction) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cover = albumPage.cloneNode(true);
    cover.removeAttribute("id");
    cover.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
    cover.querySelector(".photo-grid").classList.remove("is-changing");
    cover.classList.add("page-turn-cover", `turn-${direction}`);
    cover.setAttribute("aria-hidden", "true");
    cover.inert = true;
    cover.style.height = `${albumPage.getBoundingClientRect().height}px`;
    cover.style.width = `${albumPage.getBoundingClientRect().width}px`;

    isTurningPage = true;
    updateNavigation();
    cover.addEventListener("animationend", () => {
      cover.remove();
      isTurningPage = false;
      updateNavigation();
    }, { once: true });
    album.append(cover);
  }

  function moveToChapter(index) {
    if (isTurningPage || index < -1 || index >= chapters.length || index === currentChapterIndex) {
      return;
    }

    turnPage(index > currentChapterIndex ? "next" : "previous");
    currentChapterIndex = index;
    renderChapter();
    updateNavigation();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openBookButton.addEventListener("click", () => moveToChapter(0));
  previousButton.addEventListener("click", () => moveToChapter(currentChapterIndex - 1));
  topPreviousButton.addEventListener("click", () => moveToChapter(currentChapterIndex - 1));
  nextButton.addEventListener("click", () => moveToChapter(currentChapterIndex + 1));
  topNextButton.addEventListener("click", () => moveToChapter(currentChapterIndex + 1));

  document.addEventListener("keydown", (event) => {
    if (
      photoDialog.open
      || event.altKey
      || event.ctrlKey
      || event.metaKey
      || event.target instanceof HTMLButtonElement
      || event.target instanceof HTMLTextAreaElement
      || event.target instanceof HTMLInputElement
      || event.target.isContentEditable
    ) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToChapter(currentChapterIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToChapter(currentChapterIndex + 1);
    }
  });

  photoDialog.addEventListener("click", (event) => {
    if (event.target === photoDialog) {
      photoDialog.close();
    }
  });

  function updateMusicButton() {
    const isPlaying = !music.paused;
    musicButton.setAttribute("aria-pressed", String(isPlaying));
    musicButtonLabel.textContent = isPlaying ? "Pause our song" : "Play our song";
  }

  function removeAutoplayRetryListeners() {
    document.removeEventListener("pointerdown", retryAutoplay);
    document.removeEventListener("keydown", retryAutoplay);
  }

  function retryAutoplay(event) {
    if (!autoplayBlocked || event.target.closest?.("#music-button")) {
      return;
    }

    autoplayBlocked = false;
    playMusic(true);
  }

  async function playMusic(automatic = false) {
    try {
      await music.play();
      autoplayBlocked = false;
      removeAutoplayRetryListeners();
      musicStatus.textContent = "";
    } catch (error) {
      if (error.name === "NotAllowedError") {
        autoplayBlocked = automatic;
        if (autoplayBlocked) {
          document.addEventListener("pointerdown", retryAutoplay);
          document.addEventListener("keydown", retryAutoplay);
        }
        musicStatus.textContent = automatic
          ? "Your browser may need a tap before the music can start."
          : "Your browser needs a tap before the music can play.";
      } else {
        musicStatus.textContent = "The song could not be played. Try opening the scrapbook with VS Code Live Server and keep the audio file beside index.html.";
        console.error("Unable to play the scrapbook music.", error);
      }
    }
  }

  musicButton.addEventListener("click", () => {
    if (music.paused) {
      playMusic();
    } else {
      music.pause();
    }
  });
  music.addEventListener("play", updateMusicButton);
  music.addEventListener("pause", updateMusicButton);
  music.addEventListener("error", () => {
    musicStatus.textContent = "The song could not be loaded. Try VS Code Live Server and keep the audio file beside index.html.";
    console.error("Unable to load the scrapbook music file.");
  });

  renderChapter();
  playMusic(true);
}
