* mechanism
- request memorization(return value) -> react feature
- data cache(data)
- full route cache(html + rsc)
- router cache(rsc)
    

*request memorization
- example:
async function getItem() {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch('https://.../item/1')
  return res.json()
}
 
// This function is called twice, but only executed the first time
const item = await getItem() // cache MISS
 
// The second call could be anywhere in your route
const item = await getItem() // cache HIT

- duration: until rendering is finished
- revalidating: unnecessary
- only GET


*data cache
- duration: The Data Cache is persistent across incoming requests and deployments unless you revalidate or opt-out.
- Revalidating: 
+ Time-based(revalidate)
+ On-demand(tag-based or path-based)
- Opting out
+ ex: let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })


*full route cache
- duration: By default, the Full Route Cache is persistent
- invalidation: 
+ revalidating data
+ redeploying 
- opting out:
+ using dynamic api
+ using dynamic = 'force-dynamic' or revalidate = 0
+ opting out of the data cache


*router cache
- duration: 2 factor: Session, Automatic Invalidation Period
- invalidation:
+ in server action : Revalidating data on-demand, Using cookies.set or cookies.delete
+ Calling router.refresh