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

const ArrayFiltered = [...new Set(array)];

console.log(ArrayFiltered); 

// ['Blue', 'Red', 'Pink']
