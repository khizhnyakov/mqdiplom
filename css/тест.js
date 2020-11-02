let user = {
    chats:{mama: [
            { author: "mama", text: "Ты покушал?" },
            { author: "mama", text: "Почему не отвечаешь?" },
            { author: "Вы", text: "Покушал, мам" },
        ],
        wife: [
            {author: "вы", text: "Устал и загрустил"},
            {author: "вы", text: "Ленюсь"},
            {author: "wife", text: "zzz"},
        ]},
    name: 'Лев Толстой',
    login: 'leo_tolstoy',
    reputation: 97,
    total: 900};
{console.log(user);}
{console.log(user.chats[0][0]);}