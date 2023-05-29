import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        const emoji = post.minutes < 30 ? "☕️" : "🍱";
        const repeat =
          post.minutes < 30
            ? Math.ceil(post.minutes / 5)
            : Math.ceil(post.minutes / 10);
        return (
          <Article
            key={post.id}
            title={post.title}
            date={`${post.date}  • ${emoji.repeat(repeat)} ${
              post.minutes
            } minutes `}
            preview={post.preview}
          />
        );
      })}
    </main>
  );
}

export default ArticleList;
