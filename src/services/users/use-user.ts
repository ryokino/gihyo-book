import useSWR from 'swr'
import { ApiContext, User } from '@/types/data'

export type UseUserProps = {
  /**
   * 取得するユーザーID
   */
  id: number
  /**
   * 初期状態
   */
  initialData?: User
}

export type UseUser = {
  /**
   * 取得するユーザー
   */
  user?: User
  /**
   * ロードフラグ
   */
  isLoading: boolean
  /**
   * エラーフラグ
   */
  isError: boolean
}

/**
 * ユーザーAPI(個別取得) のカスタムフック
 * @param context APIコンテキスト
 * @param ユーザーとAPI呼び出しの状態
 */

const useUser = (
  context: ApiContext,
  { id, initialData }: UseUserProps,
): UseUser => {
  const { data, error } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
  )

  return {
    user: data ?? initialData,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
