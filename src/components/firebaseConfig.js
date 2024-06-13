import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyCaolNqjdpzSCBDK1JPwmu-UbXDZiRWQdg",
  authDomain: "etec-9a263.firebaseapp.com",
  databaseURL: "https://etec-9a263-default-rtdb.firebaseio.com",
  projectId: "etec-9a263",
  storageBucket: "etec-9a263.appspot.com",
  messagingSenderId: "851677022749",
  appId: "1:851677022749:web:eeaf3ad26bcf8769a154f4",
  measurementId: "G-J4EY3Z7NGF"
};

if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
