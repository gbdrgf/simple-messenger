import {defineStore} from 'pinia';
import {fetchCurrentUser} from '@/api/index';

export const useUsersStore = defineStore('users', {
    state: () => ({
        currentUser: null as any,
    }),
    actions: {
        async loadCurrentUser() {
            try {
                this.currentUser = await fetchCurrentUser();
            } catch (error) {
                console.error('Failed to fetch current user:', error);
            }
        },
    },
});
