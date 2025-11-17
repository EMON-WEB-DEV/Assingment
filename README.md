answer 1 :- Interface:সহজে extend করা যায়। একাধিক interface একসাথে merge করা যায়।
Type:একবার declare করলে আবার declare করা যায় না, merge হয় না।


answer 4 : TypeScript–এ enum হলো একরকম নাম-দেওয়া মানের সেট, যেন তোমার কোডে ছড়িয়ে থাকা ম্যাজিক-নাম্বার আর এলোমেলো স্ট্রিংগুলোকে একটা জায়গায় বেঁধে রাখার নোঙর। কোডের উদ্দেশ্য পরিষ্কার হয়, ভুল কমে।

enum Status {
  Pending,      // 0
  Processing,   // 1
  Completed     // 2
}

const current: Status = Status.Pending;


enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

const userRole: Role = Role.User;
