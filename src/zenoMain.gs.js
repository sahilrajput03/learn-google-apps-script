// file: file1.gs
function doOwnerPostData(e) {
	const sheetId = '1Hj1UiOKuCe-Ve3MS2IyQBdz9g9uipN8JR36E3xT8GPI'
	const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
	sheet.appendRow([e.parameter.email, e.parameter.question])

	return "Successfully posted owner data."
}

// file: file2.gs
function doCompanyRepresentativerPostData(e) {
	const sheetId = '1Hj1UiOKuCe-Ve3MS2IyQBdz9g9uipN8JR36E3xT8GPI'
	const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
	sheet.appendRow([e.parameter.businessEmail, e.parameter.companyName, e.parameter.accomodationType, e.parameter.noofrooms, e.parameter.pms, e.parameter.phoneNumberfinal])

	return "Successfully posted company representative data."
}

// file: main.gs
function doPost(e) {
	if (e.parameter.task === "doOwnerPost") {
		return ContentService.createTextOutput(doOwnerPostData(e));
	}
	if (e.parameter.task === "doCompanyRepresentativerPost") {
		return ContentService.createTextOutput(doCompanyRepresentativerPostData(e));
	}
}