// Type definitions for n8n workflow structure

export interface WorkflowNode {
  parameters: Record<string, any>;
  type: string;
  typeVersion: number;
  position: [number, number];
  id: string;
  name: string;
  credentials?: Record<string, {
    id: string;
    name: string;
  }>;
}

export interface Connection {
  node: string;
  type: string;
  index: number;
}

export interface WorkflowConnections {
  [nodeName: string]: {
    main: Connection[][];
  };
}

export interface WorkflowConfig {
  name: string;
  active: boolean;
  settings: {
    executionOrder: string;
  };
}

export interface Workflow {
  name: string;
  nodes: WorkflowNode[];
  pinData: Record<string, any>;
  connections: WorkflowConnections;
  active: boolean;
  settings: {
    executionOrder: string;
  };
}

/**
 * Environment-specific configuration
 * 
 * IMPORTANT: Customize this interface for your specific workflow!
 * Add fields for API keys, IDs, URLs, and other environment-specific values.
 * 
 * Example:
 * export interface WorkflowEnvironment {
 *   apiToken?: string;
 *   webhookUrl?: string;
 *   databaseId?: string;
 *   credentialId?: string;
 *   credentialName?: string;
 * }
 */
export interface WorkflowEnvironment {
  // Add your environment variables here
  // Example: apiToken?: string;
}

