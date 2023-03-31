/**--------------------------------------------------------------------------------------------*/
/**------------------------------- EJERCICIO 1 */
/**------------------------------- Crear funcion que retorne si una fecha es mayor a otra */
/**--------------------------------------------------------------------------------------------*/
let DATES = []
DATES[0] = new Date('2023/09/07 10:02:01')
DATES[1] = new Date('2023-05-08 11:03:01')

function setDateToOnlyDate(date = new Date()) {
    date.setHours(0, 0, 0, 0)
}

function compareDates({ firstDate = new Date(), secondDate = new Date() }) {
    setDateToOnlyDate(firstDate)
    setDateToOnlyDate(secondDate)

    let milisegundos = [
        firstDate.getTime(),
        secondDate.getTime()
    ]

    if (milisegundos[0] == milisegundos[1]) console.log('Are equal')
    else if (milisegundos[0] < milisegundos[1]) console.log(`Is less ${firstDate}`)
    else console.log(`Is greater ${firstDate}`)
}

compareDates({ firstDate: DATES[0], secondDate: DATES[1] })

/**--------------------------------------------------------------------------------------------*/
/**------------------------------- EJERCICIO 2 */
/**------------------------------- Formatear fecha a AÑO-MES-DIA */
/**--------------------------------------------------------------------------------------------*/
// ------------ OPCIÓN 1:
function formatYYYYMMD(textDate = '') {
    let date = new Date(textDate)
    console.log(date)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDay()

    return `${year}-${month}-${day}`
}

let formatedDate = formatYYYYMMD('30/03/2023')
console.log(formatedDate)

