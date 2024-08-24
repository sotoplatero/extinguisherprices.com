import type { PageLoad } from './$types';
import { table } from '$lib/deta';

export const load: PageLoad = async () => {
 
      try {

        const {items: products} = await table('products').fetch() ?? []
        return { products };

      } catch (error) { 
        console.log(error); 
      }

      return { products: [] };

};