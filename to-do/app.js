// Initialize Firebase with your config
firebase.initializeApp({
    apiKey: "AIzaSyC6aRida79igZ7VvbzkCvhS_dH3-ItW0iM",
  authDomain: "plp-app-16ad6.firebaseapp.com",
  projectId: "plp-app-16ad6",
  storageBucket: "plp-app-16ad6.appspot.com",
  messagingSenderId: "532569811889",
  appId: "1:532569811889:web:3a31642917672267212b90"
    //apiKey: "YOUR_API_KEY",
    //authDomain: "YOUR_AUTH_DOMAIN",
    //projectId: "YOUR_PROJECT_ID",
});

const db = firebase.firestore();

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();
    if (task !== "") {
        db.collection("tasks").add({
            task: task,
            timestamp: firebase.firestore. FieldValue.serverTimestamp()
        });
        taskInput.value = "";
    }
}

// Function to render tasks

function renderTasks(doc) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task-item"
    taskItem.innerHTML = `
    <span>${doc.data().task}</span>
    <button onclick="deleteTask('${doc.id}')">Delete</button>
    `;
    taskList.appendChild(taskItem);

}

// Real-time listener for tasks
db.collection("tasks")
.orderBy("timestamp", "desc")
.onSnapshot(snapshot => {
    const changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type === "added") {
            renderTasks(change.doc);
        }
    });
});

// Function to delete a task

function deleteTask(id) {
    db.collection("tasks").doc(id).delete();
}