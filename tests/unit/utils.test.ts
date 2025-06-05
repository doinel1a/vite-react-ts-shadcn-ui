/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/no-useless-undefined */
import { describe, expect, it } from 'vitest';

import { isStringNullOrEmpty } from '@/lib/utils';

describe('isStringNullOrEmpty', () => {
  it('should return true for undefined', () => {
    expect(isStringNullOrEmpty(undefined)).toBe(true);
  });

  it('should return true for null', () => {
    expect(isStringNullOrEmpty(null)).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isStringNullOrEmpty('')).toBe(true);
  });

  it('should return true for whitespace-only string', () => {
    expect(isStringNullOrEmpty('   ')).toBe(true);
  });

  it('should return false for non-empty string', () => {
    expect(isStringNullOrEmpty('hello')).toBe(false);
  });

  it('should return false for string with non-whitespace characters around spaces', () => {
    expect(isStringNullOrEmpty('  world  ')).toBe(false);
  });
});
