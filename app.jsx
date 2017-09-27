
const RowTable = (props) => {
  const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
  return (
     <tr>
        {_tds}
    </tr> 
  )
}

const RTable = ({seats}) => {
  return (
     <table id="tablaPasajes" align="center" border="2">
        <RowTable items = {seats[0]} />
        <RowTable items = {seats[1]} />
        <RowTable items = {seats[2]} />
        <RowTable items = {seats[3]} />
     </table>
  );
}
const App = ({title, seats}) => {
  return (
     <div>
        <RTable  seats = {seats} />

     </div>
  );
}

let seats = [
  [4, 8, 12, 16, 20, 24, 28, 32],
  [3, 7, 11, 15, 19, 23, 27, 31],
  [2, 6, 10, 14, 18, 22, 26, 30],
  [1, 5, 9, 13, 17, 21, 25, 29]
]

let passengers = [
  {
      Nombre: "Maria del Rosario",
      Apellido: "Palomino Begazo",
      DNI: 23452123,
      Numero_Asiento: 15
  },
  {
      Nombre: "Angela",
      Apellido: "Palomino Begazo",
      DNI: 23452125,
      Numero_Asiento: 14
  },
  {
      Nombre: "Lucas",
      Apellido: "Saltamontes",
      DNI: 654789321,
      Numero_Asiento: 1
  },
  {
      Nombre: "Zoila",
      Apellido: "Montes",
      DNI: 217698067,
      Numero_Asiento: 5
  },
  {
      Nombre: "Julian",
      Apellido: "Smith",
      DNI: 9870976131,
      Numero_Asiento: 12
  }

]


const getPassengerList = (passengers) => {
  return passengers.map((passenger, index) => {
      return (
          <li key={index}>
              <p>Nombre: {passenger.Nombre}</p>
              <p>Apeliido: {passenger.Apellido}</p>
              <p>DNI: {passenger.DNI}</p>
              <p># Asiento: {passenger.Numero_Asiento}</p>
              <hr lineColor='#b3b3b3' text='react-native' textColor='steelblue' />
          </li>

      );
  });
}

const Listpassengers = ({ passengers }) => {
  console.log("hola");
  return (
      <div className="listar text-center">
          <ul>{getPassengerList(passengers)}</ul>
      </div>
  );
}

ReactDOM.render(
  <Listpassengers
      passengers={passengers}
  />,
  document.getElementById("root")
);

ReactDOM.render ( 
  <App title = {'Hola Mundo!'}  seats = {seats} />, 
  document.getElementById("table")
); 
