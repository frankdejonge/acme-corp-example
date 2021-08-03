import { isEven } from '@acme-corp/is-even';

export function isOdd(i: number): boolean {
    return isEven(i) === false;
}
