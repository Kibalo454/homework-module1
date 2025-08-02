// ------ PARTNERS ------
const partners = [
  { src: "partners/partner-bustour.png", alt: "Bus Tour Logo" },
  { src: "partners/partner-cabinrental.png", alt: "Cabin Rental Logo" },
  { src: "partners/partner-campingadv.png", alt: "Camping Adventure Logo" },
  { src: "partners/partner-collegetours.png", alt: "College Tours Logo" },
  { src: "partners/partner-rentalbike.png", alt: "Rental Bike Logo" },
  { src: "partners/partner-tourgroup.png", alt: "Tour Group Logo" }
];

const partnerSection = document.querySelector(".partners");

partners.forEach(partner => {
  const img = document.createElement("img");
  img.src = partner.src;
  img.alt = partner.alt;
  partnerSection.appendChild(img);
});
