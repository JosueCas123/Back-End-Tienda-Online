import bcrypt from 'bcrypt';

async function hashComparacion () {
    const myPassword = 'josue1233'
    const hash = '$2b$10$08r34yzNDEk7Tsnlj6kWvu.skjvr0N8lwg8rJlHEAIe.LGhvIDbU6'

    const isMach = await bcrypt.compare(myPassword, hash)

    console.log(isMach)
}

hashComparacion()
