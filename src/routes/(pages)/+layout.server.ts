import type { LayoutServerLoad  } from './$types';
import { table } from '$lib/deta';

export const load: LayoutServerLoad  = async () => {
 
  const {items} = await table('products').fetch()

  const products = items ?? []

  return { products };

};