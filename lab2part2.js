"use strict";
class AddressBook {
  constructor() {
    this.contacts = [
      { name: "Adam", email: "adam@grandcircus.co", phone: "111-222-3333", relation: "friend" },
      { name: "Shelly", email: "shelly@grandcircus.co", phone: "111-222-3333", relation: "family" },
      { name: "David", email: "david@grandcircus.co", phone: "111-222-3333", relation: "family" },
      { name: "Bob", email: "bob@grandcircus.co", phone: "111-222-3333", relation: "friend" },
      { name: "Megan", email: "megan@grandcircus.co", phone: "111-222-3333", relation: "friend" },
      { name: "Julie", email: "julie@grandcircus.co", phone: "111-222-3333", relation: "coworker" },
      { name: "Jon", email: "jon@grandcircus.co", phone: "111-222-3333", relation: "coworker" }
    ];
  }
  add() {
    const info = {
      name: document.querySelectorAll(".contact__input")[0].value, 
      email: document.querySelectorAll(".contact__input")[1].value, 
      phone: document.querySelectorAll(".contact__input")[2].value, 
      relation: document.querySelectorAll(".contact__input")[3].value
    };
    const newContact = new People(info.name, info.email, info.phone, info.relation);
    addressBook.contacts.push(newContact);
    this.display();
  }
  delete(e) {
    addressBook.contacts.splice(e.target.parentElement.parentElement.getAttribute("data-index"), 1);
    addressBook.display();
  }
  display() {
    document.querySelector(".contact__list").innerHTML = "";
    let count = 0;
    for (let person of this.contacts) {
      const newEntry = document.createElement("section");
      console.dir(newEntry);
      newEntry.setAttribute("data-index", count);
      newEntry.classList.add("contact__box");
      newEntry.innerHTML = `
      <ul class="contact__box__data">
        <li>Name: ${person.name}</li> 
        <li>Email: ${person.email}</li>
        <li>Phone: ${person.phone}</li>
        <li>Relation: ${person.relation}</li>
      </ul>
      <button type="button" class="contact__delete"><i class="material-icons">&#xE872;</i></button>
      `;
      document.querySelector(".contact__list").appendChild(newEntry);
      count++;
    }
    for (let i = 0; i < addressBook.contacts.length; i++) {
      document.querySelectorAll(".contact__delete")[i].addEventListener("click", addressBook.delete);
    }
  }
}

class People {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.display();