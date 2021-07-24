import Head from "next/head";
import Image from "next/image";
import styles from "../styles/App.module.css"

const HomePage = () => {
  return (
    <>
      {/* head要素の編集 */}
      <Head>
        <title>Home | MyWebsite</title>
      </Head>
      {/* お好みでコンテンツを編集 */}
      <div className={styles.greeting}>
        <span className={styles.avatar}>
          <Image
            src="/waifu.png"
            alt="プロフィール画像"
            width={48}
            height={48}
          />
        </span>
        <span className={styles.message}>こんにちは！私がhogeです！</span>
      </div>
    </>
  );
};

export default HomePage;