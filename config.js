/* =========================================================
   🏡 가족 마을 설정 파일
   이 파일만 수정하면 가족 이름·생일·질문·사진·투표가 모두 바뀝니다.
   (따옴표 ' ' 안의 글자만 바꿔주세요)

   ※ 아래 내용은 모두 가상의 예시 가족입니다. (템플릿 공유용 샘플)
   ⚠️ 이 파일은 사이트 주소를 아는 사람이면 누구나 열어 볼 수 있어요.
      전화번호·주소처럼 민감한 정보는 꼭 필요할 때만 넣으세요.
   ========================================================= */
window.FAMILY = {
  /* ---------- 우리 가족 ---------- */
  name: '김씨네',                 // 마을 이름에 붙어요 → "김씨네 마을"
  since: '1998-04-25',            // 가족이 시작된 날 (부모님 결혼한 날 등) → "함께한 지 ○일"
  greeting: `바쁜 하루 끝에
잠깐 들러서 안부 한마디 남겨 주세요.

오늘의 질문에 답하고, 서로에게 하트를 보내고,
우리 가족 나무에 물도 주고 가요 🌱`,

  /* ---------- 미리 적어 두는 구성원 (선택, 0~8명) ----------
     비워 둬도 돼요 (members: []). 마을에 처음 들어온 사람은 '✨ 내 캐릭터 만들기'에서 닉네임·성별·나이·
     피부색·머리 모양을 정하고, 그러면 집이 하나씩 생겨요 (10채까지). 가족이 아닌 모임·동아리도 그대로 쓸 수 있어요.
     아래 5명은 예시 이웃이에요. 미리 적어 두면 생일·연락처·집 앞에서 하는 말을 정할 수 있어요.
     id      : 영어·숫자로 된 짧은 별명 (한 번 정하면 바꾸지 마세요. 편지·답이 이 id로 저장돼요)
     birthday: 양력 생일 '월-일' (음력이면 올해 양력 날짜로 적고 lunar: true)
     phone   : 비워 두면 연락 버튼이 안 보여요
     look    : 마을에서의 모습 (outfit 옷 색, hair 머리색, longHair 긴 머리, glasses 안경, hat 'cap'·'beanie'·'flower', kid 아이 키)
     line    : 집 앞에서 하는 말 */
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

  /* ---------- 🔒 가족 암호는 여기서 정하지 않아요 ----------
     기본은 암호 없이 누구나 들어와요. 걸고 싶으면 마을 시작 화면의 ⚙️(또는 메뉴 → 가족 암호)에서
     암호와 힌트를 정하세요. 구글 시트를 연결했으면 가족 모두에게 적용되고 (시트에 저장),
     시트가 없으면 그 휴대폰에서만 잠기는 미리보기용이에요. 사이트 파일에는 암호가 남지 않아요. */

  /* ---------- 📅 가족 달력 (생일은 위 구성원에서 자동으로 들어가요) ----------
     date: 매년 반복이면 '월-일' + yearly: true, 한 번뿐이면 '연-월-일' */
  events: [
    { title: '엄마 ♥ 아빠 결혼기념일', date: '04-25', yearly: true, emoji: '💍' },
    { title: '할아버지 기일', date: '09-17', yearly: true, emoji: '🕯️', note: '본가에서 저녁 7시' },
    { title: '설날 · 본가 모이기', date: '2027-02-06', emoji: '🧧' },
    { title: '여름 가족 여행', date: '2027-07-31', emoji: '🚗', note: '2박 3일' },
    { title: '추석 · 본가 모이기', date: '2027-09-15', emoji: '🌕' },
  ],

  /* ---------- 🗺️ 모이는 곳 (본가·명절 장소) ---------- */
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

  /* ---------- 💬 오늘의 질문 ----------
     하루에 하나씩 차례로 나와요 (questionStart 날짜가 1번 질문).
     samples = 예시 답 (실제로 쓸 땐 지우세요). 문자열만 적어도 돼요. */
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

  /* ---------- 🗳️ 가족 투표함 (마을에서 새 투표를 만들 수도 있어요) ---------- */
  polls: [
    { id: 'trip', q: '여름 가족 여행, 어디로 갈까요?', options: ['강릉 바다 🌊', '제주도 🍊', '캠핑 ⛺', '집에서 쉬기 🛋️'] },
    { id: 'dinner', q: '이번 모임 저녁 메뉴는?', options: ['갈비찜', '회', '중국집', '치킨'] },
  ],

  /* ---------- ❓ 가족 퀴즈 (answer는 0부터 시작하는 정답 번호) ---------- */
  quiz: [
    { q: '아빠의 첫 차는 무슨 색이었을까요?', options: ['흰색', '은색', '빨간색', '파란색'], answer: 2, comment: '빨간 소형차! 사진관에 사진도 있어요 🚗' },
    { q: '할머니가 제일 좋아하시는 꽃은?', options: ['장미', '국화', '수국', '안개꽃'], answer: 2, comment: '마당에 수국이 가득해요 💠' },
    { q: '엄마 아빠는 어디서 처음 만났을까요?', options: ['회사', '소개팅', '대학 도서관', '버스 정류장'], answer: 3, comment: '비 오는 날 우산을 같이 썼대요 ☔' },
    { q: '막내가 태어난 날 날씨는?', options: ['맑음', '눈', '비', '태풍'], answer: 1, comment: '첫눈 오던 날이었어요 ❄️' },
    { q: '우리 가족 첫 여행지는?', options: ['부산', '경주', '속초', '전주'], answer: 1, comment: '불국사 앞에서 찍은 사진 기억나요?' },
  ],

  /* ---------- 🌱 함께 키우는 나무 ----------
     가족이 하루에 한 번씩 물을 줄 수 있고, 모인 물의 양에 따라 자라요.
     stages = [새싹, 묘목, 나무, 꽃, 열매]가 되는 물의 양 */
  tree: { name: '우리 가족 나무', stages: [3, 10, 25, 45, 80] },

  /* ---------- 구글 시트 연결 (선택) ----------
     비워 두면 편지·답·하트는 그 휴대폰에만 저장돼요 (미리보기용).
     가족 모두가 서로의 글을 보려면 tools/가족_시트_연결.md 대로 시트에 스크립트를 붙여 배포한 뒤
     그 '웹 앱 URL'을 sheet에 넣으세요. site = 시트 안에서 이 가족을 구분하는 이름 */
  sheet: '',
  site: 'kimfamily',

  /* ---------- 예시 데이터 (실제로 쓸 때는 samples: {} 로 비우세요) ----------
     from/to/who = 위 구성원 id, daysAgo = 며칠 전, openInDays = 타임캡슐이 열리기까지 남은 날 */
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

  /* ---------- 계절: 'green'(🌿 봄·여름 숲, 기본) · 'autumn'(🍂 가을) · 'winter'(❄️ 겨울)
     · 'auto'(날짜에 따라: 3~8월 봄·여름, 9~11월 가을, 12~2월 겨울)
     가족이 메뉴의 '계절'로 직접 바꿀 수도 있고, 바꾼 계절은 그 휴대폰이 기억해요. ---------- */
  season: 'green',

  /* ---------- 하늘: 'day'(항상 낮) · 'dusk' · 'night' · 'auto'(접속 시각에 따라) ---------- */
  skyMode: 'day',

  /* ---------- 배경음악 (예: 'music/bgm.mp3', 비우면 합성 오르골) ---------- */
  bgm: '',

  /* ---------- 가족 사진관 ----------
     demoPhotos: true  → 사진 폴더가 비어 있어도 캔버스로 그린 일러스트로 채워집니다.
     실제 사진을 쓰려면 false로 바꾸고 photos/테마폴더 에 1.jpg, 2.jpg ... 순서로 넣으세요. */
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
