import siteData from "@/data/siteData";

const blogData = siteData.find(item => item.blog_page)?.blog_page;

export async function generateMetadata() {
    return {
        title: blogData.meta_data.title,
        description: blogData.meta_data.description,
    };
}
const BlogIndexPage = () => {
    return (
        <div>BlogIndexPage</div>
    )
}

export default BlogIndexPage