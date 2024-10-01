import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostData = () => {
  const [newPost, setNewPost] = useState(null); // Holds the newly created post

  useEffect(() => {
    // Function to post the mock data
    const postData = async () => {
      const mockData = {
        title: 'My First Blog Post',
        body: 'This is the content of my first blog post.',
        userId: 1
      };

      try {
        // Make the POST request
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', mockData);
        console.log('Post created:', response.data);

        // Set the new post to render it on the page
        setNewPost(response.data);
      } catch (error) {
        console.error('Error creating the post:', error);
      }
    };

    // Call the postData function when the component mounts
    postData();
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>Create a New Post</h1>

      {/* Display the new post after it's created */}
      {newPost ? (
        <div style={{ marginTop: '20px' }}>
          <h2>New Post Created:</h2>
          <p><strong>Title:</strong> {newPost.title}</p>
          <p><strong>Body:</strong> {newPost.body}</p>
          <p><strong>Post ID:</strong> {newPost.id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostData;
