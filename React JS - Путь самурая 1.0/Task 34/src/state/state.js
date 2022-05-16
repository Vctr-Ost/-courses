import { renderAll } from "../render";

let state = {
    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Ivan', imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg' },
            { id: 2, name: 'Kolya', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIhQnV6bbT4Bx14lw7d07mUiFcEvHk38k-g&usqp=CAU' },
            { id: 3, name: 'Valera', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsksF1xU0Wdhzy07jZvTWGbWJwtyHDev3DgQ&usqp=CAU' },
            { id: 4, name: 'Dimka', imgSrc: 'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg' },
        ],
        messagesData: [         // abonent: 1-me ; 0-notMe
            { id: 1, message: 'YO', abonent: 1, imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg' },
            { id: 2, message: 'I`m fine. And u ?', abonent: 0, imgSrc: 'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg' },
            { id: 3, message: 'How are you ?', abonent: 1, imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg' },
            { id: 4, message: 'Hello !', abonent: 1, imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg' },
        ],
    },
    profilePage: {
        myPostsData: [
            { id: 1, text: 'Maxim', likeCount: 24 },
            { id: 2, text: 'Ivan', likeCount: 12 },
            { id: 3, text: 'Dron', likeCount: 2 },
            { id: 4, text: 'KOKOJAMBO', likeCount: 56 },
        ],
        newPostText: 'it-iiiii',
    },
    sitebar: {
        friends: [
            { name: 'Ivan', imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg' },
            { name: 'Kolya', imgSrc: 'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg' },
            { name: 'Valera', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsksF1xU0Wdhzy07jZvTWGbWJwtyHDev3DgQ&usqp=CAU' },
        ],
    }
}

export function addPost(text) {
    let newPost = {
        id: 5,
        text: text,
        likeCount: 0,
    };
    state.profilePage.myPostsData.push(newPost);
    renderAll(state, addPost, updatePostText);
}

export function updatePostText(text) {
    state.profilePage.newPostText = text;
    renderAll(state, addPost, updatePostText);
}

export default state;















//let state = {
//    messagesPage: {
//        dialogsData: [
//            {id: 1, name: 'Ivan', imgSrc:'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'},
//            {id: 2, name: 'Kolya', imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIhQnV6bbT4Bx14lw7d07mUiFcEvHk38k-g&usqp=CAU'},
//            {id: 3, name: 'Valera', imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsksF1xU0Wdhzy07jZvTWGbWJwtyHDev3DgQ&usqp=CAU'},
//            {id: 4, name: 'Dimka', imgSrc:'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'},
//        ],
//        messagesData: [         // abonent: 1-me ; 0-notMe
//            {id: 1, message: 'YO', abonent: 1, imgSrc:'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'},
//            {id: 2, message: 'I`m fine. And u ?', abonent: 0, imgSrc:'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'},
//            {id: 3, message: 'How are you ?', abonent: 1, imgSrc:'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'},
//            {id: 4, message: 'Hello !', abonent: 1, imgSrc:'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'},
//        ],
//    },
//    profilePage: {
//        myPostsData: [
//            {id: 1, text: 'Maxim', likeCount: 24},
//            {id: 2, text: 'Ivan', likeCount: 12},
//            {id: 3, text: 'Dron', likeCount: 2},
//            {id: 4, text: 'KOKOJAMBO', likeCount: 56},
//        ],
//        newPostText: 'it-iiiii',
//    },
//    sitebar: {
//        friends: [
//            {name: 'Ivan', imgSrc:'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'},
//            {name: 'Kolya', imgSrc:'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'},
//            {name: 'Valera', imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsksF1xU0Wdhzy07jZvTWGbWJwtyHDev3DgQ&usqp=CAU'},
//        ],
//    }
//}

//export function addPost(text) {
//    let newPost = {
//        id: 5,
//        text: text,
//        likeCount: 0,
//    };
//    state.profilePage.myPostsData.push(newPost);
//    rerenderEntireTree(state, addPost, updatePostText);
//}

//export function updatePostText(text) {
//    state.profilePage.newPostText = text;
//    rerenderEntireTree(state, addPost, updatePostText);
//}

//let rerenderEntireTree = () => { }
//export function subscribe(observer) {       //* observer - наблюдатель (функц)
//    rerenderEntireTree = observer;
//}

//export default state;