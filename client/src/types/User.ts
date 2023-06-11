export type UserRegister = {
    userName: string;
    name: string;
    password: string;
    email: string;
};

export type User = {
    userId: number;
    userName: string;
    name: string;
    bio: string;
    createdAt: string;
};

export type UpdateProfileDetailRequest = {
    bio: string;
    name: string;
};
