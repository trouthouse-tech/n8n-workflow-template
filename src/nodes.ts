import { WorkflowNode, WorkflowEnvironment } from './types';

/**
 * Generates all nodes for the workflow
 * Environment-specific values are passed as parameters
 * 
 * CUSTOMIZE THIS: Add, modify, or remove nodes based on your workflow needs
 */
export const createNodes = (env: WorkflowEnvironment): WorkflowNode[] => {
  return [
    // Example: Manual Trigger Node
    {
      parameters: {},
      type: 'n8n-nodes-base.manualTrigger',
      typeVersion: 1,
      position: [0, 0],
      id: generateNodeId('manual-trigger'),
      name: "When clicking 'Execute workflow'",
    },

    // TODO: Add your workflow nodes here
    // Example node templates:
    
    // HTTP Request Node:
    // {
    //   parameters: {
    //     url: env.apiUrl || 'https://api.example.com/endpoint',
    //     options: {},
    //   },
    //   type: 'n8n-nodes-base.httpRequest',
    //   typeVersion: 4.2,
    //   position: [200, 0],
    //   id: generateNodeId('http-request'),
    //   name: 'HTTP Request',
    // },

    // Code Node:
    // {
    //   parameters: {
    //     jsCode: 'return $input.all();',
    //   },
    //   type: 'n8n-nodes-base.code',
    //   typeVersion: 2,
    //   position: [400, 0],
    //   id: generateNodeId('code'),
    //   name: 'Code',
    // },

    // Set Node (Transform Data):
    // {
    //   parameters: {
    //     options: {},
    //   },
    //   type: 'n8n-nodes-base.set',
    //   typeVersion: 3.4,
    //   position: [600, 0],
    //   id: generateNodeId('set'),
    //   name: 'Set',
    // },
  ];
};

/**
 * Generates a deterministic node ID based on a seed
 * This ensures the same node names always get the same IDs
 * 
 * In production, you might want to use actual UUIDs:
 * import { randomUUID } from 'crypto';
 * return randomUUID();
 */
function generateNodeId(seed: string): string {
  // Simple hash function for demonstration
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `node-${Math.abs(hash).toString(16)}`;
}

