import { useEffect, useState } from 'react';

export const useFetcher = <T>(fetcher: (...props: unknown[]) => Promise<T>) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetcher()
            .then((res) => {
                setData(res);
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    },[])

    return {
        isLoading,
        error,
        data
    };
}