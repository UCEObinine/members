import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs5 from "@/components/blog/Blogs5";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog 4 Cols || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function Blog4ColsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={"Blog 4 Cols"} />
          <Blogs5 />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
