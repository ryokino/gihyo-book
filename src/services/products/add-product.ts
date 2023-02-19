import { ApiContext, Product } from './../../types/data.d'
import { fetcher } from '@/utils'

export type AddProductsParams = {
  /**
   * 追加する商品
   */
  product: Omit<Product, 'id'>
}

/**
 * プロダクトAPI（追加)
 * @param context APIコンテキスト
 * @param params 追加する商品
 * @returns 追加した商品
 */

const addProduct = async (
  context: ApiContext,
  { product }: AddProductsParams,
): Promise<Product> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/products`, {
    method: 'POST',
    headers: {
      Origin: '*', // CORS対策
      Accept: 'application/json', // レスポンスをJSONで受け取る
      'Content-Type': 'application/json', // リクエストをJSONで送る
      credentials: 'include', // クッキーを送信するために必要
    },
    body: JSON.stringify(product),
  })
}

export default addProduct
