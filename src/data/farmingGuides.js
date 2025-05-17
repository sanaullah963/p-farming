const farmingGuides = [
  {
    id: 1,
    title: "Tomato Cultivation Guide",
    cropType: "Vegetables",
    season: "Winter",
    method: "Organic",
    videoUrl: "https://www.youtube.com/embed/OMIbtIZ2E-Q?si=08CIJxEvSF8jQAMJ", // iframe link
    image: "/crops/tometo.jpg",
    steps: [
      "Select disease-resistant tomato seeds.",
      "Prepare well-drained loamy soil.",
      "Use compost and organic fertilizer.",
      "Water twice a day in early stages.",
    ],
    tips: [
      "Use certified seeds for better yield.",
      "Avoid overwatering to prevent root rot.",
      "Monitor for pests weekly."
    ]
  },
  {
    id: 2,
    title: "Rice Farming in Monsoon",
    cropType: "Grains",
    season: "Monsoon",
    method: "Conventional",
    videoUrl: "https://www.youtube.com/embed/7w0XuoqvCFg?si=Ytdby0xC85EQteF6",
    image: "/crops/rice.jpg",
    steps: [
      "Soak seeds overnight.",
      "Prepare flooded paddy fields.",
      "Transplant saplings in rows.",
      "Apply urea in 3 split doses.",
    ],
    tips: [
      "Use certified seeds for better yield.",
      "Avoid overwatering to prevent root rot.",
      "Monitor for pests weekly."
    ]
  },
  // Add more guides...
];

export default farmingGuides;
