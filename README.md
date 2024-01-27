# Learn Google Apps Script

1. You can create google apps script project here - https://script.google.com/home/start

2. Note: If you are getting CORS error when you call the deployment url of the file, then it means you have not defined the function name `doPost` in your file which is the actual function that is called when any the web api call is made.

3. You do need to deploy each versioned deployment to be able to test it.

4. Using postman to make call to your deployment url:

<image width="800" src="https://github.com/sahilrajput03/learn-google-apps-script/assets/31458531/ad661c4e-f06a-4201-ae6c-d0b0b2161790" />


## Docs

```bash
# We can make use "Test Deployment" and adding appropriate query in the end
# for e.g., "username=sahil" and then trying to open below url in
# browser url bar directly and it would show the params in the browser itself
https://script.google.com/macros/s/AKfycbwv0Vvlmg6Vhd37gFROw9efDDFQixCShKh0Wt4XE48/dev?username=sahil
````