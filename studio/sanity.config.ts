import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { dashboardTool } from '@sanity/dashboard';
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'odff',
  title: 'odff',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 've8m6jwu',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool(),
    visionTool(),
    dashboardTool({
      widgets: [vercelWidget({ layout: { width: 'full' } })],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
