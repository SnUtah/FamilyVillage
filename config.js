/* =========================================================
   🏡 Family village settings
   Edit only this file and the family names, birthdays, questions, photos and polls all change.
   (Change only the text inside the quotes ' ')
   The Korean text is in window.FAMILY; the English version is in window.FAMILY_EN at the end.

   ※ Everything below is a made-up example family. (Sample for sharing the template)
   ⚠️ Anyone who knows the site address can open this file.
      Put in private details such as phone numbers and addresses only when you really need them.
   ========================================================= */
window.FAMILY = {
  /* ---------- Our family ---------- */
  name: '김씨네',                 // goes into the village name → "김씨네 마을" (English: "The Kims' Village")
  since: '1998-04-25',            // the day the family began (e.g. the parents' wedding day) → "together for ○ days"
  greeting: `바쁜 하루 끝에
잠깐 들러서 안부 한마디 남겨 주세요.

오늘의 질문에 답하고, 서로에게 하트를 보내고,
우리 가족 나무에 물도 주고 가요 🌱`,

  /* ---------- Members written in advance (optional, 0–8 people) ----------
     You can leave it empty (members: []). Anyone who enters the village for the first time picks a nickname, gender, age,
     skin color and hair style in '✨ Create my character', and a house appears for them (up to 10 houses).
     Groups and clubs that are not families can use it just the same.
     The 5 people below are example neighbors. Writing people in advance lets you set their birthday, phone and what they say by their house.
     id      : a short nickname in English letters and numbers (never change it once set; letters and answers are saved under this id)
     birthday: solar birthday 'month-day' (for a lunar birthday, write this year's solar date and add lunar: true)
     phone   : left empty, the call buttons are hidden
     look    : how they look in the village (outfit color, hair color, longHair, glasses, hat 'cap' · 'beanie' · 'flower', kid = child height)
     line    : what they say in front of their house */
  members: [
    { id: 'grandma', name: '김할머니', role: '할머니', emoji: '👵', birthday: '12-03', phone: '',
      look: { outfit: '#C9B3E6', hair: '#E8E4DE', longHair: false, glasses: true, hat: 'flower' }, line: '밥은 먹고 다니냐? 🍚' },
    { id: 'dad', name: '김아빠', role: '아빠', emoji: '👨', birthday: '03-14', phone: '',
      look: { outfit: '#8FB8DE', hair: '#3A2A24', longHair: false, glasses: true, hat: '' }, line: '다들 감기 조심하고!' },
    { id: 'mom', name: '김엄마', role: '엄마', emoji: '👩', birthday: '08-21', phone: '',
      look: { outfit: '#F4B8C0', hair: '#5A3A2A', longHair: true, glasses: false, hat: '' }, line: '주말에 갈비찜 할게 🍖' },
    { id: 'first', name: '김첫째', role: '첫째', emoji: '🧑', birthday: '05-27', phone: '',
      look: { outfit: '#A8D08D', hair: '#1E1A22', longHair: false, glasses: false, hat: 'cap' }, line: '이번 주는 야근이에요 😵' },
    { id: 'youngest', name: '김막내', role: '막내', emoji: '🧒', birthday: '10-09', phone: '',
      look: { outfit: '#F7D58B', hair: '#7A5238', longHair: true, glasses: false, hat: 'beanie', kid: true }, line: '시험 끝났다!! 🎉' },
  ],

  /* ---------- 🔒 The family password is not set here ----------
     By default anyone can come in without a password. To set one, use ⚙️ on the village start screen
     (or menu → Family password) and choose a password and a hint. With a Google Sheet connected it applies
     to the whole family (saved in the sheet); without a sheet it only locks that one phone, as a preview.
     The password is never stored in the site files. */

  /* ---------- 📅 Family calendar (birthdays are added automatically from the members above) ----------
     date: 'month-day' + yearly: true for every year, 'year-month-day' for a one-off day */
  events: [
    { title: '엄마 ♥ 아빠 결혼기념일', date: '04-25', yearly: true, emoji: '💍' },
    { title: '할아버지 기일', date: '09-17', yearly: true, emoji: '🕯️', note: '본가에서 저녁 7시' },
    { title: '설날 · 본가 모이기', date: '2027-02-06', emoji: '🧧' },
    { title: '여름 가족 여행', date: '2027-07-31', emoji: '🚗', note: '2박 3일' },
    { title: '추석 · 본가 모이기', date: '2027-09-15', emoji: '🌕' },
  ],

  /* ---------- 🗺️ Meeting place (the family home, where you gather for holidays) ---------- */
  place: {
    name: '할머니 댁 (본가)',
    address: '경기도 행복시 사랑로 45',
    tel: '',
    naverMap: 'https://map.naver.com/p/search/행복시청',
    kakaoMap: 'https://map.kakao.com/link/search/행복시청',
    tmap: '',
    subway: ['1호선 행복역 2번 출구 도보 10분'],
    bus: ['마을버스 3번 · 사랑로 입구 하차'],
    car: '내비게이션에 "행복시 사랑로 45" 검색',
    parking: '집 앞 골목 2대, 넘치면 사랑초등학교 운동장 (주말 개방)',
  },

  /* ---------- 💬 Question of the day ----------
     One a day, in order (the questionStart date gets question 1).
     samples = example answers (delete them for real use). A question can also be just a string. */
  questionStart: '2026-11-01',
  questions: [
    { q: '어릴 때 제일 좋아했던 반찬은?', samples: { grandma: '고등어조림. 그땐 귀했지', mom: '계란말이! 지금도 좋아해', youngest: '소시지 볶음 🌭' } },
    { q: '요즘 제일 자주 듣는 노래는?', samples: { first: '출근길엔 무조건 신나는 노래', dad: '라디오에서 나오는 거 아무거나 🎵' } },
    { q: '올해 가장 고마웠던 가족은? 이유도!', samples: { youngest: '엄마! 시험 기간에 간식 챙겨 줘서', mom: '할머니, 김치 담가 주셔서 🥬' } },
    { q: '우리 가족 여행 중 최고의 순간은?', samples: { dad: '강릉에서 다 같이 본 일출', first: '제주도에서 아빠 길 잃은 거 ㅋㅋ' } },
    { q: '요즘 나의 작은 행복은?', samples: { grandma: '아침에 화분에 물 주는 거', mom: '퇴근하고 마시는 따뜻한 차 한 잔 ☕' } },
    { q: '10년 뒤 우리 가족은 어떤 모습일까?', samples: { first: '다 같이 캠핑카 타고 여행 중', youngest: '내가 용돈 드리는 중 😎' } },
    { q: '가족에게 아직 말 못 한 비밀 하나!', samples: { youngest: '사실 작년에 화분 깬 거 나야…', dad: '비상금은 서랍 맨 아래 칸 🤫' } },
    { q: '이번 주말에 가족이랑 하고 싶은 것은?', samples: { mom: '다 같이 공원 산책', youngest: '치킨 먹으면서 영화 🍗' } },
    { q: '내가 가장 자신 있는 요리는?', samples: { dad: '라면. 물 조절은 내가 최고', grandma: '된장찌개는 아직 안 진다' } },
    { q: '어릴 적 꿈은 무엇이었나요?', samples: { mom: '선생님!', first: '축구 선수 ⚽' } },
    { q: '요즘 고민 하나만 털어놓는다면?', samples: { first: '운동을 해야 하는데…', youngest: '방학 숙제 😇' } },
    { q: '가족 사진 중 제일 좋아하는 한 장은?', samples: { grandma: '막내 돌잔치 사진', dad: '첫째 졸업식 날' } },
    { q: '우리 집에서 제일 좋아하는 장소는?', samples: { dad: '거실 소파. 주말엔 내 자리', youngest: '햇볕 드는 베란다 ☀️' } },
    { q: '나를 한 단어로 표현하면?', samples: { mom: '비타민 🍊', first: '느긋함' } },
    { q: '가족에게 꼭 해 주고 싶은 말 한마디', samples: { grandma: '밥은 꼭 챙겨 먹어라', dad: '늘 고마워, 사랑해' } },
    { q: '최근에 가장 크게 웃었던 일은?', samples: { youngest: '아빠가 고양이 흉내 낸 거 ㅋㅋ', first: '엄마 셀카 각도 🤣' } },
    { q: '다시 가 보고 싶은 곳은?', samples: { mom: '신혼여행 갔던 경주', grandma: '고향 마을 뒷산' } },
    { q: '내가 닮고 싶은 가족의 모습은?', samples: { first: '할머니의 부지런함', youngest: '엄마 웃음 😊' } },
    { q: '올해가 가기 전에 꼭 하고 싶은 일은?', samples: { dad: '가족사진 액자 걸기 🖼️', mom: '다 같이 김장하기' } },
    { q: '요즘 빠져 있는 것은?', samples: { first: '주말 등산 ⛰️', grandma: '손주랑 영상통화' } },
    { q: '할머니(할아버지)께 듣고 싶은 옛날이야기는?', samples: { youngest: '할머니 학교 다닐 때 이야기!', mom: '어머님 처음 이 동네 오셨을 때' } },
    { q: '우리 가족만의 규칙을 하나 만든다면?', samples: { dad: '일요일 저녁은 다 같이 먹기', first: '다투면 그날 안에 화해 🤝' } },
  ],

  /* ---------- 🗳️ Family polls (new polls can also be made in the village) ---------- */
  polls: [
    { id: 'trip', q: '여름 가족 여행, 어디로 갈까요?', options: ['강릉 바다 🌊', '제주도 🍊', '캠핑 ⛺', '집에서 쉬기 🛋️'] },
    { id: 'dinner', q: '이번 모임 저녁 메뉴는?', options: ['갈비찜', '회', '중국집', '치킨'] },
  ],

  /* ---------- ❓ Family quiz (answer = number of the right option, counting from 0) ---------- */
  quiz: [
    { q: '아빠의 첫 차는 무슨 색이었을까요?', options: ['흰색', '은색', '빨간색', '파란색'], answer: 2, comment: '빨간 소형차! 사진관에 사진도 있어요 🚗' },
    { q: '할머니가 제일 좋아하시는 꽃은?', options: ['장미', '국화', '수국', '안개꽃'], answer: 2, comment: '마당에 수국이 가득해요 💠' },
    { q: '엄마 아빠는 어디서 처음 만났을까요?', options: ['회사', '소개팅', '대학 도서관', '버스 정류장'], answer: 3, comment: '비 오는 날 우산을 같이 썼대요 ☔' },
    { q: '막내가 태어난 날 날씨는?', options: ['맑음', '눈', '비', '태풍'], answer: 1, comment: '첫눈 오던 날이었어요 ❄️' },
    { q: '우리 가족 첫 여행지는?', options: ['부산', '경주', '속초', '전주'], answer: 1, comment: '불국사 앞에서 찍은 사진 기억나요?' },
  ],

  /* ---------- 🌱 The tree we grow together ----------
     Each family member can water it once a day, and it grows with the water collected.
     stages = how much water it takes to become [sprout, sapling, tree, blossoms, fruit] */
  tree: { name: '우리 가족 나무', stages: [3, 10, 25, 45, 80] },

  /* ---------- Connecting a Google Sheet (optional) ----------
     Left empty, letters, answers and hearts are saved only on that phone (for previewing).
     For the whole family to see each other's posts, attach the script to a sheet and deploy it as in
     tools/가족_시트_연결.md, then put its 'web app URL' in sheet. site = the name that tells this family apart inside the sheet */
  sheet: '',
  site: 'kimfamily',

  /* ---------- Example data (empty it to samples: {} for real use) ----------
     from/to/who = member ids above, daysAgo = how many days ago, openInDays = days until a time capsule opens */
  samples: {
    letters: [
      { from: 'mom', to: 'all', daysAgo: 0, message: '이번 주말에 다들 본가 오는 거지?\n갈비찜 넉넉히 해 놓을게. 늦지 말고 와 🍖' },
      { from: 'grandma', to: 'youngest', daysAgo: 1, message: '우리 막내 시험 끝났다며.\n할머니가 용돈 조금 보냈다. 맛있는 거 사 먹어라.' },
      { from: 'first', to: 'dad', daysAgo: 2, message: '아빠 지난번에 차 태워 주셔서 감사했어요.\n다음엔 제가 운전할게요 🚗' },
      { from: 'dad', to: 'all', daysAgo: 4, message: '할머니 댁 보일러 고쳐 놨다.\n이제 따뜻하게 자고 갈 수 있어!' },
      { from: 'youngest', to: 'mom', daysAgo: 6, message: '엄마 시험 기간에 간식 챙겨 줘서 고마워 💛\n성적 나오면 제일 먼저 보여줄게!' },
      { from: 'first', to: 'all', daysAgo: 12, openInDays: 120, message: '봄의 우리 가족에게.\n이 편지가 열릴 때쯤 다 같이 벚꽃 보러 가 있으면 좋겠다 🌸' },
    ],
    replies: [
      { who: 'youngest', target: 'letters:0', text: '엄마 최고 🥹 일찍 갈게!' },
      { who: 'dad', target: 'letters:0', emoji: '👍' },
      { who: 'first', target: 'letters:0', emoji: '💗' },
      { who: 'youngest', target: 'letters:1', text: '할머니 사랑해요 💕' },
    ],
    hearts: [
      { from: 'mom', to: 'youngest', daysAgo: 0 }, { from: 'grandma', to: 'first', daysAgo: 0 },
      { from: 'dad', to: 'mom', daysAgo: 1 }, { from: 'youngest', to: 'grandma', daysAgo: 1 },
      { from: 'first', to: 'mom', daysAgo: 2 }, { from: 'mom', to: 'grandma', daysAgo: 3 },
    ],
    visits: [
      { who: 'mom', daysAgo: 0 }, { who: 'grandma', daysAgo: 0 }, { who: 'dad', daysAgo: 1 },
      { who: 'first', daysAgo: 1 }, { who: 'youngest', daysAgo: 2 }, { who: 'mom', daysAgo: 1 },
    ],
    water: [
      { who: 'mom', daysAgo: 0 }, { who: 'grandma', daysAgo: 0 }, { who: 'dad', daysAgo: 1 }, { who: 'mom', daysAgo: 1 },
      { who: 'first', daysAgo: 2 }, { who: 'youngest', daysAgo: 2 }, { who: 'grandma', daysAgo: 3 }, { who: 'mom', daysAgo: 3 },
      { who: 'dad', daysAgo: 4 }, { who: 'grandma', daysAgo: 5 }, { who: 'mom', daysAgo: 6 }, { who: 'first', daysAgo: 7 },
      { who: 'grandma', daysAgo: 8 }, { who: 'dad', daysAgo: 9 }, { who: 'youngest', daysAgo: 10 },
    ],
    votes: [
      { who: 'mom', poll: 'trip', choice: 0 }, { who: 'dad', poll: 'trip', choice: 2 }, { who: 'youngest', poll: 'trip', choice: 1 },
      { who: 'grandma', poll: 'dinner', choice: 0 }, { who: 'first', poll: 'dinner', choice: 3 },
    ],
    scores: [
      { who: 'dad', score: 4, total: 5 }, { who: 'first', score: 3, total: 5 }, { who: 'grandma', score: 5, total: 5 },
    ],
  },

  /* ---------- Season: 'green' (🌿 spring–summer forest, default) · 'autumn' (🍂) · 'winter' (❄️)
     · 'auto' (by date: Mar–Aug spring–summer, Sep–Nov autumn, Dec–Feb winter)
     The family can also change it with 'Season' in the menu, and that phone remembers the choice. ---------- */
  season: 'green',

  /* ---------- Sky: 'day' (always day) · 'dusk' · 'night' · 'auto' (by the time of the visit) ---------- */
  skyMode: 'day',

  /* ---------- Background music (e.g. 'music/bgm.mp3'; empty = synthesized music box) ---------- */
  bgm: '',

  /* ---------- Family photo gallery ----------
     demoPhotos: true  → even with empty photo folders, it fills up with illustrations drawn on a canvas.
     To use real photos, change it to false and put them in photos/<theme folder> as 1.jpg, 2.jpg ... in order. */
  demoPhotos: true,
  museum: {
    title: '우리 가족 사진관',
    themes: [
      {
        id: 'trips', title: '가족 여행', emoji: '✈️', color: '#A9D8E8',
        subtitle: '다 같이 떠났던 날들',
        folder: 'photos/trips', count: 8, ext: 'jpg',
        captions: ['첫 가족 여행, 경주', '바다에 처음 발 담근 날', '휴게소 호두과자', '제주 귤밭에서', '캠핑장의 밤', '눈썰매장', '할머니와 기차 여행', '다음엔 어디로?'],
      },
      {
        id: 'holidays', title: '명절과 생일', emoji: '🎂', color: '#F4B8C0',
        subtitle: '다 모이면 시끌벅적',
        folder: 'photos/holidays', count: 8, ext: 'jpg',
        captions: ['설날 세배', '추석 송편 빚기', '할머니 칠순 잔치', '막내 돌잔치', '아빠 생신 케이크', '크리스마스 트리', '엄마 생일 깜짝 파티', '다 같이 윷놀이'],
      },
      {
        id: 'growing', title: '아이들 자라는 모습', emoji: '🌱', color: '#B9D8A2',
        subtitle: '어느새 이만큼 컸어요',
        folder: 'photos/growing', count: 8, ext: 'jpg',
        captions: ['첫걸음', '유치원 입학', '자전거 배우던 날', '첫 운동회', '초등학교 졸업', '교복 처음 입은 날', '수능 끝!', '첫 출근'],
      },
      {
        id: 'everyday', title: '평범한 날들', emoji: '☕', color: '#F7D58B',
        subtitle: '특별하지 않아서 더 소중한',
        folder: 'photos/everyday', count: 6, ext: 'jpg',
        captions: ['일요일 아침 식탁', '거실에서 낮잠', '동네 산책', '김장하는 날', '마당의 수국', '저녁 먹고 수다'],
      },
      {
        id: 'old', title: '옛날 사진', emoji: '📷', color: '#E3C9A8',
        subtitle: '앨범 속에서 꺼낸 시간',
        folder: 'photos/old', count: 6, ext: 'jpg',
        captions: ['할머니 할아버지 결혼식', '엄마 아빠 첫 데이트', '신혼집 앞에서', '첫째가 태어난 날', '옛날 우리 집', '빛바랜 가족사진'],
      },
    ],
  },
};

