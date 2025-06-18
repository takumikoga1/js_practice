// 課題2: 分割代入とスプレッド構文
// 事前に 2.4.2 分割代入 を読んでから取り組む

const userProfile = {
  basic: {
    name: "山田太郎",
    age: 25,
    email: "yamada@example.com",
  },
  address: {
    prefecture: "東京都",
    city: "渋谷区",
  },
  skills: ["JavaScript", "Python", "SQL"],
};

// TODO 1: 分割代入を使ってname, emailを取り出す
const {
  basic: { name, email },
} = userProfile;
console.log(name);
console.log(email);
// TODO 2: スプレッド構文を使ってskillsに'TypeScript'を追加した新配列を作成
const newSkills = [...userProfile.skills, "TypeScript"];
console.log(newSkills);
// TODO 3: userProfileをコピーしてageを26に更新（イミュータブルに）
const newUserProfileBasic = {
  ...userProfile.basic,
  age: 26,
};
const newUserProfile = {
  ...userProfile,
  basic: newUserProfileBasic,
};
console.log(userProfile);
console.log(newUserProfile);
