import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import RecentPosts from "../molecules/recentpost";

export default function AllPosts(){
    return(
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <Post
            title="Nama : "
            body="Muhamad Al Faroby"
            />
            <Post
            title="NIM : "
            body="2341727001"
            />
            <RecentPosts />
        </Section2>
    );
}