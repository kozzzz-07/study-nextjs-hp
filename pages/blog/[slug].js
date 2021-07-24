import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";
import * as styles from "../../styles/Blog.module.css";

// 仮のページレンダリング処理
const BlogPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | MyWebsite</title>
      </Head>
      <article>
        <header>
          <h2 className={styles.header}>{post.title}</h2>
          <span>
            Posted: <time dateTime={post.date}>{post.date}</time>
          </span>
        </header>
        <ReactMarkdown remarkPlugins={[breaks]}>{post.body}</ReactMarkdown>
      </article>
    </>
  );
};

export const getStaticPaths = () => {
  const fileNames = fs.readdirSync("data");
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
  // 処理内容の確認用
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

// 仮のgetStaticProps
export const getStaticProps = ({ params }) => {
  const postPath = path.join("data", `${params.slug}.md`);
  const file = matter.read(postPath);
  const post = {
    title: file.data.title,
    date: file.data.date,
    body: file.content,
  };

  return { props: { post } };
};

export default BlogPage;
