# Learn Google Apps Script

Official Docs: [Click here](https://developers.google.com/apps-script/guides/web)

Interesting StackOverflow Question: [Click here](https://stackoverflow.com/questions/43127023/how-do-i-create-a-doposte-function-in-apps-script-project-to-capture-http-post)

- You can create google apps script project here - https://script.google.com/home/start
- You can only have two function i.e, `doGet` and `doPost` function for GET and POST requests to be handled on the web url respectively.
- Note: If you are getting CORS error when you call the deployment url of the file, then it means you have not defined the function name `doPost` in your file which is the actual function that is called when any the web api call is made.
- You **do** need to deploy each versioned deployment to be able to test it.
- 
- Using postman to make call to your deployment url:

<image width="800" src="https://github.com/sahilrajput03/learn-google-apps-script/assets/31458531/ad661c4e-f06a-4201-ae6c-d0b0b2161790" />


## Making use of Test Deployment

Official Docs: [Click here](https://developers.google.com/apps-script/guides/web)

We can make use "Test Deployment" and adding appropriate query in the end.

Using test deployments are really fun because we do not need to deploye after each save, i.e, on each save the function is lively updated.

For e.g., "username=sahil" and then trying to open below url in

Browser url bar directly and it would show the params in the browser itself

```
https://script.google.com/macros/s/AKfycbwv0Vvlmg6Vhd37gFROw9efDDFQixCShKh0Wt4XE48/dev?username=sahil
````

OUTPUT:

<image width="800" src="https://github.com/sahilrajput03/learn-google-apps-script/assets/31458531/91896983-601c-4f5d-8e34-83d2db2ab177" />


## You can probably send email via google app script

Refer here: [Click here](https://stackoverflow.com/a/43143736/10012446)

Note: When you try to send email via your script you might encouter this error, so you might need to handle this (TODO_SAHIL).

<image width="800" src="https://github.com/sahilrajput03/learn-google-apps-script/assets/31458531/cbd18b5c-ab43-4604-9015-891a2154a9dd" />
