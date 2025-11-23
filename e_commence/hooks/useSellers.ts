import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

export function useSellers() {
  return useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await api.get('/users/top-sellers');
      return res.data;
    }
  });
}
