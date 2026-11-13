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

export const detailVideos: DetailVideo[] = [
  v("01", "Interior detail walkthrough: seats, console and floor"),
  v("02", "Interior detail walkthrough: door panels and carpets"),
  v("03", "Interior detail walkthrough: floor mats and leather seats"),
  v("04", "Interior detail walkthrough: front cabin and door trim"),
  v("05", "Interior detail walkthrough: SUV cabin and cargo area"),
  v("06", "Interior detail walkthrough: seats, cargo area and dashboard"),
  v("07", "Interior detail walkthrough: leather seat cleaning", "landscape"),
  v("08", "Interior detail walkthrough: seats, door and dashboard"),
];
