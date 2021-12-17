I came across an issue with @nestjs/config when:
Upgrading mongoose from ^5.12.13 to ^6.0.12 
Upgrading @nestjs/mongoose from ^8.0.1 to ^9.0.1

**Leads to open handles in jest e2e tests**
Note: adding --detectOpenHandles option in the package.json script for test:e2e does not help, it just not prints the warning of open handles, but still does not close the open Handles

The difference between the followin examples will be
Project 1: mongoose 6.1.12, @nestjs/mongoose 9.0.1, @nestjs/config

Recreate the issue:

Step 01: cd .\mongoose-not-working-6.1.12\
Step 02: npm cache clear --force
Step 03: npm i
Step 04: npm run test:e2e

==> Warning: **Jest did not exit one second after the test run has completed.**
==> You need to stop the test manually with Strg+C or equivalent

Step 04: cd ..
Step 05: cd .\mongoose-working-5.13.12\
Step 06: npm cache clear --force
Step 07: npm i
Step 08: npm run test:e2e

==> Works

Step 09: cd ..
Step 10: cd .\mongoose-working-6.1.12-no-config\
Step 11: npm cache clear --force
Step 12: npm i
Step 13: npm run test:e2e

==> Works