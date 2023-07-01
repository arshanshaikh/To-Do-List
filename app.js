const item=document.querySelector("#item")
const todobox=document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
       if(event.key=="Enter"){
        addToDo(this.value)//This item ko refer kar raha hai
        this.value=""// isme jaise hi likh kar enter dabae gae wo text box se hat jaegaa.
       }
    }
)

function addToDo(item){
    const listenItem=document.createElement("li");
    listenItem.innerHTML=`
        ${item}
        <i class="fa-solid fa-xmark"></i>
    `;
    listenItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");//toggle means add karna/remove karna
        }
    )
    listenItem.querySelector("i").addEventListener(
        "click",
        function(){
            listenItem.remove()//uske i par click hoga or delete hoga.
        }
    )

    todobox.appendChild(listenItem)
}