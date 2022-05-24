const [votos, setVotos] = useState([])

const [codigoMesa, setCodigoMesa] = useState('ADRIAN12')
const [puntos, setPuntos] = useState(parseInt(12))
const [cuenta, setCuenta] = useState(parseFloat(19.24))



//Recupera la info y la pasa como JSON
const getVotos = async () => {
    const respuesta = await axios.get('http://192.168.1.132/php/')
    setVotos(respuesta.data)
    //console.log(JSON.stringify(respuesta.data))
}


//Recupera el total de la cuenta por numero de mesa
const getTotalCuenta = (nMesa) => {
    var total = parseFloat(0)
    var f = votos.map((element, index) => {
        if (element.codigoMesa === nMesa) {
            total += parseFloat(element.cuenta)
        }
    })
    return total
    //console.log(total)
}




// function rellenaDatos(cm, c, p) {
//   setCodigoMesa(cm)
//   console.log(codigoMesa)
//   setCuenta(c)
//   console.log(cuenta)
//   setPuntos(p)
//   console.log(puntos)
// }


//Añade un registro
const addVoto = async () => {
    // rellenaDatos("ADRIAN12", 19.24, 12)
    const obj = { codigoMesa, puntos, cuenta }
    const respuesta = await axios.post('http://192.168.1.132/php/', obj)
    alert(respuesta.data.msg)
    getVotos()
    setCodigoMesa("")
    setCuenta(parseFloat(0))
    setPuntos(parseInt(0))
}