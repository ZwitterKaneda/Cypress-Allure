#!/bin/bash

# Crear 14 archivos con estado "passed"
for ((i=1; i<=14; i++)); do
    echo "describe('Test $i', () => {" >> cypress/e2e/testpassed$i.cy.ts
    echo "  it('should pass', () => {" >> cypress/e2e/testpassed$i.cy.ts
    echo "    expect(true).to.equal(true);" >> cypress/e2e/testpassed$i.cy.ts
    echo "  });" >> cypress/e2e/testpassed$i.cy.ts
    echo "});" >> cypress/e2e/testpassed$i.cy.ts
done

# Crear 4 archivos con estado "skipped"
for ((i=1; i<=4; i++)); do
    echo "describe('Test $i', () => {" >> cypress/e2e/testskipped$i.cy.ts
    echo "  it.skip('should be skipped', () => {" >> cypress/e2e/testskipped$i.cy.ts
    echo "    // Agrega tus pruebas aquí" >> cypress/e2e/testskipped$i.cy.ts
    echo "  });" >> cypress/e2e/testskipped$i.cy.ts
    echo "});" >> cypress/e2e/testskipped$i.cy.ts
done

# Crear 2 archivos con estado "failed"
for ((i=1; i<=2; i++)); do
    echo "describe('Test $i', () => {" >> cypress/e2e/testfailed$i.cy.ts
    echo "  it('should fail', () => {" >> cypress/e2e/testfailed$i.cy.ts
    echo "    throw new Error('Test failed');" >> cypress/e2e/testfailed$i.cy.ts
    echo "  });" >> cypress/e2e/testfailed$i.cy.ts
    echo "});" >> cypress/e2e/testfailed$i.cy.ts
done
