import type { PageLoad } from './$types';
import { table } from '$lib/deta';

export const load: PageLoad = async () => {
 
  const {items} = await table('products').fetch()

  const products = items ?? []

  return { products };

};