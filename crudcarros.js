let vehicles=[
    {
    id: 1,
    marca: 'mazda',
    modelo: '3',
    color: 'negro',
    año: '2020',
    precio: '2.000.000',
},
{   id: 2,
    marca: 'mazda',
    modelo: '6',
    color: 'rojo',
    año: '2019',

    precio: '22.000.000',
}
]
let edit = 0;
function TableVehicles(){

    const bodytable = document.getElementById('body-table-users')
    bodytable.innerHTML = '';
    console.log(bodytable)
   vehicles.forEach((u)=>{
      
        row =`<tr>
              <td>${u.marca}</td>
              <td>${u.modelo}</td>
              <td>${u.color}</td>
              <td>${u.año}</td>
              <td>${u.precio}</td>
              <td>
                            <button class="btn btn-danger" onclick="removeUser(${u.id})">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="editUserButton(${u.id})">
                                Editar
                            </button>
                        </td>
            </tr>
             `
        bodytable.innerHTML +=row;1}
       
    )
   }
    function removeUser(id) {
        const position = vehicles.findIndex((vehicle) => vehicle.id === id);
        console.log(position)
        vehicles.splice(position, 1);
        TableVehicles();
    }

function  addEditUser() {
    if(edit===0){
    const bodytable = document.getElementById('body-table-users')
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value; 
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
   
    // Creo un nuevo usuario que es un objeto
    const newCar = {
    id: vehicles.length + 1,
    marca: marca,
    modelo: modelo,
    color: color,
    año: año,
    precio: precio,
    
    }
    // Agrego el usuario creado al array que tiene todos los usuarios
    vehicles.push(newCar);
    // imprimo nuevamente a todos los usuarios
    TableVehicles()
    cleanForm()
    }
    else {
        const marca = document.getElementById('marca').value;
        editingVehicle.marca = marca
        const modelo = document.getElementById('modelo').value;
        editingVehicle.modelo = modelo
        const color = document.getElementById('color').value;
        editingVehicle.color = color
        const año = document.getElementById('año').value;
        editingVehicle.año = año
        const precio = document.getElementById('precio').value;
        editingVehicle.precio = precio
       edit=0;
       console.log()
       TableVehicles()
       cleanForm()
    }
}
    
    function editUserButton(id) {
    const vehicle = vehicles.find((vehicle) => vehicle.id === id);
    document.getElementById('marca').value = vehicle.marca;
    document.getElementById('modelo').value = vehicle.modelo;
    document.getElementById('color').value = vehicle.color; 
    document.getElementById('año').value = vehicle.año;
    document.getElementById('precio').value = vehicle.precio;
        editingVehicle = vehicle;
        edit = 1;
        
    }

    function cleanForm(){
        document.getElementById('marca').value = '';
        document.getElementById('modelo').value ='';
         document.getElementById('color').value ='';
           document.getElementById('año').value ='';
        document.getElementById('precio').value ='';
    }

    TableVehicles()