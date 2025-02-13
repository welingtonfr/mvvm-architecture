import { useState } from 'react';

export const useMutation = <T>(mutationFetcher: (...props: unknown[]) => Promise<T>) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<T | null>(null);

    const mutation = async (...props: unknown[]) => {
        setIsLoading(true);
        return mutationFetcher(props)
            .then((res) => {
                setData(res);
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    };


    return { mutation, isLoading, error, data };
}