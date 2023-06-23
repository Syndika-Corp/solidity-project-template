/* For NPM package */

/* Export all addresses */
import * as lockAddress from './addresses/Lock.json';
export { lockAddress };

/* 
    Export all types
    @note Contract ABI is in the factory 
*/
export * from './typechain-types/index';
