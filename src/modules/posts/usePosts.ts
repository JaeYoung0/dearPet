import React from 'react'
import { fetchPosts } from '@/server/posts/service'
import { useQuery } from 'react-query'
import { PostModel } from '@/server/posts/model'

/**
 * staleTime: 0, cahcheTime: 5분
 * => 첫번째 마운트 이후 바로 상한 데이터로 취급하지만 navigation 상에서 screen 전환, 즉 screen에 포커싱 되었을 때 refetch되지는 않는다.
 * => 잠시 전체화면으로 전환했다가 다시 돌아오는 경우 refetch된다.
 *
 * staleTime: 10초, cahcheTime: 5분
 * => 첫번째 마운트 이후 10초 뒤에 상한데이터로 취급한다.
 * => 10초 이내에 잠시 전체화면으로 전환했다가 다시 돌아오더라도 아직 싱싱한(?) 데이터로 취급하기 때문에 refetch를 생략한다.
 *
 * staleTime이 지나지 않았더라도 useRefreshOnFocus로 refetch할 수 있다.
 */

/**
 * isLoading === true의 조건은 '캐시된 data가 없고 isFetching === true 일 때' 이다.
 * 즉, refetch 가 된 query 일 경우 isLoading 이 false 라는 얘기이다.
 * 만약 의도적으로 refetch 시에도 Loader를 그려주고 싶다면 isLoading이 아닌 isFetching을 사용해야 한다.
 */

function usePosts(licenseId?: string) {
  const result = useQuery<PostModel[]>(['@modules/posts', licenseId], () => fetchPosts(licenseId), {
    retry: 3,
    staleTime: 1000 * 60 * 3, // default 0. 얼마 지나야 상한 데이터로 판단하고 다시 네트워크 요청을 할 것인가 ?
    cacheTime: 1000 * 60 * 5, // default 5분. 언마운트 되고나서 얼마동안 캐싱할 것인가?
    enabled: Boolean(licenseId),
  })
  console.log('@@result', result.data)

  console.log('@@usePosts call--------------------', result.isLoading, result.isFetching)

  return { ...result }
}

export default usePosts
