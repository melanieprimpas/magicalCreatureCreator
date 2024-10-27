export const retrieveCreatures = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/creatures', {
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const data = await response.json();
        
            if(!response.ok) {
            throw new Error('invalid database API response, check network tab!');
            }
            return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return [];
    }
}

export const retrievehabitats = async () => {

    try {
        const response = await fetch('http://localhost:3001/api/habitats', {
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const data = await response.json();
        
            if(!response.ok) {
            throw new Error('invalid database API response, check network tab!');
            }
            return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return [];
    }
