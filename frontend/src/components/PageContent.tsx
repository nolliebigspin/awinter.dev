import { PageEntity } from "@/lib/genTypes";

import Header from "./Header";
import Segments from "./Segments";

export type PageContentProps = {
  data?: PageEntity;
};

const PageContent = ({ data }: PageContentProps) => {
  return (
    <section className="flex flex-col items-center p-6 text-justify">
      {data ? (
        <div className="flex flex-col py-12">
          {data.attributes?.headline && (
            <Header title={data.attributes?.headline} />
          )}
          {data.attributes?.segments && (
            <Segments segments={data.attributes.segments} />
          )}
        </div>
      ) : (
        <Header title={"No content found!"} />
      )}
    </section>
  );
};

export default PageContent;
