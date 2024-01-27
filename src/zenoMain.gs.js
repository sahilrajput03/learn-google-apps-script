// NOTE: You must create this file via name `zenoMain.gs` only.
// NOTE: I have added .js extension in the end of this file only to get syntax highlighting in vscode.

// LEARN: Your file can have any name but the function name needs to be "doPost" only, otherwise you'll get error 'doPost' function not found while making request from postman.
function doPost(e) {
	try {
		// LEARN: Do not use nested fields inside the parameter because when actually sending data from browser (fetch/axios) the data is received as '[Object object]' string instead of actual object. So, only use 1 level nested properties. 

		// Example Task - doOwnerPost
		// e = {
		//   parameter: {
		//     functionName: 'doOwnerPost',
		//     email: 'a@b.com',
		//     question: 'how are you2?'
		//   }
		// }

		// Example Task - doCompanyRepresentativerPost
		// e = {
		//   parameter: {
		//     functionName: 'doCompanyRepresentativerPost',
		//     fullName: "ALI",
		//     businessEmail: "ali@gmail.com",
		//     companyName: "ali@gmail.com",
		//     accomodationType: "Hello",
		//     noofrooms: "6",
		//     pms: "12",
		//     phoneNumberfinal: "+9182232323"
		//   }
		// }

		// Check if the 'e' object and 'parameter' property are defined
		if (e && e.parameter) {
			// Run function
			eval(`${e.parameter.functionName}(e)`)

			return ContentService.createTextOutput('Data saved successfully');
			// LEARN: Use below below statements if you want to send data in response:
			// return ContentService.createTextOutput(JSON.stringify({ status: "success", "data": "my-data" })).setMimeType(ContentService.MimeType.JSON);
		} else {
			return ContentService.createTextOutput('Invalid request data');
		}

	} catch (error) {
		console.error('Error:', error);
		return ContentService.createTextOutput('Internal Server Error');
	}
}

function doOwnerPost(e) {
	const sheetId = '1Hj1UiOKuCe-Ve3MS2IyQBdz9g9uipN8JR36E3xT8GPI'
	const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
	sheet.appendRow([e.parameter.email, e.parameter.question])
}

function doCompanyRepresentativerPost(e) {
	const sheetId = "1Hj1UiOKuCe-Ve3MS2IyQBdz9g9uipN8JR36E3xT8GPI"
	const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
	sheet.appendRow([e.parameter.fullName, e.parameter.businessEmail, e.parameter.companyName, e.parameter.accomodationType, e.parameter.noofrooms, e.parameter.pms, e.parameter.phoneNumberfinal])
}
