function assoc<K extends string, T>(key: K, value: T) {
    return <O extends object>(obj: O) => ({
        ...obj,
        [key]: value,
    }) as K extends keyof O ? (Omit<O, K> & Record<K, T>) : (O & Record<K, T>)
}
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
