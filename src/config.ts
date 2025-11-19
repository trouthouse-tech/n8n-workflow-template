import { WorkflowConfig } from './types';

/**
 * Workflow-level configuration
 * These are generic settings that can be used across different instances
 * 
 * CUSTOMIZE THIS: Update the workflow name and settings for your use case
 */
export const workflowConfig: WorkflowConfig = {
  name: 'WORKFLOW_NAME',
  active: false,
  settings: {
    executionOrder: 'v1',
  },
};

