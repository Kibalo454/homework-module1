function currentTime() {
  const d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let ampm = hr >= 12 ? "PM" : "AM";

  if (hr === 0) {
    hr = 12;
  } else if (hr > 12) {
    hr -= 12;
  }

  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  // Get full time zone name
  const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Map to short abbreviation
  let timezone = "Local";
  if (tzName.includes("Los_Angeles")) timezone = "PT";
  else if (tzName.includes("Denver")) timezone = "MT";
  else if (tzName.includes("Chicago")) timezone = "CT";
  else if (tzName.includes("New_York")) timezone = "ET";

  const timeString = `${hr}:${min}:${sec} ${ampm} ${timezone}`;
  const clockSpan = document.getElementById("clock");

  if (clockSpan) {
    clockSpan.innerText = timeString;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  currentTime();
  setInterval(currentTime, 1000);
});
