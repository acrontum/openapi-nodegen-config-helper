const self = {
  /**
   * Casts to boolean or number values of input strings
   */
  returnValue: (value) => {
    if (value === 'true') {
      return true
    }
    if (value === 'false') {
      return false
    }
    if (!isNaN(value)) {
      return Number(value)
    }
    if (value === 'undefined') {
      return undefined
    }
    if (value === 'null') {
      return null
    }
    if (typeof value === 'string') {
      try {
        return JSON.parse(/^(TRUE|FALSE)$/.test(value)? value.toLocaleLowerCase(): value)
      } catch (e) {
        if (value === '\'false\'' || value === '"false"') {
          return 'false'
        }
        if (value === '\'true\'' || value === '"true"') {
          return 'true'
        }
        return value
      }
    }
    return value
  },

  /**
   * Ensures that the given string representation of the envVar exists.
   * @param environmentVariable
   * @returns {string | number | boolean}
   */
  required: (environmentVariable) => {
    const value = process.env[environmentVariable]
    if (!value) {
      console.error(`
Required environment variable ${environmentVariable} is not defined.

During development, you can configure all environment variables by
placing an .env file into the project root, with lines of the form
VARIABE=VALUE. You can use the provived .env-example as a template.
`)
      process.exit(1)
    }
    return self.returnValue(value)
  },

  /**
   * Ensures the env variable is set, else defaults to a provided default
   * @param environmentVariable
   * @param defaultValue
   * @returns {string | any | *}
   */
  withDefault: (environmentVariable, defaultValue) => {
    return process.env[environmentVariable] ? self.returnValue(process.env[environmentVariable]):defaultValue
  }
}

module.exports = self
