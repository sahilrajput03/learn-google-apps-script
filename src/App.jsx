import { useEffect, useState } from 'react'
import axios from 'axios'

const saveToShet = async () => {
  const deploymentUrl = `https://script.google.com/macros/s/AKfycbzcCk3R5T5_otnVXiROlG1CrTcHzOn_9KHUSqVb1dkt2ls1PujnthxE6d8dzWS3blLf/exec`

  // const formData = getFormData({
  //   functionName: 'doOwnerPost',
  //   email: 'kerala@bela.com',
  //   question: 'how are you brooo?'
  // })

  const formData = getFormData({
    functionName: 'doCompanyRepresentativerPost',
    fullName: "ALI",
    businessEmail: "ali@gmail.com",
    companyName: "ali@gmail.com",
    accomodationType: "Hello",
    noofrooms: "6",
    pms: "12",
    phoneNumberfinal: "+9182232323"
  })
  const res = await axios.post(deploymentUrl, formData.toString(), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
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
