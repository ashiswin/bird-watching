export interface Photo {
  uri: string;
  user: string;
}

export const getPhotosForUser = (userId: string): Photo[] => {
  // TODO: Perform server fetch for user's photos
  return [
    {
      uri: "https://images.theconversation.com/files/317169/original/file-20200225-24676-v59sd7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
      user: "ashiswin"
    },
    {
      uri: "https://www.thisiscolossal.com/wp-content/uploads/2020/10/flach-tern-.jpg",
      user: "ashiswin"
    },
    {
      uri: "https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png",
      user: "ashiswin"
    },
    {
      uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/19/pinyon-jay-bird.jpg",
      user: "ashiswin"
    },
  ];
};

export const getShotsOfTheDay = (): Photo[] => {
  return [
    {
      uri: "https://images.theconversation.com/files/317169/original/file-20200225-24676-v59sd7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
      user: "fredboi123"
    },
    {
      uri: "https://www.thisiscolossal.com/wp-content/uploads/2020/10/flach-tern-.jpg",
      user: "lanvoine"
    },
    {
      uri: "https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png",
      user: "abcdefg"
    },
    {
      uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/19/pinyon-jay-bird.jpg",
      user: "qwertyuiop"
    },
  ]
}
