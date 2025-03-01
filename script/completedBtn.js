document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.completed-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Board Updated Successfully");
            const btn = this; 
            btn.disabled = true;
            btn.style.backgroundColor = 'gray';
            btn.style.color = 'white';
            btn.style.cursor = 'default';

            const taskManagerElement = document.getElementById('task-manager');
            if (taskManagerElement) {
                const convertedTaskManager = parseInt(taskManagerElement.innerText);
                if (!isNaN(convertedTaskManager)){
                    const result = convertedTaskManager - 1;
                    console.log(result);
                    taskManagerElement.innerText = result;
                }
            }

            const navNumElement = document.getElementById('nav-num');
            if (navNumElement) {
                const convertedNavNmu = parseInt(navNumElement.innerText);
                if(!isNaN(convertedNavNmu)){
                    const update = convertedNavNmu + 1;
                    console.log(update);
                    navNumElement.innerText = update;
                }
            }

            const taskDescription = this.parentElement.parentElement.querySelector('.font-semibold').textContent;
            const currentTime = new Date().toLocaleTimeString();
            const historyParagraph = document.createElement('p');
            historyParagraph.innerText = `You have completed the task ${taskDescription} at ${currentTime}`;
            document.getElementById('history').appendChild(historyParagraph);
        });
    });

    const clearHistoryButton = document.getElementById('clear-history-btn');
    if (clearHistoryButton) { 
        clearHistoryButton.addEventListener('click', function() {
            const historyDiv = document.getElementById('history');
            if (historyDiv) {
                historyDiv.innerHTML = '';
            }
        });
    }
});

document.getElementById('blog').addEventListener('click', function() {
    window.location.href = 'blog.html'; 
});

document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});