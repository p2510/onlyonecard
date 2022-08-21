import Page from "../atoms/Page";
import ArticleBlog from "../organisms/article-blog/ArticleBlog";

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <Page title="Page d'accueil | ONLYONE">
      <ArticleBlog />
    </Page>
  );
}
