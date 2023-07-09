localStorage.setItem("nombre", "Yan")
localStorage.setItem("apellido", "Machado")
localStorage.setItem("persona", JSON.stringify({ nombre: "Carlos", apellido: "Machado"}))
sessionStorage.setItem("persona", JSON.stringify({ nombre: "Carlos", apellido: "Machado"}))
document.cookie = "nombreCaducidad=nombre; expires=" +  new Date(2023, 6, 9).toUTCString();
