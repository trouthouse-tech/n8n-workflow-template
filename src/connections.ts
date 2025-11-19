import { WorkflowConnections } from './types';

/**
 * Defines the connections between nodes in the workflow
 * This is generic and doesn't require environment-specific values
 * 
 * CUSTOMIZE THIS: Define how your nodes connect to each other
 * 
 * Structure:
 * {
 *   "Source Node Name": {
 *     main: [
 *       [
 *         {
 *           node: "Target Node Name",
 *           type: "main",
 *           index: 0
 *         }
 *       ]
 *     ]
 *   }
 * }
 */
export const connections: WorkflowConnections = {
  "When clicking 'Execute workflow'": {
    main: [
      [
        // TODO: Connect to your next node
        // Example:
        // {
        //   node: 'HTTP Request',
        //   type: 'main',
        //   index: 0,
        // },
      ],
    ],
  },
  
  // TODO: Add connections for your other nodes
  // Example:
  // 'HTTP Request': {
  //   main: [
  //     [
  //       {
  //         node: 'Code',
  //         type: 'main',
  //         index: 0,
  //       },
  //     ],
  //   ],
  // },
};

