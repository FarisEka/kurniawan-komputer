import prisma from '../../utils/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { setCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || user.role !== 'admin') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Email atau password salah'
    })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Email atau password salah'
    })
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' }
  )

  // simpan token ke cookie
  setCookie(event, 'admin_token', token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: '/'
  })

  return { message: 'Login berhasil' }
})
