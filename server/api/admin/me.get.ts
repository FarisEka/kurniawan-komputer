import jwt from 'jsonwebtoken'
import { getCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'admin_token')

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
    return decoded
  } catch {
    throw createError({ statusCode: 401, statusMessage: 'Token tidak valid' })
  }
})
