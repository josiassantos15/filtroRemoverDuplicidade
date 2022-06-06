// Exemplo 1
const arrayExemple = [
			{
				"id": "1",
				"nome": "God of war",
				"Age": "30"
			},
			{
				"id": "2",
				"nome": "Leon Resident",
				"Age": "33"
			},
	      		{
				"id": "1",
				"nome": "God of war",
				"Age": "30"
			}]

  const ids = arrayExemple.map(item => item.id)
  const arrayFiltered = arrayExemple.filter(({id}, index) => !ids.includes(id, index + 1))

  console.log(arrayFiltered)


// Exemplo 2
const arrayExemple = ['Blue', 'Red', 'Pink', 'Blue'];

const ArrayFiltered = [...new Set(arrayExemple)];

console.log(ArrayFiltered); 

// ['Blue', 'Red', 'Pink']


const result = [
	{
		"id": "0",
		"name": "ADAM OLIVEIRA CAMPOS",
		"age": "30"

	},
	{
		"id": "1",
		"name": "ADAMILSON SILVA DE OLIVEIRA",
		"age": "25"
	},
	{
		"id": "5",
		"name": "ADILSON PEREIRA DE OLIVEIRA",
		"age": "46"
	}
]
const newArray = result.filter(
        item => item.id !== '0' && item.id !== '1' )

console.log(newArray)
// [{
// 	"id": "5",
// 	"name": "ADILSON PEREIRA DE OLIVEIRA",
// 	"age": "46"
// }]
