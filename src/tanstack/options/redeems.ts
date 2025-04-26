import { getRedeems } from '@/lib/api';

export const redeemsOptions = () => {
  return {
    queryKey: ['redeems'],
    queryFn: () => getRedeems(),
  };
};
