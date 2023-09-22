import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

const env = {
	// allureClearSkippedTests: false,
	// allure: true,
	// allureReuseAfterSpec: true,
	allureResultsPath: 'reports/allure-results',
};

const e2e = {
	specPattern: ['cypress/e2e/*.cy.{ts,js,jsx,ts,tsx}'],
	setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
		allureWriter(on, config);
		return config;
	},
};

const config = defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	watchForFileChanges: false,
	chromeWebSecurity: false,
	video: false,
	retries: process.env.CI ? 2 : 0,
	reporter: 'cypress-multi-reporters',
	reporterOptions: { configFile: 'tsconfig.json' },
	e2e,
	env,
});
export default config;
