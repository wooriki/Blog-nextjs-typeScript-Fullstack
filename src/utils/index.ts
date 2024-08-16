import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "블로그의 제목을 입력해 주세요",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "내용을 입력해 주세요",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "카테고리를 선택해 주세요",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCwELglaQNvrrp2GVgVIfEE_HPCX5XyiF0",
  authDomain: "nextjs-blog24-ts.firebaseapp.com",
  projectId: "nextjs-blog24-ts",
  storageBucket: "nextjs-blog24-ts.appspot.com",
  messagingSenderId: "775250245636",
  appId: "1:775250245636:web:1725432918d4dbd7491d51",
  measurementId: "G-04GBWPL828",
};

export const initialBlogFormData = {
  title: "",
  description: "",
  image: "",
  category: "",
};
