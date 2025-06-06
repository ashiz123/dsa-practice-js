let total_space = 100;
let vehicle_in_parking = ['lc62pvk', 'jk123rt', 'asd12ty', 'jkl128iop', 'mnn23wer']
let number_of_vehicles = vehicle_in_parking.length;
let vehicle = 'jk123rt';

let available_space = total_space - number_of_vehicles;



function add_vehicle_in_parking(vehicle_number, vehicle_in_parking)
{
     vehicle_in_parking.push(vehicle_number);
     console.log (vehicle_in_parking);
}

function remove_vehicle_from_parking(vehicle, vehicle_in_parking)
{
    //Creating new array, data immutable, 
//    let newArr = [];
//     newArr = vehicle_in_parking.filter(v => v.toString() !== vehicle);
//     console.log (newArr);

    //Altered same array,no data immutable, 
    let getIndex = vehicle_in_parking.indexOf(vehicle);
    vehicle_in_parking.splice(getIndex, 1);
    console.log(vehicle_in_parking);
}

remove_vehicle_from_parking(vehicle, vehicle_in_parking)

