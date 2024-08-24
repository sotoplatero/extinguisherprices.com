import { Deta } from 'deta'; // import Deta
import {DETA_PROJECT_KEY} from '$env/static/private';

const deta = Deta(DETA_PROJECT_KEY);

// This how to connect to or create a database.
export const table = (name: string) => deta.Base(name);