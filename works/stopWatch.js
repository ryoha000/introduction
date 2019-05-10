let time = 0
const start = () => {
  time++
  const countElement = document.querySelector('#count')
  countElement.innerText = '秒数: ' + time + '秒'
}

ver id = setInterval('start()',1000)


const reset = () => {
    time = 0
    const countElement = document.querySelector('#count')
    countElement.innerText = '秒数: ' + time + '秒'
  }