import sendmail from 'sendmail'
export default (from, to, subject, message) => {
  return new Promise((resolve, reject) => {
    sendmail({ from, to, subject, html: message }, (error, success) => {
      if (error) reject(error)
      else resolve(success)
    })
  })
}