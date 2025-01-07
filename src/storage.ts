
const KEY = 'markedTrip';

export const getLocalStorageItem = (key: string): any => {
    if (typeof window === 'undefined') return [];
    const raw = window?.localStorage.getItem(key);
    if (raw) {
        try {
            const json = JSON.parse(raw);

            return json;
        } catch (e) {
            return [];
        }
    }
    return [];
};

export const setLocalStorageItem = (key: string, value: any) => {
    if (typeof window === 'undefined') return;
    window?.localStorage.setItem(key, JSON.stringify(value));
};
