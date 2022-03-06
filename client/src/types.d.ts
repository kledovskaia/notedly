type TNote = {
  id: string;
  content: string;
  author: TUser;
  favoriteCount: number;
  favoritedBy: TUser[];
  createdAt: string;
  updatedAt: string;
};

type TUser = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  notes: TNote[];
  favorites: TNote[];
};
