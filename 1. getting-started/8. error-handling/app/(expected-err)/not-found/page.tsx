import { notFound } from "next/navigation";

export default async function Page() {
    // call api to get post detail...
    const post = null;
   
    if (!post) {
      notFound();
    }
   
    return <div>{post.title}</div>
  }
  