export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const res = await fetch(resource, init)

  if (!res.ok) {
    // レスポンスがエラーの場合は例外を投げる
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラ〜が発生しました。',
    )
    throw error
  }

  return res.json()
}
