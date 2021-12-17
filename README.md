s## I came across an issue with @nestjs/config when:
Upgrading mongoose from ^5.13.13 to ^6.0.12 

Upgrading @nestjs/mongoose from ^8.0.1 to ^9.0.1

**Leads to open handles in jest e2e tests**

**Note:** adding --detectOpenHandles option in the package.json script for test:e2e does not help, it just not prints the warning of open handles, but still does not close the open Handles

---
## The difference between the followin examples will be

Project 1: mongoose 6.1.12, @nestjs/mongoose 9.0.1, @nestjs/config 1.1.5

Project 2: mongoose 5.13.13, @nestjs/mongoose 8.0.1, @nestjs/config 1.1.5

Project 3: mongoose 6.1.12, @nestjs/mongoose 9.0.1, @nestjs/config **NOT USED**

---
## Recreate the issue:

01. cd .\mongoose-not-working-6.1.12\
02. npm i
03. npm run test:e2e
```
==> Warning: <span style="color:yellow">**Jest did not exit one second after the test run has  completed.** </span>

==> You need to stop the test manually with Strg+C or equivalent
```
04. cd ..
05. cd .\mongoose-working-5.13.12\
06. npm i
07. npm run test:e2e
```
==> <span style="color:green">Works</span>
```
08. cd ..
09. cd .\mongoose-working-6.1.12-no-config\
10. npm i
11. npm run test:e2e
```
==> <span style="color:green">Works</span>
```
