import { Comment, FullPost } from "@/model/posts";
import useSWR from "swr";

async function addComment(id: string, comment: Comment) {
  return fetch("/api/comment/update", {
    method: "POST",
    body: JSON.stringify({
      id,
      comment: comment.comment,
      username: comment.username,
      password: comment.password,
      emoji: comment.emoji,
    }),
  }).then((res) => res.json());
}

async function editComment(id: string, newComment: Comment) {
  return fetch("/api/comment/edit", {
    method: "PUT",
    body: JSON.stringify({
      id,
      comment: newComment.comment,
      username: newComment.username,
      password: newComment.password,
      emoji: newComment.emoji,
    }),
  }).then((res) => res.json());
}

async function deleteComment(id: string, comment: Comment) {
  return fetch("/api/comment/delete", {
    method: "DELETE",
    body: JSON.stringify({
      id,
      comment: comment.comment,
      username: comment.username,
      password: comment.password,
      emoji: comment.emoji,
    }),
  }).then((res) => res.json());
}

export default function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
    mutate,
  } = useSWR<FullPost[]>("/api/posts");

  const postComment = (post: FullPost, comment: Comment) => {
    const newPost = {
      ...post,
      comments: [...post.comments, comment],
    };
    const newPosts = posts?.map((p) => (p.id === post.id ? newPost : p));

    return mutate(addComment(post.id, comment), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  const editPostComment = (post: FullPost, newComment: Comment) => {
    const updatedComments = post.comments.map((c) =>
      c.username === newComment.username &&
      c.password === newComment.password &&
      c.emoji === newComment.emoji
        ? { ...c, comment: newComment.comment, emoji: newComment.emoji }
        : c
    );

    const updatedPost = { ...post, comments: updatedComments };
    const updatedPosts = posts?.map((p) =>
      p.id === post.id ? updatedPost : p
    );

    return mutate(editComment(post.id, newComment), {
      optimisticData: updatedPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  const deletePostComment = (post: FullPost, commentToDelete: Comment) => {
    // 삭제할 댓글을 제외하고 새로운 댓글 배열을 생성합니다.
    const updatedComments = post.comments.filter(
      (c) =>
        !(
          c.username === commentToDelete.username &&
          c.password === commentToDelete.password &&
          c.emoji === commentToDelete.emoji
        )
    );

    const updatedPost = { ...post, comments: updatedComments };
    const updatedPosts = posts?.map((p) =>
      p.id === post.id ? updatedPost : p
    );

    return mutate(deleteComment(post.id, commentToDelete), {
      optimisticData: updatedPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  return {
    posts,
    isLoading,
    error,
    postComment,
    editPostComment,
    deletePostComment,
  };
}
