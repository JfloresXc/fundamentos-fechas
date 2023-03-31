
/**--------------------------------------------------------------------------------------------*/
/**--------------------------------------------------------- OBJETO DATE*/
/**--------------------------------------------------------------------------------------------*/
new Date() // Obtiene la fecha del momento actual.
new Date(str) // Convierte el texto con formato YYYY/MM/DD HH:MM:SS a una fecha.
new Date(numero) //	Convierte el número (en formato Tiempo UNIX) a una fecha UTC.
new Date(y, m, d, h, min, s, ms) // Crea una fecha UTC a partir de componentes numéricos.

// Estas tres operaciones son equivalentes
let date = Date.now();
date = +new Date();
date = new Date().getTime();

// Estas tres operaciones son equivalentes
date = Date.parse("2018/10/30");
date = +new Date("2018/10/30");
date = new Date("2018/10/30").getTime();

let date2 = new Date(2021, 0, 30);
date2.toString();           // "Sat Jan 30 2021 00:00:00 GMT+0000 (hora estándar...)"
date2.toDateString();       // "Sat Jan 30 2021"
date2.toGMTString();        // "Sat, 30 Jan 2021 00:00:00 GMT"
date2.toISOString();        // "2021-01-30T00:00:00.000Z"
date2.toLocaleDateString(); // "30/1/2021"


/**--------------------------------------------------------------------------------------------*/
/**--------------------------------------------------------- FORMATEAR FECHAS MIDUDDEV*/
/**--------------------------------------------------------------------------------------------*/
const format = (date, locale = 'es', options) =>
    new Intl.DateTimeFormat(locale, options).format(date)

let DATES = []
const now = new Date('2023-03-30 12:47:46')
console.log('INSERTED DATE', now)

DATES[0] = format(now, 'es')
/**
 * timeStyle: OPTIONS (short - medium - long - full)
 *  Sirve para mostrarte la hora de la fecha ingresada formateada
 */
DATES[1] = format(now, 'es', { timeStyle: 'short' })

/**
 * dateStyle: OPTIONS (short - medium - long - full)
 *  Sirve para mostrarte la fecha ingresada formateada
 */
DATES[2] = format(now, 'es', { dateStyle: 'full' })

/**
 * weekday: OPTIONS (short - long)
 * year: OPTIONS (numeric - 2-digits)
 *  Sirve para mostrarte el día de la semana, el día y el año, así como poder agregar más opciones
 */
DATES[3] = format(now, 'es', { weekday: 'short', day: 'numeric', year: 'numeric' })

DATES.forEach(dateKey => console.log(dateKey))