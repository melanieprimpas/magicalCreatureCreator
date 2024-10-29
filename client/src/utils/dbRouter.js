export const retrieveCreatures = async () => {
    try {
        const response = await fetch('/api/creatures', {
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
        const response = await fetch('/api/habitats', {
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

export const retrieveabilities = async () => {
    try {
        const response = await fetch('/api/abilities', {
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
export const postCreature = async (creature) => {
    try {
        const response = await fetch('api/creatures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(creature),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Creature added:', data);
    } catch (error) {
        console.error('Error posting creature:', error);
    }
};