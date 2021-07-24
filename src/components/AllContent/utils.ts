type HitType = {
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
};

type PageDataType = {
  hits: Array<HitType>;
};

type PageType = {
  data: PageDataType;
};

type DataType = {
  pages: Array<PageType>;
  pageParams: Array<any>;
};

export const formatHits = (hits: Array<HitType>) => {
  return hits
    .map((hit) => {
      const { author, created_at, story_title, story_url } = hit;

      if (hit.author && hit.created_at && hit.story_title && hit.story_url) {
        return { author, created_at, story_title, story_url };
      } else {
        return undefined;
      }
    })
    .filter(Boolean);
};

export const getHits = (data: DataType) => {
  const hits = data.pages.map((page) => page.data.hits).flat(2);

  return hits;
};

export const formatData = (data: DataType) => {
  const hits = getHits(data);

  const formattedHits = formatHits(hits);

  return formattedHits;
};
