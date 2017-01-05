export * from './displayCreators.js';
export * from './emailCreators.js';
export * from './navigation.js';
import { push } from 'react-router-redux';

export function pageChange(dest) {
  if (!dest) {
    return push('/');
  }
  return push(`/${dest}`);
}
