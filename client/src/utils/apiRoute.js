export const generateStory = async (creatureName, habitat) => {
    try {
        const response = await fetch(`/api/story`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ creatureName, habitat }),
        });

        const data = await response.json();
        if (response.ok) {
            return data.story; 
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        console.error('Error fetching story:', error);
        throw error;
    }
};