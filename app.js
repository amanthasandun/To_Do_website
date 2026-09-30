let task = [] ;

const addTask = () => {
    const taskInput = document.getElementById("taskInput")
    const text = taskInput.value.trim();

    if(text){
        task.push({text:text , completed : false})
        taskInput.value = "" ;
    }
}



document.getElementById("newTask").addEventListener("click",function(e){
    e.preventDefault()

    addTask()
})