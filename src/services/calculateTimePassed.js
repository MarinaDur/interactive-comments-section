export function calculateTimePassed(createdAt) {
  const currentTime = new Date();
  const creationTime = new Date(createdAt);

  const differenceInSeconds = Math.floor((currentTime - creationTime) / 1000);

  if (differenceInSeconds === 0) {
    return "Just now";
  }

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} second${
      differenceInSeconds !== 1 ? "s" : ""
    } ago`;
  }

  const differenceInMinutes = Math.floor(differenceInSeconds / 60);

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} minute${
      differenceInMinutes !== 1 ? "s" : ""
    } ago`;
  }

  const differenceInHours = Math.floor(differenceInMinutes / 60);

  if (differenceInHours < 24) {
    return `${differenceInHours} hour${differenceInHours !== 1 ? "s" : ""} ago`;
  }

  const differenceInDays = Math.floor(differenceInHours / 24);

  if (differenceInDays < 30) {
    return `${differenceInDays} day${differenceInDays !== 1 ? "s" : ""} ago`;
  }

  const differenceInMonths = Math.floor(differenceInDays / 30);

  if (differenceInMonths < 12) {
    return `${differenceInMonths} month${
      differenceInMonths !== 1 ? "s" : ""
    } ago`;
  }

  const differenceInYears = Math.floor(differenceInMonths / 12);

  return `${differenceInYears} year${differenceInYears !== 1 ? "s" : ""} ago`;
}
