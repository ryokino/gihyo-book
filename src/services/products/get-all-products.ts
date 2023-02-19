import { ApiContext, Category, Condition, Product } from '@/types/data'
import { fetcher } from '@/utils'

export type GetAllProductsProps = {
  /**
   * 商品カテゴリ
   */
  category?: Category
  /**
   * 商品状態
   */
  conditions?: Condition[]
  /**
   * 所有するユーザーID
   */
  userId?: number
  /**
   * ソートするキー
   */
  sort?: keyof Omit<Product, 'owner'>
  /**
   * 昇順or降順
   */
  order?: 'asc' | 'desc'
  /**
   * 取得数
   */
  limit?: number
  /**
   * ページ数
   */
  page?: number
}

/**
 * プロダクトAPI(一覧取得)
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 商品一覧
 */

const getAllProducts = async (
  context: ApiContext,
  {
    category,
    conditions,
    userId,
    sort = 'id',
    order = 'desc',
    limit,
    page,
  }: GetAllProductsProps = {},
): Promise<Product[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`
  const params = new URLSearchParams()

  category && params.append('category', category)
  conditions &&
    conditions.forEach((condition) => params.append('conditions', condition))
  userId && params.append('userId', userId.toString())
  page && params.append('page', page.toString())
  limit && params.append('limit', limit.toString())
  sort && params.append('sort', sort)
  order && params.append('order', order)
  const query = params.toString()

  return await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Origin: '*', // CORS対策
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  })
}

export default getAllProducts
