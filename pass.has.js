import bcrypt from 'bcrypt';

async function hashPassword() {
  const myPassword = 'josue123'
  const has = await bcrypt.hash(myPassword, 10)

  console.log(has)
}

 hashPassword()
