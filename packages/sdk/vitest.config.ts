import { defineConfig, mergeConfig } from 'vitest/config'
import { rootConfig } from '../../vitest.config.mjs'

export default mergeConfig(
    rootConfig,
    defineConfig({
        test: {
            environment: 'happy-dom',
            name: 'multi',
            env: {
                RIVER_ENV: 'local_multi',
            },
            include: ['./src/tests/multi/**/*.test.ts', './src/tests/multi_v2/**/*.test.ts'],
            hookTimeout: 120_000,
            testTimeout: 120_000,
            setupFiles: './vitest.setup.ts',
        },
        resolve: {
            conditions: ['browser'],
            alias: {
                '@connectrpc/connect-node': '@connectrpc/connect-web',
            },
        },
    }),
)
