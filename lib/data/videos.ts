/**
 * Real client detailing videos, stored in /public/videos.
 * Each has a poster frame (.jpg) so the page loads fast; the video itself downloads only on play.
 * To add a video: drop `name.mp4` + `name.jpg` in /public/videos and add an entry here.
 */
export type DetailVideo = {
  src: string;
  poster: string;
  title: string;
  orientation: "portrait" | "landscape";
};

const v = (n: string, title: string, orientation: DetailVideo["orientation"] = "portrait"): DetailVideo => ({
  src: `/videos/kvs-detail-${n}.mp4`,
  poster: `/videos/kvs-detail-${n}.jpg`,
  title,
  orientation,
});

/** Only finished ("after") results are shown. Before-clips 03, 05, 07, 08 and unclear 01 are kept in /public/videos for future before/after pairs. */
export const detailVideos: DetailVideo[] = [
  v("02", "Finished interior: door panels and carpets"),
  v("04", "Finished interior: front cabin and door trim"),
  v("06", "Finished interior: seats, cargo area and dashboard"),
];
