# myprofile

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Jan 07 2019 21:17:21 GMT+0700 (SE Asia Standard Time) using Sails v1.1.0.

<!-- Internally, Sails used [`sails-generate@1.16.4`](https://github.com/balderdashy/sails-generate/tree/v1.16.4/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->


### Installation issues
1. Install node inspector for sails debug
npm install -g node-inspector

Solved: How to fix this
https://github.com/felixrieseberg/windows-build-tools/issues/33
npm --add-python-to-path='true' --debug install --global windows-build-tools

You also should downgrate nodejs to version 6.1.0. It's not working with node 8.x
https://github.com/node-inspector/node-inspector/issues/1013

2. config\security.js
csrf: true
This config prevents using postman CORS in your app when you make a POST request. You will get error Forbidden when it's true in postman
https://stackoverflow.com/questions/49201793/sails-js-forbidden-post-request

3. Config CORS
https://stackoverflow.com/questions/30694033/sails-js-cors-for-post-method?rq=1

4. Many ways to define an action
https://sailsjs.com/documentation/concepts/actions-and-controllers#?classic-actions

5. Always Unauthorized error
https://stackoverflow.com/questions/50123460/sails-1-0-post-route-gives-403-error

6. Blueprints configuration
https://stackoverflow.com/questions/36430609/sails-js-api-executing-without-route-configuration-and-controller-method

7. Provide parameters with slashes intead of ? and &&
https://stackoverflow.com/questions/49799707/getting-404-error-with-sails-js-one-way-association
Not: http://localhost:1337/api/news/create?title=test&&description=description&&categoryId=1
Like this: POST http://localhost:1337/manufacturers/5acf62cf080d700c2209d40b/manufacturer_tabs

NOTE:
warn: Action middleware (POLICY: true (alwaysAllow)) was bound to a target `/news/create` that doesn't match any registered actions.
https://sailsjs.com/documentation/reference/application/advanced-usage/sails-register-action
