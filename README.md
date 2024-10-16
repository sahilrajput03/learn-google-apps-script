# Learn Google Apps Script

- **Docs:** [Click here](https://developers.google.com/apps-script/guides/web)
  - **(TODO) Features & Limitations of Google Apps Script | Docs:** [Click here](https://developers.google.com/apps-script/guides/import-export#features_and_limitations)
  - **(TODO) Libraries | Docs:** [Click here](https://developers.google.com/apps-script/guides/import-export#features_and_limitations)

Interesting StackOverflow Questions:
- [1](https://stackoverflow.com/questions/43127023/how-do-i-create-a-doposte-function-in-apps-script-project-to-capture-http-post)
- [2](https://stackoverflow.com/questions/11725675/organizing-spreadsheet-code-in-several-gs-files-even-possible)

## ❤️ ❤️ ❤️ For more recent test codes using Apps Script you can search for `#Apps Script` in my [Office Utility Tools Notes](https://docs.google.com/document/d/1CvC-N3daE9P8k2d-joGwLtRez9Vm4La0o23w1xCLJOw/edit?tab=t.0#heading=h.6l193vt5cll6) google doc.

**Important Points to Remember:**
- You can create google apps script project here - https://script.google.com/home/start
- You can only have two function i.e, `doGet` and `doPost` function for GET and POST requests to be handled on the web url respectively.
	- Any deployment's `doGet` funciton is only callable if you are loggedin otherwise you would be prompted to login in the browser. 
- Note: If you are getting CORS error when you call the deployment url of the file, then it means you have not defined the function name `doPost` in your file which is the actual function that is called when any the web api call is made.
- You **do** need to deploy each versioned deployment to be able to test it.
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

```js
function doGet(e) {
  var params = JSON.stringify(e);
  MailApp.sendEmail({
    to: "sahilrajput03@gmail.com",
    subject: "Call Sucessful",
    htmlBody: "I am your <br>" +
              "DATA"
  });
  return ContentService.createTextOutput(params).setMimeType(ContentService.MimeType.JSON);
}
```
Note: When you try to send email via your script you might encouter this error, so you might need to handle this (TODO_SAHIL).

<image width="800" src="https://github.com/sahilrajput03/learn-google-apps-script/assets/31458531/cbd18b5c-ab43-4604-9015-891a2154a9dd" />

## Make use of multiple files

Article: [Click here](https://nilsrooijmans.com/google-ads-scripts-faq/whats-the-use-of-multiple-gs-files-in-google-ads-scripts/)

```js
// file1.gs
function doGet() {
  return ContentService.createTextOutput('Hello, function1.');
}
```

```js
// file2.gs
function doGet() {
  return ContentService.createTextOutput('Hello, function2.');
}
function doGet() {
  return ContentService.createTextOutput('Hello, function3.');
}
```

Now, when you hit the test deployment (or versioned deployment) url, you would see `Hello, function3.`. This means that the bottom most file and the bottom most function inside that file overwrites any other `doGet` function in that file and other `doGet` functions in any other files.

Also, you can change the order of the files in google apps script project by clicking the tripple dot menu option and then choosing the `Move file up` or `Move file down` option respectively.

## Code Splitting using function and files

```js
// File: file2.gs (my bottom most file in the google apps script project)

// NOTE: `myFun` can be declared:
// 1. above or below the `doGet` function
// 2. in any different .gs file irrespective of that file being above or below in the sequence order of the project files
function myFun() {
  return "myFun is cool!"
}

function doGet() {
  const message = myFun()
  return ContentService.createTextOutput(message);
}
```

Now, when you hit the test deployment (or versioned deployment) url, you would see `myFun is cool!`.
