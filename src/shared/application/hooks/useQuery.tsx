import { useLocation } from 'react-router-dom';

export const useQuery = (param: string): string | null => {
    const search = new URLSearchParams(useLocation().search);
    return search.get(param);
};

export default { useQuery };