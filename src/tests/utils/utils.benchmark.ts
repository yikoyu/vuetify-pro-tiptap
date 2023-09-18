/**
 * @file This can be run via pnpm test:bench
 * Current results:
 * name                                         hz          min     max    mean     p75     p99    p995    p999     rme  samples
 *    · Benchmark getUnitWithPxAsDefault   6,436,031.45  0.0000  5.7799  0.0002  0.0002  0.0003  0.0004  0.0017  ±4.75%  3218016   slowest
 *    · Benchmark clamp                   10,475,906.12  0.0000  1.0279  0.0001  0.0001  0.0002  0.0002  0.0004  ±0.83%  5237954
 *    · Benchmark isString                10,559,962.92  0.0000  3.3016  0.0001  0.0001  0.0002  0.0002  0.0004  ±2.19%  5279983   fastest
 *    · Benchmark isBoolean               10,386,902.12  0.0000  0.5997  0.0001  0.0001  0.0003  0.0003  0.0004  ±0.64%  5193452
 *    · Benchmark isFunction              10,228,311.97  0.0000  0.5956  0.0001  0.0001  0.0003  0.0004  0.0005  ±0.62%  5114164
 *
 *     Benchmark isFunction - src/tests/utils/utils.benchmark.ts > Benchmark utils
 *     1.06x faster than Benchmark isString
 *     1.07x faster than Benchmark isBoolean
 *     1.10x faster than Benchmark clamp
 *     1.35x faster than Benchmark getUnitWithPxAsDefault
 */
import { bench, describe } from 'vitest'

import { clamp, getUnitWithPxAsDefault, isBoolean, isFunction, isString } from '@/utils/utils'

describe('Benchmark utils', () => {
  bench('Benchmark getUnitWithPxAsDefault', () => {
    getUnitWithPxAsDefault('20')
  })

  bench('Benchmark clamp', () => {
    clamp(2, 2, 4)
  })

  bench('Benchmark isString', () => {
    isString(1)
  })

  bench('Benchmark isBoolean', () => {
    isBoolean(1)
  })

  bench('Benchmark isFunction', () => {
    isFunction('test')
  })
})
