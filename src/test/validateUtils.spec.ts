import { test, expect, describe } from 'vitest'
import { validateFeild } from '../utils/validate-utils'

describe("test validate utils", () => {
    test("target is empty", () => {
        let target: string = '';
        const result = validateFeild(target, '');
        expect(result).toEqual(false);
    })
    test("target is null", () => {
        let target = null;
        const result = validateFeild(target, '');
        expect(result).toEqual(false);
    })
    test("target is not null", () => {
        let target: string = 'zdd@163.com';
        const result = validateFeild(target, '');
        expect(result).toEqual(true);
    })
})