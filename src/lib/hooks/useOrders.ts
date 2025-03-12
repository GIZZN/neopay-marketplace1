'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchOrders } from '../api/orders';

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  });
}; 