import { useRouter } from "next/router"
import Seo from "../../components/Seo"

// [...id] -> movies/asd/asdf/asdf/ 가능!! -> catch-all url
// router 에서도 query id 는 string 이 아닌 array

// /영화제목/영화아이디
export default function MovieDetail({ params }) {
  const router = useRouter()
  const [title, id] = params || []
  console.log("router", router)
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  )
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  }
}
