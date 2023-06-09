import { changeContactSelection } from "./changeContactSelection.js";

export function newContactAdd(itemForAppend) {
    if (itemForAppend.querySelectorAll(".new_contact_field").length == 5) {
        document.querySelector(".mnc_title").innerHTML = `
            <span style = "color: red; font-size: 1.6vh;">Вы не можете добавить более пяти контактов!</span>
        `

        setTimeout(() => {
            document.querySelector(".mnc_title").innerHTML = "Добавление клиента";
        }, 1000)
        
        return
    }

    let newContact = document.createElement("div");
    newContact.classList.add("new_contact_field")
    newContact.innerHTML = `
        <div class = "dropdown_menu_contact">
            <select>
                <option>Телефон</option>
                <option>Email</option>
                <option>Facebook</option>
                <option>VK</option>
                <option>Другое</option>
            </select>
        </div>
        <div class = "contact_add_input">
            <input placeholder = "Введите значение">
        </div>
        <div class = "cancel_new_contact">
            <i class="fa-regular fa-circle-xmark"></i>
        </div>
    `

    itemForAppend.append(newContact);

    newContact.children[2].addEventListener("click", () => {
        newContact.remove()
    })

    changeContactSelection();
}
