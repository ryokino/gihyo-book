import { ApiContext } from '@/types/data'
import { fetcher } from '@/utils'

export type PurchaseParams = {
  /**
   * 購入する商品ID
   */
  productId: number
}

/**
 * 購入API（商品購入）
 * @param context APIコンテキスト
 * @param params 商品ID
 * @returns 購入結果のメッセージ
 */

const purcahse = async (
  context: ApiContext,
  { productId }: PurchaseParams,
): Promise<string> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/purchase`, {
    method: 'POST',
    headers: {
      Origin: '*', // CORS対策
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include', // クッキーを送信するために必要
    },
    body: JSON.stringify({ productId }),
  })
}

export default purcahse
