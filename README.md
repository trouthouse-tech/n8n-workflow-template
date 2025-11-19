# n8n Workflow Template

Code-driven n8n workflow template with environment variable support.

## Structure

```
src/
  ├── types.ts         # TypeScript interfaces and environment config
  ├── config.ts        # Workflow name and settings
  ├── nodes.ts         # Node definitions
  ├── connections.ts   # How nodes connect to each other
  ├── workflow.ts      # Combines everything into workflow JSON
  └── index.ts         # Exports

generate.ts            # Script to generate workflow.json
package.json           # Dependencies
tsconfig.json          # TypeScript config
.env.example           # Environment variables template
```

## Files

### `src/types.ts`
Define your environment variables here:
```typescript
export interface WorkflowEnvironment {
  // Add your env vars
  apiToken?: string;
}
```

### `src/config.ts`
Set workflow name and settings:
```typescript
export const workflowConfig: WorkflowConfig = {
  name: 'Your Workflow Name',
  active: false,
  settings: {
    executionOrder: 'v1',
  },
};
```

### `src/nodes.ts`
Define your n8n nodes:
```typescript
export const createNodes = (env: WorkflowEnvironment): WorkflowNode[] => {
  return [
    // Your nodes here
  ];
};
```

### `src/connections.ts`
Define how nodes connect:
```typescript
export const connections: WorkflowConnections = {
  'Node A': {
    main: [[{ node: 'Node B', type: 'main', index: 0 }]],
  },
};
```

### `src/workflow.ts`
Generates the final workflow (don't modify).

### `generate.ts`
Maps environment variables and generates `workflow.json`:
```typescript
const environment: WorkflowEnvironment = {
  apiToken: process.env.API_TOKEN || undefined,
};
```

## Usage

```bash
# Install
npm install

# Set up environment
cp .env.example .env
# Edit .env with your values

# Generate workflow
npm run generate

# Import workflow.json into n8n
```

## Example

See `n8n-linkedin-post-scraper` for a complete example.
