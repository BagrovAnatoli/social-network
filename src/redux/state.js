const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 10},
            {id: 2, message: "It's my first post", likesCount: 1000},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Galina', userId: 4},
            {id: '2', name: 'Vladimir', userId: 3},
            {id: '3', name: 'Anna', userId: 2},
            {id: '4', name: 'Elena', userId: 5},
            {id: '5', name: 'Kirill', userId: 6},
            {id: '6', name: 'Olga', userId: 7},
        ],
        messages: [
            {id: '1', message: 'Hi', author: 'I', userId: 1},
            {id: '2', message: 'How is you it-kamasutra?', author: 'I', userId: 1},
            {id: '3', message: 'Good', author: 'You', userId: 2},
        ],
    },
    users: [
        {id: 1, name: 'Anatoli', isFriend: false, ava: 'http://img1.gtimg.com/gamezone/pics/hv1/47/158/718/46728287.jpg'},
        {id: 2, name: 'Anna', isFriend: true, ava: 'https://stihi.ru/pics/2020/08/02/8352.jpg'},
        {id: 3, name: 'Vladimir', isFriend: true, ava: 'https://static.wikia.nocookie.net/mightandmagic/images/9/98/Lord_caldwell.png/revision/latest?cb=20150210184148&path-prefix=en'},
        {id: 4, name: 'Galina', isFriend: true, ava: 'https://cdnb.artstation.com/p/assets/images/images/013/656/375/large/tatiana-danilenko-haven.jpg?1540578403'},
        {id: 5, name: 'Elena', isFriend: false, ava: 'https://img1.akspic.ru/attachments/crops/5/5/0/1055/1055-angel-vymyslennyj_personaz-krylo-tirael-mifologia-1920x1080.jpg'},
        {id: 6, name: 'Kirill', isFriend: false, ava: 'https://get.wallhere.com/photo/video-games-fantasy-art-wings-angel-artwork-sword-Might-And-Magic-wing-screenshot-computer-wallpaper-fictional-character-macro-photography-262060.jpg'},
        {id: 7, name: 'Olga', isFriend: false, ava: 'https://img0.liveinternet.ru/images/attach/c/1/55/425/55425901_1266623507_wing6ce.jpg'},
    ],
};

export default state;