const quotes = [
    {
        quote: '순간을 향하여 말하노니, 멈추어라 너는 정말로 아름답구나',
        author: '괴테 - 파우스트 중'
    },
    {
        quote: '모든 사람은 평등하게 태어났으며, 조물주는 몇 개의 양도할 수 없는 권리를 부여했으며, 그 권리 중에는 생명과 자유와 행복의 추구가 있다.',
        author: '존 애덤스,토머스 제퍼슨 - 미국 독립선언문 중'   
    },
    {
        quote: "죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로워했다.",
        author: "윤동수 - 서시 중"
    },
    {
        quote: "흔들리지 않고 피는 꽃이 어디 있으랴",
        author: "도종환 - 흔들리며 피는 꽃 중"
    },
    {
        quote: "얼마나 걸어야 이 무궁(無窮)의 길은 그칠까. 얼마나 더 걸어야 발이 사라지고 별이 될까",
        author: "장이지 - 충옥 중"
    },
    {
        quote: "오늘도 어제도 아니잊고 먼 후일 그때에 '잊었노라'",
        author: "김소월 - 먼 후일 중"
    },   
    {
        quote: "나의 생은 미친 듯이 사랑을 찾아 헤매었으나 단 한번도 스스로를 사랑하지 않았노라",
        author: "기형도 - 질투는 나의 힘 중"
    },   
    {
        quote: "사람이 길을 넓히는 것이요, 길이 사람을 넓히는 것이 아니라",
        author: "논어 위령공편"
    },   
    {
        quote: "욕심이 잉태한 즉 죄를 낳고, 죄가 장성한 즉 사망을 낳느니라",
        author: "야고보서 1:15"
    },
    {
        quote: "군자는 자기에게서 구하고, 소인은 남에게서 구한다",
        author: "공자"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;