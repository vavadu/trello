import { useQuery } from 'react-query';
import { api } from '../api';


function useStatuses() {
    const { data, isLoading } = useQuery('statuses', api.getStatuses);
    return { data: data ? data.data : [], isLoading }
}

export default useStatuses;