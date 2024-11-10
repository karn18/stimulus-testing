import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    coverage: {
      provider: 'v8'
    },
    environment: 'happy-dom'
  }
})
