type FontFaceSource = {
  family: string;
  source: string;
  descripter: FontFaceDescriptors;
};

const FONT_FACE_SOURCES: FontFaceSource[] = [
  {
    descripter: {
      display: 'block',
      style: 'normal',
      weight: '700',
    },
    family: 'Noto Serif JP',
    source: "url('/fonts/NotoSerifJP-Bold.woff')",
  },
  {
    descripter: {
      display: 'block',
      style: 'normal',
      weight: '400',
    },
    family: 'Noto Serif JP',
    source: "url('/fonts/NotoSerifJP-Regular.woff')",
  },
];

export async function loadFonts() {
  const fontFaces = FONT_FACE_SOURCES.map(({ descripter, family, source }) => new FontFace(family, source, descripter));
  const fonts: FontFace[] = [];

  for (const fontFace of fontFaces) {
    const font = await fontFace.load();
    fonts.push(font);
  }

  for (const font of fontFaces) {
    document.fonts.add(font);
  }
}
