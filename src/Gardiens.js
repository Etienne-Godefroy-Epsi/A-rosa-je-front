// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Thread = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         const result = await axios.get('http://localhost:5000/api/post');
//         setPosts(result.data);
//       } catch (error) {
//         console.log('La requête pour récupérer les posts a échouée', error);
//       }
//     };
//     getPosts();
//   }, []);

//   return (
//     <div className="thread-container">
//       <ul>
//         {posts.map((post) => {
//           return <Card post={post} key={post._id} />;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Thread;
