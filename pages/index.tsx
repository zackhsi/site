import Layout from "../components/Layout";
import Avatar from "../components/Avatar";

const IndexPage = () => (
  <Layout>
    <Avatar src="/avatar.jpg" alt="Zack Hsi's avatar" />
    <p>
      Hi, I'm Zack. I live in Singapore, where I build out Stripe's global
      payments network.
    </p>
    <p>
      My email is zackhsi@gmail.com.
    </p>
  </Layout>
);

export default IndexPage;
