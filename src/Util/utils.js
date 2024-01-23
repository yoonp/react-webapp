export function getFormattedTime(time) {
  if(!time) return "";
  const timeParts = time.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (timeParts) {
    const hour = timeParts[1] ? parseInt(timeParts[1], 10) + " : " : '';
    const minute = timeParts[2] ? parseInt(timeParts[2], 10).toFixed(0).padStart(2, "0") : "00";
    const second = timeParts[3] ? parseInt(timeParts[3], 10).toFixed(0).padStart(2, "0"): "00";

    return `${hour} ${minute} : ${second}`;
  } else {
    return "Invalid time format";
  }
}

export function getFormattedPace(pace) {
  console.log("pace : " + pace);
  if(!pace) return "";
  const paceParts = pace.split("M");
  const minute = paceParts[0].replace("PT", "").padStart(2, "0");
  const secondsWithFraction = paceParts[1].replace("S", "");
  const second = secondsWithFraction.split(".")[0].padStart(2, "0");

  return `${minute} : ${second} /km`;
}
