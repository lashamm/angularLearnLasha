export interface StudentData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SupportInfo {
  url: string;
  text: string;
}

export class Student {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: StudentData[];
  support: SupportInfo;

  constructor(){
    this.page = 1;
    this.per_page = 6;
    this.total = 12;
    this.total_pages = 2;
    this.data = [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg"
      },
      {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg"
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg"
      }
    ];
    this.support = {
      url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
      text: "Tired of writing endless social media content? Let Content Caddy generate it for you."
    };
  }
}
