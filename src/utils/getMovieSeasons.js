export default episodes => {
  const seasons = episodes.map(episode => episode.season);
  const sortedSeasons = Array.from(new Set(seasons)).sort((a, b) => a - b);
  return sortedSeasons;
};
