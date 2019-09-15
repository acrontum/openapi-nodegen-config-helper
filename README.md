# openapi-nodegen-config-helper

Used within the openapi-nodegen to ensure environment variables are set or if not with a default value.

## Available helpers

Method: withDefault
```
import ConfigHelper from 'openapi-nodegen-config-helper';
ConfigHelper.withDefault('SWAGGER_FILE', 'latest')
```

Method: required
```
import ConfigHelper from 'openapi-nodegen-config-helper';
ConfigHelper.required('JWT_SECRET')
```

## Example
```typescript
import dotenv from 'dotenv';
import ConfigHelper from 'openapi-nodegen-config-helper';

dotenv.config();

/* tslint:disable */
export default {
  // Swagger file
  swaggerFile: ConfigHelper.withDefault('SWAGGER_FILE', 'latest'),
  jwtSecret: ConfigHelper.required('JWT_SECRET'),
}
/* tslint:enable */

```
