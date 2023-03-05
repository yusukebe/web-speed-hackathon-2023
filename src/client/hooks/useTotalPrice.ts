import { useEffect, useState } from 'react';

import type { OrderFragmentResponse } from '../graphql/fragments';
import { getActiveOffer } from '../utils/get_active_offer';

export function useTotalPrice(order: OrderFragmentResponse) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const timer = setImmediate(() => {
      let total = 0;
      for (const item of order.items) {
        const offer = getActiveOffer(item.product.offers);
        const price = offer?.price ?? item.product.price;
        total += price * item.amount;
      }
      setTotalPrice(total);
    });
    clearImmediate(timer);
  }, [order]);

  return { totalPrice };
}
