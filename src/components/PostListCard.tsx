import { Comment, FullPost } from "@/model/posts";
import Avatar from "./Avatar";

import { CONFIG, GOOGLEFRONTCLOUND } from "@/libs/configs";
import CarouselContainer from "./ui/CarouselContainer";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import usePosts from "@/hooks/posts";
import MapDrawer from "./MapDrawer";
import { MdKeyboardArrowRight } from "react-icons/md";
import AccountDrawer from "./AccountDrawer";
import GoogleCalendarButton from "./GoogleCalendarButton";
import HeartButton from "./HeartButton";
type Props = {
  post: FullPost;
};

export default function PostListCard({ post }: Props) {
  const { id, images, comments, text, hashtag } = post;
  const { postComment, editPostComment, deletePostComment } = usePosts();
  const handlePostComment = (comment: Comment) => {
    postComment(post, comment);
  };

  const handleEditComment = (comment: Comment, method: "Edit" | "Remove") => {
    if (method === "Edit") {
      editPostComment(post, comment);
    } else if (method === "Remove") {
      deletePostComment(post, comment);
    }
  };
  return (
    <article className="rounded-lg shadow-md border border-gray-200 w-full">
      <div className="flex items-center p-2">
        <Avatar image="profile.jpg" highlight size="medium" />
        <span className=" text-gray-900 font-bold ml-2">
          {CONFIG.user.name}
        </span>
      </div>

      <CarouselContainer
        images={images}
        alt={text}
        divStyle="relative w-full h-0 pb-[100%]"
        imageStyle="w-full h-full object-cover"
      />
      {id === "location" && (
        <MapDrawer>
          <div className="h-9 w-full bg-red-500 flex items-center justify-between pl-4 pr-3 border-t-2">
            <p className="text-white text-sm">자세한 위치 알아보기!</p>
            <MdKeyboardArrowRight className="text-white w-6 h-6" />
          </div>
        </MapDrawer>
      )}
      {id === "calendar" && (
        <GoogleCalendarButton>
          <div className="h-9 w-full bg-green-500 flex items-center justify-between pl-4 pr-3 border-t-2">
            <p className="text-white text-sm">구글 갤린더에 저장하기!</p>
            <MdKeyboardArrowRight className="text-white w-6 h-6" />
          </div>
        </GoogleCalendarButton>
      )}
      {id === "account" && (
        <AccountDrawer>
          <div className="h-9 w-full bg-blue-500 flex items-center justify-between pl-4 pr-3 border-t-2">
            <p className="text-white text-sm">축하의 마음 전하기!</p>
            <MdKeyboardArrowRight className="text-white w-6 h-6" />
          </div>
        </AccountDrawer>
      )}

      <HeartButton id={post.id} />
      <div className="px-4 py-1">
        <div>
          <span className="text-sm font-bold mr-1">{CONFIG.user.name}</span>
          <p className="text-sm text-neutral-700 my-2">{text}</p>
          <div className="flex flex-wrap">
            {hashtag.map((tag, index) => (
              <p key={index} className="text-xs text-blue-500 mr-2">
                #{tag}
              </p>
            ))}
          </div>

          <CommentList
            comments={comments}
            handleEditComment={handleEditComment}
          />
        </div>
        <CommentForm onPostComment={handlePostComment} />
      </div>
    </article>
  );
}
