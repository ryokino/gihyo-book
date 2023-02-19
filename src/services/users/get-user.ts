import type { ApiContext, User } from '../../types/data'
import { fetcher } from '../../utils'

export type GetUserParams = {
  /**
   * ユーザーID
   */
  userId: number
}

/**
 * ユーザーAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー情報
 */
const getUser = async (
  context: ApiContext,
  { userId }: GetUserParams,
): Promise<User> => {
  /**
    // ユーザーAPI
    // サンプルレスポンス
    {
    "id": "1",
    "username":"taketo",
    "email": "taketo@example.com",
    "profileImageUrl":"/users/1.png",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
    */

  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${userId}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser
