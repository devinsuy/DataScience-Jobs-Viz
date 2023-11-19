type LogLevel = 'debug' | 'info' | 'warn' | 'error'
type Environment = 'development' | 'production' | 'test'

// This custom logger is a wrapper around the native console.logLevel()
// intended to prevent log leakage in prod setting
const createLogger = (environment: Environment) => {
  const allowedLevels = new Set<LogLevel>(['debug', 'info', 'warn', 'error'])

  // Mask logs in prod env
  const shouldLog = (level: LogLevel) => environment === 'development' && allowedLevels.has(level)

  const log = (level: LogLevel, message: string) => {
    if (shouldLog(level)) {
      const timestamp = new Date().toISOString()
      console[level](`[${timestamp}][${level.toUpperCase()}]: ${message}`)
    }
  }

  const debug = (message: string) => { log('debug', message) }

  const info = (message: string) => { log('info', message) }

  const warn = (message: string) => { log('warn', message) }

  const error = (message: string) => { log('error', message) }

  return {
    debug,
    info,
    warn,
    error,
  }
}

// Reuse a shared singleton instance
const nodeEnv: Environment = process.env.NODE_ENV || 'production'
export const Logger = createLogger(nodeEnv)
