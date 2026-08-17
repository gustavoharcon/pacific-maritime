import siteData from "@/data/siteData";
import HeroSection from "@/components/HeroSections/HeroSection";
import TopText from "@/components/Text/TopText";
import { generatePageMetadata } from "@/utils/metadata";

const blogData = siteData.find(item => item.blog_page)?.blog_page;
const latestPostsFromPmi = blogData.latest_posts_from_pmi;

export async function generateMetadata() {
    return generatePageMetadata({
        title: blogData.meta_data.title,
        description: blogData.meta_data.description,
        path: "/blog",
    });
}
const BlogIndexPage = () => {
    return (
        <div className="blog-page-content">
            <HeroSection data={blogData.hero_section} />
            <section className="latest-posts-from-pmi">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={latestPostsFromPmi.top_text} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogIndexPage