import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBXUJD39X7bVGVDz306df6g8fR9bluqi7s",
	authDomain: "idobatakaigi-with-ytaisei.firebaseapp.com",
	projectId: "idobatakaigi-with-ytaisei",
	storageBucket: "idobatakaigi-with-ytaisei.appspot.com",
	messagingSenderId: "931815181972",
	appId: "1:931815181972:web:390708b4100087456f2e81"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = (props) => {
	const { name, text } = props;
	messageRef.push({ name, text })
}
