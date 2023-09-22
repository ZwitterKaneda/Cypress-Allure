import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

const env = {
	allureClearSkippedTests: false,
	allure: true,
	allureReuseAfterSpec: true,
	allureResultsPath: 'reports/allure-results',
};

const e2e = {
	specPattern: ['cypress/e2e/test/Suites/ERP/cucumber-test/Gherkin/*.feature', 'cypress/e2e/**/*.cy.{ts,js,jsx,ts,tsx}'],

	setupNodeEvents() {
		// implement node event listeners here
	},
};
const config = defineConfig({
	projectId: 'xjsj9a',
	viewportWidth: 1920,
	viewportHeight: 1080,
	watchForFileChanges: false,
	chromeWebSecurity: false,
	video: false,
	retries: process.env.CI ? 2 : 0,
	e2e,
	env,
});
export default config;
