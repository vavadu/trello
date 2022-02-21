import getStatuses from '../requests/getStatuses';
import { useQuery } from 'react-query';


function useStatuses() {
    const { data, isLoading } = useQuery('statuses', getStatuses);
    return { data: data ? data.data : [], isLoading }
}

export default useStatuses;