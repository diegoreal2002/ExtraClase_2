"use strict";

const btnInscribirme = document.getElementById("btn-inscribirse");
const articleToggle = document.getElementById("article-toggle");
const headerImage = document.getElementById("header-img");

let textHTML = `<form action="" class="p-4 rounded" id="form-register">
                    <h3 id="form-register-h3">Formulario de Registro</h3>
                    <div>
                        <span>Nombres</span>
                        <input type="text">
                        <span>Apellidos</span>
                        <input type="text">
                    </div>
                    <div>
                        <div>Cedula</div>
                        <input type="number">
                    </div>
                    <div>
                        <div>Email</div>
                        <input type="text">
                    </div>
                    <div>
                        <div>Telefono</div>
                        <input type="text">
                    </div>
                    <input type="submit" value="Registrar" class="mt-2" id="form-submit">
                </form>`;

btnInscribirme.addEventListener("click",()=>{
    articleToggle.innerHTML = textHTML;
})
headerImage.addEventListener("click",()=>{
    articleToggle.innerHTML = `<h1 class="text-center">Bienvenido a nuestros servicios clinicos!</h1>`;
})



