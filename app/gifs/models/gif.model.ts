export interface Gif {
  type: string;
  id: string;
  url: string;
  username: string;
  title: string;
  images: Image;
  user: User;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
}

export interface Image {
  original: Original;
  downsized_medium: Downsized;
}

export interface Downsized {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface Original {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}
