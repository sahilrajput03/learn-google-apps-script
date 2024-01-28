import { useEffect, useState } from 'react'
import axios from 'axios'

// NOTE: The code for google apps script is in file: `zenoMain.gs.js` file.

// Running development API driectly in the browser for quick testing:
// https://script.google.com/macros/s/AKfycbwv0Vvlmg6Vhd37gFROw9efDDFQixCShKh0Wt4XE48/dev?task=doOwnerPost&email=Alice&question=how_well_are_you
// https://script.google.com/macros/s/AKfycbwv0Vvlmg6Vhd37gFROw9efDDFQixCShKh0Wt4XE48/dev?task=doCompanyRepresentativerPost&fullName=ALI&businessEmail=ali--gmail--com&companyName=ali--gmail-com&accomodationType=Hello&noofrooms=6&pms=12&phoneNumberfinal=9182232323&


const saveToShet = async () => {
  const deploymentUrl = `https://script.google.com/macros/s/AKfycbzjtt5l4Ph7dGjpPJ_gIgoi0WIr6N_IN3yPUQEeG1hXKuJ3BitbBqTYBsKncz2EmTyf/exec`

  // const formData = getFormData({
  //   task: 'doOwnerPost',
  //   email: 'munna@bhai.com',
  //   question: 'Settup??'
  // })

  const formData = getFormData({
    task: 'doCompanyRepresentativerPost',
    fullName: "Alice",
    businessEmail: "alice@gmail.com",
    companyName: "alice@gmail.com",
    accomodationType: "Hello",
    noofrooms: "6",
    pms: "12",
    phoneNumberfinal: "+9182232323"
  })
  const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }
  const res = await axios.post(deploymentUrl, formData.toString(), config)
  console.log('responseData?', res.data)
}

function App() {
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function main() {
      try {
        await saveToShet()
        setStatus('success')
      } catch (error) {
        setStatus('failed')
        setError(error)
      }
    }
    main()
  }, [])
  return (
    <>
      {status ? status : 'requesting...'}
      <pre>
        {JSON.stringify(error, null, 2)}
      </pre>
    </>
  )
}

function getFormData(object) {
  const formData = new URLSearchParams();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}

export default App
