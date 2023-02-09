var countInterval;

function startCounter()
{
    var number=parseInt(document.getElementById("number").value);
    if(isNaN(number))
    {
        alert("Please enter a number");
        clearInterval(countInterval); //This is important for the condition  when a counter is running and you entered a wrong input for a new counter 
        return;
    }

    if(number<1 || number>9)
    {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var currentNo=document.querySelector('.current');
    var nextNo=document.querySelector('.next');
    var count=0;

    //If user clicks on 'Start Counter' button again 
    resetNumbers(currentNo, nextNo);

    //clears the previous interval that was running 
    clearInterval(countInterval);

    countInterval = setInterval(function(){
        if(count === number)
        {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }

        // this function calling goes continuelly until if condition execute
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);
}

//resetNumber function
function resetNumbers(currentNo, nextNo)
{
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

//increseCount function
function increaseCount(currentNo, nextNo)
{
    nextNo.classList.add("animate");

    setTimeout(function()
    {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);
}