import { Content } from "./section-2/HomeSection2";

export const homeSection2Contents: Content[] = [
  {
    title: "BRIDAL SPECIALIST",
    para: "With years of experience in bridal makeup, I specialize in creating timeless looks that reflect your personal style. From radiant, natural finishes to bold, statement-making glam, I ensure every bride feels beautiful and confident on her special day. My attention to detail ensures that your makeup will last through every tear, laugh, and moment, keeping you flawless from 'I do' to the last dance.",
    logoPath: `${process.env.S3_CDN_ENDPOINT}/bridal-pics/bridal-11.jpeg`,
  },

  {
    title: "HAIR SPECIALIST",
    para: "As a hair styling expert, I craft stunning hairstyles tailored to your unique look and occasion. Whether it’s elegant updos, soft waves, or intricate braids, I bring your hair vision to life with precision and creativity. Using top-tier products and techniques, I ensure your hairstyle stays in place, looks beautiful in photos, and complements your overall style perfectly.",
    logoPath: `${process.env.S3_CDN_ENDPOINT}/hair-pics/hair-5.jpeg`,
  },
];

export const slidesForHomeSection3 = [
  "/home-page/section-3/one.jpeg",
  "/home-page/section-3/two.jpeg",
  "/home-page/section-3/three.jpeg",
  "/home-page/section-3/four.jpeg",
  "/home-page/section-3/five.jpeg",
  "/home-page/section-3/six.jpeg",
];