/* =========================================================
   🌐 English version of the text above.
   Same shape; only text. Anything left out shows the Korean text.
   Lists of options (polls, quiz) must keep the same number and order as above.
   banner = a short theme name for the gallery banners (English only, optional).
   Changed the village name above? Change the English names too, or delete this block to show the Korean content to everyone.
   (Ids, dates, numbers, phone numbers, links and colors are taken from above.)
   ========================================================= */
window.FAMILY_EN = {
  name: 'The Kims',               // → "The Kims' Village"
  greeting: `At the end of a busy day,
stop by and say hello.

Answer the question of the day,
send each other hearts
and water our family tree 🌱`,

  members: [
    { name: 'Grandma Kim', role: 'Grandma', line: 'Are you eating properly? 🍚' },
    { name: 'Dad Kim', role: 'Dad', line: "Don't catch a cold!" },
    { name: 'Mom Kim', role: 'Mom', line: 'Galbi-jjim this weekend 🍖' },
    { name: 'Eldest Kim', role: 'Eldest', line: 'Working late all week 😵' },
    { name: 'Youngest Kim', role: 'Youngest', line: 'Exams are over!! 🎉' },
  ],

  events: [
    { title: "Mom ♥ Dad's anniversary" },
    { title: "Grandpa's memorial service", note: 'At the family home, 19:00' },
    { title: "Lunar New Year at Grandma's" },
    { title: 'Summer family trip', note: '3 days, 2 nights' },
    { title: "Chuseok at Grandma's" },
  ],

  place: {
    name: "Grandma's house (the family home)",
    address: '45 Sarang-ro, Haengbok-si, Gyeonggi-do',
    subway: ['Line 1, Haengbok Station Exit 2, 10 min walk'],
    bus: ['Local bus 3 · Get off at Sarang-ro entrance'],
    car: 'Search for "45 Sarang-ro, Haengbok-si" in your navigation app',
    parking: "Room for 2 cars in the alley out front. If it's full, use the Sarang Elementary School playground (open on weekends)",
  },

  questions: [
    { q: 'What was your favorite side dish as a kid?', samples: { grandma: 'Braised mackerel. It was a treat back then', mom: 'Rolled omelet! I still love it', youngest: 'Stir-fried sausages 🌭' } },
    { q: 'What song have you been playing most lately?', samples: { first: 'Upbeat songs on the way to work, always', dad: "Whatever's on the radio 🎵" } },
    { q: 'Who in the family are you most thankful for this year? Tell us why!', samples: { youngest: 'Mom! For the snacks during exams', mom: 'Grandma, for making us kimchi 🥬' } },
    { q: 'What was the best moment of all our family trips?', samples: { dad: 'Watching the sunrise together in Gangneung', first: 'Dad getting lost on Jeju lol' } },
    { q: 'What is a small joy in your life these days?', samples: { grandma: 'Watering my plants in the morning', mom: 'A warm cup of tea after work ☕' } },
    { q: 'What will our family look like in 10 years?', samples: { first: 'On the road together in a camper van', youngest: 'Me giving Mom and Dad pocket money 😎' } },
    { q: "One secret you've never told the family!", samples: { youngest: 'Actually, I was the one who broke the flowerpot last year…', dad: 'My emergency cash is in the bottom drawer 🤫' } },
    { q: 'What would you like to do with the family this weekend?', samples: { mom: 'A walk in the park together', youngest: 'A movie with fried chicken 🍗' } },
    { q: 'What dish are you best at making?', samples: { dad: 'Ramyeon. Nobody gets the water right like me', grandma: 'Nobody beats my doenjang stew yet' } },
    { q: 'What did you want to be when you were little?', samples: { mom: 'A teacher!', first: 'A soccer player ⚽' } },
    { q: "If you could share just one worry, what's on your mind?", samples: { first: 'I really should start working out…', youngest: 'Vacation homework 😇' } },
    { q: 'Which family photo is your favorite?', samples: { grandma: "The youngest's first birthday party", dad: "The eldest's graduation day" } },
    { q: 'What is your favorite spot at home?', samples: { dad: 'The living room sofa. My seat on weekends', youngest: 'The sunny balcony ☀️' } },
    { q: 'How would you describe yourself in one word?', samples: { mom: 'Vitamin 🍊', first: 'Easygoing' } },
    { q: 'One thing you really want to tell the family', samples: { grandma: "Don't skip your meals", dad: 'Thank you for everything. I love you' } },
    { q: 'What made you laugh the hardest recently?', samples: { youngest: 'Dad doing a cat impression lol', first: "Mom's selfie angles 🤣" } },
    { q: 'Where would you love to go again?', samples: { mom: 'Gyeongju, where we went on our honeymoon', grandma: 'The hill behind my hometown' } },
    { q: 'Who in the family would you like to be more like?', samples: { first: 'How hard Grandma works', youngest: "Mom's smile 😊" } },
    { q: 'What do you really want to do before the year is over?', samples: { dad: 'Hang a framed family photo 🖼️', mom: 'Make kimchi together on kimjang day' } },
    { q: 'What are you into these days?', samples: { first: 'Weekend hikes ⛰️', grandma: 'Video calls with the grandkids' } },
    { q: 'What old story would you like to hear from Grandma or Grandpa?', samples: { youngest: 'What school was like for Grandma!', mom: 'When Grandma first moved to this neighborhood' } },
    { q: 'If we made one family rule, what would it be?', samples: { dad: 'Sunday dinner together, always', first: 'Make up the same day after a fight 🤝' } },
  ],

  polls: [
    { q: 'Summer family trip: where should we go?', options: ['Gangneung beach 🌊', 'Jeju Island 🍊', 'Camping ⛺', 'Rest at home 🛋️'] },
    { q: "What's for dinner at the next get-together?", options: ['Galbi-jjim', 'Sashimi', 'Chinese takeout', 'Fried chicken'] },
  ],

  quiz: [
    { q: "What color was Dad's first car?", options: ['White', 'Silver', 'Red', 'Blue'], comment: "A little red car! There's a photo of it in the gallery too 🚗" },
    { q: "What is Grandma's favorite flower?", options: ['Rose', 'Chrysanthemum', 'Hydrangea', "Baby's breath"], comment: 'The yard is full of hydrangeas 💠' },
    { q: 'Where did Mom and Dad first meet?', options: ['At work', 'On a blind date', 'In the college library', 'At a bus stop'], comment: 'They shared an umbrella on a rainy day ☔' },
    { q: 'What was the weather like the day the youngest was born?', options: ['Sunny', 'Snowy', 'Rainy', 'Typhoon'], comment: 'It was the day of the first snow ❄️' },
    { q: 'Where did our family go on our first trip?', options: ['Busan', 'Gyeongju', 'Sokcho', 'Jeonju'], comment: 'Remember the photo in front of Bulguksa Temple?' },
  ],

  tree: { name: 'Our family tree' },

  samples: {
    letters: [
      { message: "You're all coming home this weekend, right?\nI'll make plenty of galbi-jjim. Don't be late 🍖" },
      { message: 'I heard my youngest finished exams.\nGrandma sent you a little pocket money. Buy yourself something tasty.' },
      { message: "Dad, thank you for driving me last time.\nNext time I'll drive 🚗" },
      { message: "I fixed the boiler at Grandma's.\nNow we can all stay over nice and warm!" },
      { message: "Mom, thank you for the snacks during exams 💛\nYou'll be the first to see my grades!" },
      { message: "To our family in spring.\nBy the time this letter opens, I hope we're all out seeing the cherry blossoms together 🌸" },
    ],
    replies: [
      { text: "Mom, you're the best 🥹 I'll come early!" },
      {}, {},
      { text: 'Love you, Grandma 💕' },
    ],
  },

  museum: {
    title: 'Our family photo gallery',
    themes: [
      {
        title: 'Family trips', banner: 'Trips', subtitle: 'The days we set off together',
        captions: ['First family trip, Gyeongju', 'First dip in the sea', 'Walnut cakes at a rest stop', 'In a Jeju tangerine orchard', 'Night at the campsite', 'Sledding hill', 'Train trip with Grandma', 'Where to next?'],
      },
      {
        title: 'Holidays & birthdays', banner: 'Holidays', subtitle: 'Loud and lively when everyone is together',
        captions: ['New Year bows on Seollal', 'Making songpyeon for Chuseok', "Grandma's 70th birthday party", "The youngest's first birthday", "Dad's birthday cake", 'Christmas tree', "Mom's surprise birthday party", 'Playing yut together'],
      },
      {
        title: 'Growing up', banner: 'Growing up', subtitle: 'Look how big they got',
        captions: ['First steps', 'Starting kindergarten', 'Learning to ride a bike', 'First sports day', 'Elementary school graduation', 'First day in a school uniform', 'College entrance exam done!', 'First day at work'],
      },
      {
        title: 'Ordinary days', banner: 'Everyday', subtitle: 'Precious because they are ordinary',
        captions: ['Sunday breakfast table', 'Nap in the living room', 'Walk around the neighborhood', 'Kimjang day', 'Hydrangeas in the yard', 'Chatting after dinner'],
      },
      {
        title: 'Old photos', banner: 'Old photos', subtitle: 'Moments from the old albums',
        captions: ["Grandma and Grandpa's wedding", "Mom and Dad's first date", 'In front of our first home', 'The day the eldest was born', 'Our old house', 'A faded family photo'],
      },
    ],
  },
};
