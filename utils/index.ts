export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "fde14106a3msh880ac6fa4eaa0e1p1f561fjsn7a1bd8f481ce",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
