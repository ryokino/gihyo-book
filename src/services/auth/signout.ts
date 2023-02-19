/**
 * 認証API（サインアウト)
 * @param context APIコンテキスト
 * @returns サインアウトメッセージ
 */

import { ApiContext } from '@/types/data'
import { fetcher } from '@/utils'

const signout = async (context: ApiContext): Promise<string> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signout`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}
