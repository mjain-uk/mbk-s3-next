import fs from "fs";
import path from "path";

export function getCarouselImages() {
  const imagesDirectory = path.join(process.cwd(), "public/home-page/carousel");
  const imageFiles = fs.readdirSync(imagesDirectory);

  // Separate small and large images based on suffix
  const extraSmall = imageFiles.filter((file) =>
    /-xs\.(jpg|jpeg|png|gif)$/.test(file)
  );
  const small = imageFiles.filter((file) =>
    /-sm\.(jpg|jpeg|png|gif)$/.test(file)
  );
  const medium = imageFiles.filter(
    (file) => /\.(jpg|jpeg|png|gif)$/.test(file) && !/(xs|sm)\./.test(file)
  );

  // Filter only image files, e.g., .jpg, .png, etc.
  return { extraSmall, small, medium };
}
