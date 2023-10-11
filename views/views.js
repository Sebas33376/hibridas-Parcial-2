import * as utils from "../pages/utils.js"

function createProyectsList(proyects, tituleSection) {

    let titule = "Proyectos";

    switch (tituleSection) {
        case "mobile":
            titule = "Mobile"
            break;
        case "landing":
            titule = "Landing Page"
            break;
        case "webapp":
            titule = "Web App"
            break;
        case "ecommerce":
            titule = "e-Commerce"
            break;
        case "game":
            titule = "Games"
            break;

        default:
            break;
    }

    let html = "";

    html += "<ul class=' px-0 d-flex flex-column align-items-center justify-content-center '>"
    html += `<li class="text-center mb-5"><a type="button" class="text-center text-light btn btn-primary text-center fs-3"  href="/proyects/agregar">Nuevo Proyecto</a></li>`

    for (const proyect of proyects) {
        html += `<li class="d-flex justify-content-evenly align-items-center w-75" > <a class="fs-5 text-dark" href='/proyects/${proyect._id}'> ${proyect.name} / Cliente: ${proyect.client}</a>` +
            `<a type="button" class="btn btn btn-success my-2 mx-3" href="/proyects/editar/${proyect._id}">Editar</a>` +
            `<a type="button" class="btn btn-danger my-2 mx-3" href="/proyects/eliminar/${proyect._id}">Eliminar</a> </li>`
    }

    html += "</ul>"

    return utils.createPageProyects(titule, html);
}

function createClientsList(clients) {

    let html = "";

    html += "<ul class=' px-0 d-flex flex-column align-items-center justify-content-center '>"
    html += `<li class="text-center mb-5"><a type="button" class="text-center text-light btn btn-primary text-center fs-3"  href="/client/agregar">Nuevo Cliente</a></li>`

    for (const client of clients) {
        html += `<li class="d-flex justify-content-center align-items-center w-75" > <a class="fs-5 text-dark" href='/client/${client._id}'> ${client.name}</a>` +
            `<a type="button" class="btn btn btn-secondary my-2 mx-3" href='/client/${client._id}/proyectsClient?client=${client.name}'>Proyectos</a>` +
            `<a type="button" class="btn btn btn-success my-2 mx-3" href="/client/editar/${client._id}">Editar</a>` +
            `<a type="button" class="btn btn-danger my-2 mx-3" href="/client/eliminar/${client._id}">Eliminar</a> </li>`
    }

    html += "</ul>"

    return utils.createPageClients("Clientes", html);
}

function createProyectById(proyect) {

    let html = ` <div class="d-flex flex-column w-50 m-auto align-items-center">
        <p>${proyect.description}</p>` +
        `<a class="m-2" href="${proyect.link}">${proyect.link}</a>` +
        `<img src="${proyect.img}" alt="${proyect.name}">` +
        `<ul class="d-flex justify-content-between p-0 mt-3">`;

    for (const technologies of proyect.technologies) {
        html += `<li class="mx-2">${technologies}</li>`
    }

    html += `</ul>`


    html += "<ul class='d-flex flex-column align-items-center p-0'>"
    html += `<li><a class="btn btn-success mb-2 mt-5" href="/proyects/editar/${proyect._id}">Editar</a></li>` +
        `<li><a class="btn btn-danger" href="/proyects/eliminar/${proyect._id}">Eliminar</a> </li>`

    html += "</ul></div>"

    return utils.createPageProyects(proyect.name, html);
}

function createClientById(client) {

    let html = `<div class="d-flex justify-content-center align-items-center">
    <img class="rounded-circle mx-2" src="${client.img}" alt="${client.name}">
     <p> ${client.description} </p>`;


    html += "<ul class='d-flex'>"

    html += `<li><a type="button" class="mx-2 btn btn btn-secondary" href='/client/${client._id}/proyectsClient?client=${client.name}'>Proyectos</a></li>
        <li><a class="mx-2 btn btn btn-success" href="/client/editar/${client._id}">Editar</a></li>
        <li><a class="mx-2 btn btn-danger" href="/client/eliminar/${client._id}">Eliminar</a> </li>`;

    html += "</ul></div>"

    return utils.createPageClients(client.name, html);
}

