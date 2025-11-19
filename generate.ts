#!/usr/bin/env ts-node

import { writeFileSync } from 'fs';
import { join } from 'path';
import { exportWorkflowJSON } from './src/workflow';
import { WorkflowEnvironment } from './src/types';

/**
 * Script to generate the workflow JSON file
 * Usage: ts-node generate.ts
 * 
 * CUSTOMIZE THIS: Set your environment variables or modify the config below
 */

// Load environment-specific configuration
// You can also use process.env to read from environment variables
const environment: WorkflowEnvironment = {
  // TODO: Add your environment variables here
  // Example:
  // apiToken: process.env.API_TOKEN || undefined,
  // webhookUrl: process.env.WEBHOOK_URL || undefined,
  // databaseId: process.env.DATABASE_ID || undefined,
};

// Generate the workflow
const workflowJSON = exportWorkflowJSON(environment);

// Write to file
const outputPath = join(process.cwd(), 'workflow.json');
writeFileSync(outputPath, workflowJSON, 'utf-8');

console.log(`✅ Workflow generated successfully: ${outputPath}`);
console.log('\n📝 Next steps:');
console.log('1. Customize src/nodes.ts with your workflow logic');
console.log('2. Update src/connections.ts to connect your nodes');
console.log('3. Add environment variables to .env');
console.log('4. Run: npm run generate');
console.log('5. Import workflow.json into n8n');

