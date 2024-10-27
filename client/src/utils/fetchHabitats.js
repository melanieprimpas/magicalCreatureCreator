import { retrieveHabitats } from './dbRouter';

export const fetchHabitats = async (setHabitats) => {
  try {
    const response = await retrieveHabitats();
    const habitatsArray = [];
    const habitatsURLArray = [];

    response.forEach((data) => {
      habitatsArray.push(data.name);
      habitatsURLArray.push(data.habitat_url);
    });
    console.log(habitatsArray);
    setHabitats(habitatsArray); // Set habitats state

    return { habitatsArray, habitatsURLArray };

  } catch (error) {
    console.error('Error fetching habitats:', error);
  }
};