function createProyectForm() {

    let html = "";
    html += '<form class=" d-flex flex-column w-50 m-auto" action="/proyects/agregar" method="POST">' +
        '<input class="my-2 p-2" type="text" name="name" placeholder="Nombre">' +
        '<input class="my-2 p-2" type="text" name="description" placeholder="Descripción">' +
        '<input class="my-2 p-2" type="text" name="link" placeholder="Link del proyecto">' +
        '<input class="my-2 p-2" type="text" name="img" placeholder="Imagen">' +
        '<input class="my-2 p-2" type="text" name="technologies" placeholder="Tecnologias(ej: php, Javascript, Node.js)">' +
        '<input class="my-2 p-2" type="text" name="section" placeholder="Sección">' +
        '<input class="my-2 p-2" type="text" name="client" placeholder="Cleinte">' +
        '<button type="submit" class=" py-2 mb-5 mt-3 btn btn-success">Crear</button>' +
        "</form>";

    return utils.createPageProyects("Nuevo proyecto", html);
}

function createClientForm() {

    let html = "";
    html += '<form class=" d-flex flex-column w-50 m-auto" action="/client/agregar" method="POST">' +
        '<input class="my-2 p-2" type="text" name="name" placeholder="Nombre">' +
        '<input class="my-2 p-2" type="text" name="img" placeholder="Imagen">' +
        '<input class="my-2 p-2" type="text" name="description" placeholder="Descripción">' +
        '<button type="submit" class=" py-2 mb-5 mt-3 btn btn-success">Crear</button>' +
        "</form>";

    return utils.createPageClients("Nuevo Cliente", html);
}

function editProyectForm(proyects) {
    let html = "";
    html += `<form class=" d-flex flex-column w-50 m-auto"  action="/proyects/editar/${proyects._id}" method="POST">` +
        `<input type="text" class="my-2 p-2"  name="name" value="${proyects.name}">` +
        `<input type="text" class="my-2 p-2" name="description" value="${proyects.description}">` +
        `<input type="text" class="my-2 p-2" name="link" value="${proyects.link}">` +
        `<input type="text" class="my-2 p-2" name="img" value="${proyects.img}">` +
        `<input type="text" class="my-2 p-2" name="technologies" value="${proyects.technologies}">` +
        `<input type="text" class="my-2 p-2" name="section" value="${proyects.section}">` +
        `<input type="text" class="my-2 p-2" name="client" value="${proyects.client}">` +
        `<button type="submit" class="py-2 mb-5 mt-3 btn btn-success">Editar</button>` +
        "</form>";

    return utils.createPageProyects("Editar proyecto", html);
}

function editClientForm(client) {

    let html = "";
    html += `<form class=" d-flex flex-column w-50 m-auto" action="/client/editar/${client._id}" method="POST">` +
        `<input class="my-2 p-2" type="text" name="name" value="${client.name}">` +
        `<input class="my-2 p-2" type="text" name="img" value="${client.img}">` +
        `<input class="my-2 p-2" type="text" name="description" value="${client.description}">` +
        `<button type="submit" class=" py-2 mb-5 mt-3 btn btn-success">Editar</button>` +
        "</form>";

    return utils.createPageClients("Nuevo Editar", html);
}

function confirmProyectById(proyect) {
    let html = "";
    html += `<form action="/proyects/eliminar/${proyect._id}" method="POST">` +
        `<p>${proyect.description}</p>` +
        `<a href="${proyect.link}">${proyect.link}</a>` +
        `<img src="${proyect.img}" alt="${proyect.name}">` +
        `<ul>`;

    for (const technologies of proyect.technologies) {
        html += `<li>${technologies}</li>`
    }

    html += `</ul>` +
        `<button type="submit" class="btn btn-danger">Eliminar</button>` +
        "</form>";

    return utils.createPageProyects("Eliminar proyecto", html);
}

function deletClientForm(client) {
    let html = `<form class="d-flex justify-content-center align-items-center" action="/client/eliminar/${client._id}" method="POST">
    <img class="rounded-circle mx-2" src="${client.img}" alt="${client.name}">
     <p> ${client.description} </p>`;

    html += `<button type="submit" class="btn btn-danger mx-2 ">Eliminar</button>`;

    html += "</form>"

    return utils.createPageClients(client.name, html);
}

function createClientProyects(clientProyects) {
    let html = "<div class='d-flex flex-column justify-content-center align-items-center'>"

    for (const client of clientProyects) {

        html += `<ul>`
        
        for (const proyects of client.proyects) {
            html += `<li><a class="fs-4 text-dark" href="/proyects/${proyects._id}">${proyects.name}</a></li>`
        }
    
        html += `</ul>`
        html += "</div>"
        return utils.createPageClients(client.clientName, html);
    }

}

export {
    createProyectsList,
    createProyectById,
    createProyectForm,
    editProyectForm,
    confirmProyectById,
    createClientsList,
    createClientById,
    createClientForm,
    editClientForm,
    deletClientForm,
    createClientProyects
}