import { ApiContext, User } from '@/types/data'
import { fetcher } from '@/utils'
/**
 * ユーザーAPI（一覧取得)
 * @param context APIコンテキスト
 * @return ユーザー一覧
 */

export const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
    headers: {
      Origin: '*', // CORS対策
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllUsers
