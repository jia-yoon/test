const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    const t = Math.random() * 1000
    console.log(t)
    setTimeout(() => {
      resolve(i)
    }, t) // t시간 후 resolve함수 실행
  })
}

const foo = async () => {
  for (let i = 0; i < 10; i++) {
    const r = await longFunc(i)
    console.log(r)
  }
  return 'done'
}

foo()
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.error(e.message)
  })

export default {
  foo
}
