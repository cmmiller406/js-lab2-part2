"use strict";

class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("bob", "bob@bob.com", "111", "weird neighbor"),
            new Contact("steve", "steve@bob.com", "111", "uncle"),
            new Contact("sally", "sally@bob.com", "111", "mom"),
        ]
    }
    add() {
        this.contacts.push();
    }
    deleteAt() {
        this.contacts.splice(index, 1);
    }
    display() {
        this.contacts.push();
    }
};

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
};

const book = new AddressBook();

// add new contact

const add = () => {
    document.querySelector("btn").addEventListener("click", () => {
        const inputs = document.querySelectorAll("forminput");
        contacts.push({
            name: inputs[0].value,
            email: inputs[1].value,
            phone: input[2].value,
            relations: input[3].value,
        });
    });
    book.add(new Contact(name, email, phone, relation));
    add();
};

// delete contact
const deleteAt = () => {
    const domContainer = document.querySelector(".dom-container");
    document.querySelector("trash").addEventListener("click", () => {
    domContainer.removeChild(p);
    });
};

// display
const display = () => {
    const domContainer = document.querySelector(".dom-container");
    const addButton = document.getElementById("btn");
    domContainer.innerHTML = "";
    addButton.addEventListener("click", () => {
        for (let contact of book.contacts) {
            const p = document.createElement("p");
            p.innerText = `Name:${book.name} Email:${book.email} Phone:${book.phone} Relation:${book.relation}`;
            domContainer.appendChild(p);
            const trash = document.createElement("div");
            trash.innerText = ``;
            domContainer.appendChild(trash);
        };
    });
};
display();

document.addEventListener("load", () => {
    display();
});