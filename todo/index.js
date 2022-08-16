

// window.addEventListener("DOMContentLoaded", function(){
//     items.innerHTML = addItem("Success")
//     console.log(textElement)
    
//  })

let increment = 0
const add_task = document.querySelector(".add-btn")
const add_text = document.querySelector(".add-text")

const addItem = (item) => {
    const div_item = document.createElement('div')
    div_item.classList.add('item')
    const div_item_show = document.createElement('div')
    div_item_show.classList.add('item-show')

    // appending item to div_item_show
    const span_item = document.createElement('span')
    const i_edit = document.createElement('i')
    const i_delete = document.createElement('i')

    // add classList
    i_edit.classList.add("fa", "fa-marker")
    i_delete.classList.add("fa", "fa-trash-can")

    // span
    const i_span = document.createElement('i')
    i_span.classList.add("fa", "fa-circle-check")
    span_item.append(i_span, value)

    const btn_edit = document.createElement('button')
    btn_edit.appendChild(i_edit)
    btn_edit.classList.add("fa-marker-delete")
    const btn_del = document.createElement('button')
    btn_del.classList.add("fa-marker-delete")
    btn_del.appendChild(i_delete)
    div_item_show.append(span_item, btn_edit, btn_del)


    div_item.appendChild(div_item_show)


    // addEventListener to delete button 
    btn_del.addEventListener("click", function() {
        this.parentElement.parentElement.classList.add("delete-item")
        add_task.disabled = false
        add_text.disabled = false
    })

    // btn edit event handler
    function btn_edit_click_callback(){
        // create new node for editing upon request from
        div_hidden = document.createElement("div")
        div_hidden.classList.add("item-hidden")
        // placeholder and span
        input_hidden = document.createElement("input")
        input_hidden.setAttribute("placeholder", "Edit task")
        i_hidden = document.createElement("i")
        i_hidden.classList.add("fa", "fa-marker")
        button_hidden = document.createElement("button")
        button_hidden.append(i_hidden, "Edit task")
        div_hidden.append(input_hidden, button_hidden)
        this.parentElement.parentElement.insertBefore(div_hidden, div_item_show)

        // add eventListener to edit button and close it after editting
        button_hidden.addEventListener("click", function() {
            let newVal = this.previousElementSibling.value
            let oldValChild = this.parentElement.nextElementSibling.children[0]

            // check if new value is not empty string
            if (newVal !== "") {
                oldValChild.textContent = newVal
            }
            div_hidden.classList.add("delete-item")
            markers = document.querySelectorAll(".fa-marker-delete")
            markers.forEach((item) => {
                item.disabled = false
            })

            add_task.disabled = false
            add_text.disabled = false

        })

    
        // console.log(markers)
        btn_edit_disable = document.querySelectorAll(".fa-marker-delete")
        btn_edit_disable.forEach((item) => {
            item.disabled = true
        })
        add_task.disabled = true
        add_text.disabled = true
    }

    // addEventListener to edit button 
    btn_edit.addEventListener("click", btn_edit_click_callback)
    // items.classList.remove("delete-item")

    return div_item
}

// add_text.addEventListener("keyup", function(e) {
//     console.log(e.keyCode)
// })

const items = document.querySelector(".items-container")
const addBtn = document.querySelector(".add-btn")
const textElement = document.querySelector("input")

addBtn.addEventListener("click", function(){
    value = textElement.value
    if (value !== ""){
        items.appendChild(addItem(value))
        textElement.style.borderColor = 'black'
        textElement.value = ""
    }else{
        textElement.style.borderColor = 'red'
    }
})


add_text.addEventListener("keyup", function(e){
    // enter button is presssed button
    if (e.keyCode == 13){
        // add to list
        value = textElement.value
        if (value !== ""){
            items.appendChild(addItem(value))
            textElement.style.borderColor = 'black'
            textElement.value = ""
        }else{
            textElement.style.borderColor = 'red'
        }
    }   
})


const delete_all = document.querySelector(".delete-all")
const item = document.querySelectorAll(".item")

// delete_all.addEventListener("click", function(){
//     let items_del = document.querySelector(".items-container")
//     items.classList.add("delete-item")
//     const children = Array.from(items.children)
//     console.log(children)
//     items.remove(items_del)

// })

