import { conversation, currentUser } from '@/api/mockapi';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulate a 10% failure rate for API calls
const simulateRandomFailure = () => {
    if (Math.random() < 0.1) {
        throw new Error('Simulated network error');
    }
};

export const fetchCurrentUser = async () => {
    await delay(500); // Simulate network delay
    return JSON.parse(currentUser);
};

export const fetchConversation = async () => {
    await delay(500); // Simulate network delay
    return JSON.parse(conversation);
};

export const sendMessage = async (message: any) => {
    await delay(500); // Simulate network delay
    simulateRandomFailure(); // Simulate possible failure
    return {
        ...message,
        id: Date.now(),
        date: new Date().toISOString(),
    }; // Return the simulated new message
};
