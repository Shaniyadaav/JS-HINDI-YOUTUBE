const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);


//spread method
const allnewheros = [...marvel_heros,...dc_heros]
//console.log(allnewheros);


const anotherarray = [1,2,3,[4,5,6][7,8,9]]
const realanotherarray = anotherarray.flat(Infinity)
//console.log(realanotherarray);


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))

