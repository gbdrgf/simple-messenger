import {defineStore} from 'pinia';
import {fetchConversation, sendMessage} from '@/api';

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        messages: [] as any[],
    }),
    actions: {
        async loadMessages() {
            try {
                this.messages = await fetchConversation();
            } catch (error) {
                console.error('Failed to load messages:', error);
            }
        },

        async sendNewMessage(content: string, user: { id: number; firstName: string; lastName: string; thumbnail: string }) {
            const newMessage = {
                from: user,
                message: content,
                date: new Date().toISOString(),
            };
            const sentMessage = await sendMessage(newMessage);
            this.messages.push(sentMessage);
        },
    },
});
