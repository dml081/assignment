import React, { Suspense } from 'react'
import Loading from '../components/Loading';
// import Post from '../components/Post'

// const Post = React.lazy(() => import('../components/Post'));
const Post = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/Post"));
      }, 5000);
    })
);

const PostPage = () => {
  return (
    <div>
        <Suspense fallback={<Loading />}>
            <Post/>
        </Suspense>
    </div>
  )
}

export default PostPage
